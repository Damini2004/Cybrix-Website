
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { updateWebinar, Webinar } from "@/services/webinarService";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format, parse } from "date-fns";
import { getSubAdmins, SubAdmin } from "@/services/subAdminService";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";

const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters."),
  description: z.string().min(20, "Description must be at least 20 characters."),
  date: z.date({ required_error: "A date is required." }),
  image: z.any().optional(),
  brochure: z.any().optional(),
  assignedSubAdminId: z.string().optional(),
});

interface EditWebinarFormProps {
    webinar: Webinar;
    onWebinarUpdated: () => void;
}

export default function EditWebinarForm({ webinar, onWebinarUpdated }: EditWebinarFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [subAdmins, setSubAdmins] = React.useState<SubAdmin[]>([]);
  const [openCombobox, setOpenCombobox] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: webinar.title,
      description: webinar.description,
      date: parse(webinar.date, "PPP", new Date()),
      assignedSubAdminId: webinar.assignedSubAdminId || "none",
    },
  });

  React.useEffect(() => {
    async function fetchAdmins() {
        try {
            const admins = await getSubAdmins({ approvedOnly: true });
            setSubAdmins(admins);
        } catch (error) {
            toast({
                title: "Error",
                description: "Could not fetch sub-admins for assignment.",
                variant: "destructive",
            });
        }
    }
    fetchAdmins();
  }, [toast]);

  const imageFileRef = form.register("image");
  const brochureFileRef = form.register("brochure");

  const convertFileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
      });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const updateData: Partial<Webinar> & { date: string } = {
      title: values.title,
      description: values.description,
      date: format(values.date, "yyyy-MM-dd"),
      assignedSubAdminId: values.assignedSubAdminId === "none" ? undefined : values.assignedSubAdminId,
    };

    if (values.image && values.image.length > 0) {
        try {
            updateData.imageSrc = await convertFileToBase64(values.image[0]);
        } catch (error) {
            toast({ title: "Error", description: "Failed to read image file.", variant: "destructive" });
            setIsSubmitting(false);
            return;
        }
    }

    if (values.brochure && values.brochure.length > 0) {
      try {
        updateData.brochureUrl = await convertFileToBase64(values.brochure[0]);
      } catch (error) {
        toast({ title: "Error", description: "Failed to read brochure file.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
    } else if (values.brochure === null) {
        updateData.brochureUrl = "";
    }

    const result = await updateWebinar(webinar.id, updateData);

    if (result.success) {
      onWebinarUpdated();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Webinar Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Introduction to Quantum Machine Learning" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A brief description of the webinar."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormLabel>New Banner Image (Optional)</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" {...imageFileRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brochure"
          render={() => (
            <FormItem>
              <FormLabel>New Brochure (Optional, PDF/DOC)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  {...brochureFileRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField control={form.control} name="assignedSubAdminId" render={({ field }) => ( 
            <FormItem className="flex flex-col">
                <FormLabel>Assign Sub-Admin</FormLabel>
                <FormControl>
                    <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" className={cn("w-full justify-between", !field.value && "text-muted-foreground")} >
                                {field.value && field.value !== "none" ? subAdmins.find( (admin) => admin.id === field.value )?.name : "Select Sub-Admin"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                            <Command>
                                <CommandInput placeholder="Search sub-admins..." />
                                <CommandList>
                                    <CommandEmpty>No approved sub-admins found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandItem value={"none"} onSelect={() => { form.setValue("assignedSubAdminId", "none"); setOpenCombobox(false); }} >
                                            None
                                        </CommandItem>
                                        {subAdmins.map((admin) => (
                                            <CommandItem value={admin.name} key={admin.id} onSelect={() => { form.setValue("assignedSubAdminId", admin.id); setOpenCombobox(false); }} >
                                                <Check className={cn("mr-2 h-4 w-4", admin.id === field.value ? "opacity-100" : "opacity-0" )}/>
                                                {admin.name}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </FormControl>
                <FormMessage />
            </FormItem>
        )} />
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
}

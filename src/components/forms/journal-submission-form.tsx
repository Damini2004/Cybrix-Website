

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getJournals, type Journal } from "@/services/journalService";
import { getConferences, type Conference } from "@/services/conferenceService";
import { addSubmission } from "@/services/submissionService";
import { useRouter } from "next/navigation";
import { getCurrentDateInIndia } from "@/lib/utils";
import { User, FileText, UploadCloud } from "lucide-react";
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  title: z.string().min(5, "Title must be at least 5 characters."),
  submissionType: z.string({ required_error: "Please select a submission type." }),
  targetId: z.string().min(1, { message: "Please select a target from the list." }),
  manuscriptFile: z
    .any()
    .refine((files) => files?.length > 0, "A manuscript file is required.")
    .refine(
      (files) => {
        const file = files?.[0];
        if (!file) return false;
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        return allowedTypes.includes(file.type);
      },
      "Only PDF, DOC, or DOCX files are allowed."
    ),
  content: z.string().min(100, "Content must be at least 100 characters."),
  resubmissionId: z.string().optional(),
});

type SubmissionItem = { id: string; name: string };

export default function JournalSubmissionForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [submissionType, setSubmissionType] = React.useState<string>("");
  const [items, setItems] = React.useState<SubmissionItem[]>([]);
  const [isItemsLoading, setIsItemsLoading] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      title: "",
      content: "",
      submissionType: "",
      targetId: "",
      resubmissionId: "",
    },
  });
  
  const handleTypeChange = async (type: string) => {
    setSubmissionType(type);
    setItems([]);
    form.setValue('targetId', ''); // Reset target when type changes
    if (!type) return;

    setIsItemsLoading(true);
    try {
      let fetchedItems: SubmissionItem[] = [];
      if (type === 'journal') {
        const journals = await getJournals();
        fetchedItems = journals.filter(j => j.status === 'Active').map(j => ({ id: j.id, name: j.journalName }));
      } else if (type === 'conference') {
        const conferences = await getConferences();
        const currentDate = getCurrentDateInIndia();
        const upcomingConferences = conferences.filter(conf => conf.dateObject && conf.dateObject.getTime() >= currentDate.getTime());
        fetchedItems = upcomingConferences.map(c => ({ id: c.id, name: c.title }));
      }
      setItems(fetchedItems);
    } catch (error) {
      toast({
        title: "Error",
        description: `Could not load ${type}s. Please try again later.`,
        variant: "destructive",
      });
    } finally {
      setIsItemsLoading(false);
    }
  };

  const fileRef = form.register("manuscriptFile");

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

    let manuscriptData = "";
    if (values.manuscriptFile && values.manuscriptFile.length > 0) {
        try {
            manuscriptData = await convertFileToBase64(values.manuscriptFile[0]);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to read manuscript file.",
                variant: "destructive",
            });
            setIsSubmitting(false);
            return;
        }
    } else {
       toast({
        title: "Submission Failed",
        description: "Manuscript file is missing.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const result = await addSubmission({
      fullName: values.fullName,
      email: values.email,
      title: values.title,
      targetId: values.targetId,
      submissionType: values.submissionType,
      content: values.content,
      manuscriptData,
      resubmissionId: values.resubmissionId,
    });

    if (result.success) {
        toast({
            title: "Submission Successful!",
            description: "Your submission has been received for review.",
        });
        form.reset();
        router.refresh();
    } else {
        toast({
            title: "Submission Failed",
            description: result.message,
            variant: "destructive",
        });
    }

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="text-center p-8 md:p-10 bg-muted/30">
              <CardTitle className="text-3xl">Submission Details</CardTitle>
              <CardDescription>
                  Fill out the form below to submit your manuscript for review.
              </CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-10 space-y-8">
              <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-primary"><User /> Author Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="fullName" render={({ field }) => ( <FormItem> <FormLabel>Full Name</FormLabel> <FormControl><Input placeholder="John Doe" {...field} /></FormControl> <FormMessage /> </FormItem> )} />
                      <FormField control={form.control} name="email" render={({ field }) => ( <FormItem> <FormLabel>Email Address</FormLabel> <FormControl><Input placeholder="you@example.com" {...field} /></FormControl> <FormMessage /> </FormItem> )} />
                  </div>
              </div>

              <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-primary"><FileText /> Submission Information</h3>
                  <FormField control={form.control} name="title" render={({ field }) => ( <FormItem> <FormLabel>Manuscript Title / Application Subject</FormLabel> <FormControl><Input placeholder="A Study on..." {...field} /></FormControl> <FormMessage /> </FormItem> )} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="submissionType" render={({ field }) => ( <FormItem> <FormLabel>Submission Type</FormLabel> <Select onValueChange={(value) => { field.onChange(value); handleTypeChange(value); }} defaultValue={field.value}> <FormControl><SelectTrigger><SelectValue placeholder="Select a type" /></SelectTrigger></FormControl> <SelectContent> <SelectItem value="journal">Journal</SelectItem> <SelectItem value="conference">Conference</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem> )} />
                      <FormField control={form.control} name="targetId" render={({ field }) => ( <FormItem> <FormLabel>Select {submissionType ? submissionType.charAt(0).toUpperCase() + submissionType.slice(1) : 'Target'}</FormLabel> <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isItemsLoading || !submissionType} value={field.value}> <FormControl><SelectTrigger><SelectValue placeholder={ isItemsLoading ? `Loading ${submissionType}s...` : !submissionType ? 'First, select a type' : `Select a ${submissionType}` } /></SelectTrigger></FormControl> <SelectContent> {items.map((item) => ( <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem> ))} </SelectContent> </Select> <FormMessage /> </FormItem> )} />
                  </div>
              </div>

              <div className="space-y-6">
                   <h3 className="text-lg font-semibold flex items-center gap-2 text-primary"><UploadCloud /> Manuscript & Content</h3>
                   <FormField control={form.control} name="manuscriptFile" render={({ field }) => ( <FormItem> <FormLabel>Manuscript File (PDF, DOC, DOCX)</FormLabel> <FormControl><Input type="file" accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" {...fileRef} /></FormControl> <FormMessage /> </FormItem> )} />
                   <FormField control={form.control} name="content" render={({ field }) => ( <FormItem> <FormLabel>Abstract / Content</FormLabel> <FormControl><Textarea placeholder="Paste the abstract or a summary of your work here..." className="min-h-[150px]" {...field} /></FormControl> <FormMessage /> </FormItem> )} />
                   <FormField control={form.control} name="resubmissionId" render={({ field }) => ( <FormItem> <FormLabel>Re-submission ID (Optional)</FormLabel> <FormControl><Input placeholder="Enter the ID if you are re-submitting a revised manuscript" {...field} /></FormControl> <FormMessage /> </FormItem> )} />
              </div>
          </CardContent>
          <CardFooter className="p-8 md:p-10 bg-muted/30">
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit for Review"}
              </Button>
          </CardFooter>
      </form>
    </Form>
  );
}

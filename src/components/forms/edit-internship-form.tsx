
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
import { updateInternship, Internship } from "@/services/internshipService";

const formSchema = z.object({
  name: z.string().min(5, "Internship name must be at least 5 characters."),
  description: z.string().min(20, "Description must be at least 20 characters."),
  image: z.any().optional(),
  brochure: z.any().optional(),
});

interface EditInternshipFormProps {
    internship: Internship;
    onInternshipUpdated: () => void;
}

export default function EditInternshipForm({ internship, onInternshipUpdated }: EditInternshipFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: internship.name,
      description: internship.description,
    },
  });

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
    
    const updateData: Partial<Internship> = {
      name: values.name,
      description: values.description,
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
    } else if (values.brochure === null) { // Handle case where user might clear the brochure
        updateData.brochureUrl = "";
    }


    const result = await updateInternship(internship.id, updateData);

    if (result.success) {
      onInternshipUpdated();
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Internship Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Editorial Assistant Intern" {...field} />
              </FormControl>
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
                  placeholder="A brief description of the internship role and responsibilities."
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
              <FormLabel>New Display Image (Optional)</FormLabel>
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
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
}

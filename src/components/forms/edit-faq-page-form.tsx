// src/components/forms/edit-faq-page-form.tsx
"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
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
import { useToast } from "@/hooks/use-toast";
import { updatePageContent, type CmsPage } from "@/services/cmsService";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { PlusCircle, Trash2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const faqItemSchema = z.object({
  question: z.string().min(1, "Question cannot be empty."),
  answer: z.string().min(1, "Answer cannot be empty."),
});

const formSchema = z.object({
  faqs: z.array(faqItemSchema),
});

interface EditFaqPageFormProps {
  page: CmsPage;
  onPageUpdated: () => void;
}

export default function EditFaqPageForm({ page, onPageUpdated }: EditFaqPageFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Ensure content is an array, provide a fallback
  const initialFaqs = Array.isArray(page.content) ? page.content : [];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      faqs: initialFaqs,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "faqs",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // The content being saved is the array of FAQs
    const result = await updatePageContent(page.id, values.faqs);

    if (result.success) {
      onPageUpdated();
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
        <div className="space-y-4">
          {fields.map((field, index) => (
            <Card key={field.id} className="relative p-4 pt-6">
                <Button 
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-destructive hover:bg-destructive/10"
                    onClick={() => remove(index)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
                <CardContent className="p-0 space-y-4">
                     <FormField
                        control={form.control}
                        name={`faqs.${index}.question`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Question {index + 1}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter the question" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name={`faqs.${index}.answer`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Answer {index + 1}</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder="Enter the answer" className="min-h-[100px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-between items-center">
             <Button
                type="button"
                variant="outline"
                onClick={() => append({ question: "", answer: "" })}
                >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add FAQ
            </Button>
            <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save FAQs"}
            </Button>
        </div>
      </form>
    </Form>
  );
}

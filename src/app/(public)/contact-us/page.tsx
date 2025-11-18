import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Cybrix Support & Inquiries",
  description: "Get in touch with the Cybrix team. Contact us via our online form, email, or phone for support with publications, conferences, or any other questions.",
  keywords: ["contact cybrix", "cybrix support", "academic inquiry", "email cybrix", "cybrix phone number", "cybrix address", "research publication help"],
};


export default function ContactUsPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We'd love to hear from you. Whether you have a question, feedback, or need support, our team is ready to help.</p>
        </section>

        <section id="contact-form" aria-labelledby="contact-form-heading">
            <Card className="max-w-3xl mx-auto mb-16 shadow-xl border-primary/10">
              <CardHeader>
                <h2 id="contact-form-heading" className="text-center text-3xl font-bold">Send us a Message</h2>
                <CardDescription className="text-center">Fill out the form and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
        </section>

        <section aria-labelledby="other-connections-heading">
            <div className="text-center mb-12">
                <h2 id="other-connections-heading" className="text-3xl font-bold tracking-tight">Other Ways to Connect</h2>
                <p className="mt-3 text-muted-foreground">Find us through our other channels.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="p-4 bg-primary/10 rounded-full inline-flex mb-4">
                        <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">General: <a href="mailto:cybrix@gmail.com" className="text-primary hover:underline">cybrix@gmail.com</a></p>
                    <p className="text-muted-foreground">Support: <a href="mailto:cybrix@gmail.com" className="text-primary hover:underline">cybrix@gmail.com</a></p>
                </div>
                 <div className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="p-4 bg-primary/10 rounded-full inline-flex mb-4">
                        <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+91-7020095748</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm IST</p>
                </div>
                <div className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="p-4 bg-primary/10 rounded-full inline-flex mb-4">
                        <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Office</h3>
                    <address className="text-muted-foreground not-italic">202-Cybrix, Planet Apartment, Jaywant Nagar, Omkar Nagar, Nagpur, Maharashtra 440027</address>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

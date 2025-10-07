
import Link from "next/link";
import { Logo } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";

const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact-us", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/conference/faq", label: "FAQ" },
]

const serviceLinks = [
    { href: "/publications", label: "Publications" },
    { href: "/conference", label: "Conferences" },
    { href: "/ipr-services", label: "IPR Services" },
    { href: "/internship", label: "Internships" },
]

const socialLinks = [
    { href: "https://www.linkedin.com/company/pure-researcher-insights/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.youtube.com/@PureResearchInsights", icon: Youtube, label: "YouTube" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/pure_research_insights?igsh=ZjdqZXN5NHRtemhn", icon: Instagram, label: "Instagram" },
]

const Footer = () => {
    return (
        <footer className="bg-sidebar text-sidebar-foreground">
            <div className="container mx-auto px-4 pt-16 pb-8">
                {/* Top section with Newsletter */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 border-b border-sidebar-border pb-12">
                    <div>
                        <h2 className="text-3xl font-headline font-bold">Stay Updated with Cybrix</h2>
                        <p className="mt-2 text-sidebar-foreground/70">Subscribe to our newsletter for the latest news on conferences, publications, and more.</p>
                    </div>
                    <form className="flex w-full max-w-md items-center space-x-2">
                        <Input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="h-12 bg-sidebar-foreground/10 border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/60 focus:bg-sidebar-foreground/20"
                        />
                        <Button type="submit" size="lg" className="h-12 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
                            <Send className="mr-2 h-4 w-4" /> Subscribe
                        </Button>
                    </form>
                </div>

                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4 lg:col-span-3 space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo className="h-16 w-16" />
                        </Link>
                        <p className="text-sm text-sidebar-foreground/70 pr-4">
                            Empowering researchers and businesses with expert solutions for journal submissions, conference organization, and publication consultancy.
                        </p>
                    </div>

                    <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                                {quickLinks.map(link => (
                                    <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                                {serviceLinks.map(link => (
                                    <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-2 space-y-4">
                            <h3 className="text-lg font-semibold">Contact Info</h3>
                            <div className="space-y-2 text-sm text-sidebar-foreground/70">
                                <p className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                                    <span>202-Cybrix, Planet Apartment, Jaywant Nagar, Omkar Nagar, Nagpur, Maharashtra 440027</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                                    <span>+91-7020095748</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                                    <Link href="mailto:pureresearchinsights@gmail.com" className="hover:text-white">pureresearchinsights@gmail.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-sidebar-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
                     <p className="text-sm text-sidebar-foreground/70 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Cybrix. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        {socialLinks.map(link => (
                            <Link key={link.label} href={link.href} className="text-sidebar-foreground/70 hover:text-white transition-colors" aria-label={link.label}>
                                <link.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

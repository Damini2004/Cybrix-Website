import Link from "next/link";
import { Logo } from "@/components/icons";
import { Mail, MapPin, Phone, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

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
        <footer className="bg-background text-foreground border-t">
            <div className="container mx-auto px-4 pt-16 pb-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4 lg:col-span-3 space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo className="h-28 w-28" />
                        </Link>
                    </div>

                    <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {quickLinks.map(link => (
                                    <li key={link.label}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {serviceLinks.map(link => (
                                    <li key={link.label}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-2 space-y-4">
                            <h3 className="text-lg font-semibold">Contact Info</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                    <span>202-Cybrix, Planet Apartment, Jaywant Nagar, Omkar Nagar, Nagpur, Maharashtra 440027</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                    <span>+91-7020095748</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                    <Link href="mailto:cybrix@gmail.com" className="hover:text-primary">cybrix@gmail.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
                     <p className="text-sm text-muted-foreground text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Cybrix. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        {socialLinks.map(link => (
                            <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={link.label}>
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

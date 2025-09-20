
import Link from "next/link";
import { Logo } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const quickLinks = [
    { href: "#", label: "Talk to an Expert" },
    { href: "#", label: "Our Policies" },
    { href: "/about", label: "Blog" },
    { href: "/internship", label: "Internship" },
]

const exploreLinks = [
    { href: "#", label: "Cybrix" },
    { href: "/about", label: "Careers" },
    { href: "/research-support", label: "Research Support" },
    { href: "/contact-us", label: "Contact Us" },
]

const socialLinks = [
    { href: "https://www.linkedin.com/company/pure-researcher-insights/", icon: Linkedin },
    { href: "https://www.youtube.com/@PureResearchInsights", icon: Youtube },
    { href: "#", icon: Facebook },
    { href: "https://www.instagram.com/pure_research_insights?igsh=ZjdqZXN5NHRtemhn", icon: Instagram },
]

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
)


const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Info */}
                    <div className="space-y-4 md:col-span-2 lg:col-span-1">
                        <div className="space-y-2 text-sm text-gray-300">
                            <p className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                                <span>202-Cybrix, Planet Apartment, Jaywant Nagar, Omkar Nagar, Nagpur, Maharashtra 440027</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <Phone className="h-4 w-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                                <span>+91-7020095748</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <Mail className="h-4 w-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                                <Link href="mailto:pureresearchinsights@gmail.com" className="hover:text-yellow-400">pureresearchinsights@gmail.com</Link>
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 relative">
                            Quick Links
                            <span className="absolute bottom-[-4px] left-0 h-0.5 w-12 bg-yellow-400"></span>
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {quickLinks.map(link => (
                                <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Explore */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 relative">
                            Explore
                             <span className="absolute bottom-[-4px] left-0 h-0.5 w-12 bg-yellow-400"></span>
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {exploreLinks.map(link => (
                                <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 4: Map */}
                    <div className="space-y-6">
                        <div>
                           <h3 className="text-lg font-semibold mb-4 relative">
                                Our Location
                                <span className="absolute bottom-[-4px] left-0 h-0.5 w-12 bg-yellow-400"></span>
                            </h3>
                            <div className="overflow-hidden rounded-md">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3424623913434!2d79.08999457549149!3d21.098908680568048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfc7aff3723f%3A0x3008e412fdbad687!2sCybrix!5e0!3m2!1sen!2sin!4v1758197039783!5m2!1sen!2sin" width="600" height="450" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-6">
                    <div className="flex flex-col items-center mt-10">
                        <h4 className="font-semibold mb-4">Follow us</h4>
                        <div className="flex items-center space-x-3">
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;

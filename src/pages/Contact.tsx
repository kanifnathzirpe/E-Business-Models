import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    businessType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      businessType: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto text-center">
          <MessageCircle className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Have questions about our e-business solutions? We're here to help you succeed
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessType">Business Interest</Label>
                      <select
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="B2B">B2B Solutions</option>
                        <option value="B2C">B2C Platform</option>
                        <option value="C2C">C2C Marketplace</option>
                        <option value="General">General Inquiry</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Support">Technical Support</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project or question..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-muted-foreground">info@ebusinesshub.com</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-muted-foreground">+1-800-EBUS-HELP</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-muted-foreground">
                        123 Business Plaza<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business-Specific Contact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Business-Specific Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border-l-4 border-l-b2b-primary bg-b2b-accent/10 rounded-r-lg">
                    <h4 className="font-semibold text-b2b-primary">B2B Enterprise</h4>
                    <p className="text-sm text-muted-foreground">enterprise@ebusinesshub.com</p>
                    <p className="text-xs text-muted-foreground">Dedicated account management</p>
                  </div>

                  <div className="p-4 border-l-4 border-l-b2c-primary bg-b2c-accent/10 rounded-r-lg">
                    <h4 className="font-semibold text-b2c-primary">B2C Store Support</h4>
                    <p className="text-sm text-muted-foreground">store@ebusinesshub.com</p>
                    <p className="text-xs text-muted-foreground">Customer service & returns</p>
                  </div>

                  <div className="p-4 border-l-4 border-l-c2c-primary bg-c2c-accent/10 rounded-r-lg">
                    <h4 className="font-semibold text-c2c-primary">C2C Marketplace</h4>
                    <p className="text-sm text-muted-foreground">community@ebusinesshub.com</p>
                    <p className="text-xs text-muted-foreground">Community support & disputes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I get started with B2B?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Simply browse our catalog and request quotes for bulk orders. Our B2B team will contact you within 24 hours to discuss pricing and terms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is the B2C store secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, we use SSL encryption for all transactions and support multiple secure payment methods including PayPal, Apple Pay, and major credit cards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How does C2C verification work?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All C2C users go through identity verification. We also have a rating system and community moderation to ensure safe transactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your shipping options?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We offer standard (5-7 days), expedited (2-3 days), and overnight shipping. B2B orders include freight shipping options for bulk orders.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your E-Business Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform to grow their online presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
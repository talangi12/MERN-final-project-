import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, HeadphonesIcon, FileText, Users } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91 1800-123-4567",
      availability: "Mon-Fri, 9 AM - 6 PM",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries via email",
      contact: "support@farmfresh.com",
      availability: "24/7 Response",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support agents",
      contact: "Available on website",
      availability: "Mon-Fri, 9 AM - 6 PM",
    },
    {
      icon: MapPin,
      title: "Office Address",
      description: "Visit our headquarters",
      contact: "123 Agriculture Hub, New Delhi, India",
      availability: "Mon-Fri, 9 AM - 5 PM",
    },
  ]

  const supportCategories = [
    {
      icon: Users,
      title: "Account Support",
      description: "Help with registration, login, and account management",
    },
    {
      icon: FileText,
      title: "Technical Support",
      description: "Platform issues, bugs, and technical assistance",
    },
    {
      icon: HeadphonesIcon,
      title: "Sales Inquiries",
      description: "Questions about pricing, features, and partnerships",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container px-4 md:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-900 mb-4">Contact & Support</h1>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the channels below or fill out the contact form.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <method.icon className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-green-900">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-sm mb-1">{method.contact}</p>
                <p className="text-xs text-muted-foreground">{method.availability}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-900">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="user-type">I am a</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="partner">Business Partner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account">Account Support</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="sales">Sales Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Describe your inquiry or issue in detail" rows={5} />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
            </CardContent>
          </Card>

          {/* Support Categories & FAQ */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-900">Support Categories</CardTitle>
                <CardDescription>Choose the category that best matches your inquiry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                  >
                    <category.icon className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-900">{category.title}</h4>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-900">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">How do I register as a farmer?</h4>
                  <p className="text-sm text-gray-600">
                    Click on the "Register" button and select "Farmer" to create your account with farm details.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">How are payments processed?</h4>
                  <p className="text-sm text-gray-600">
                    We use secure payment gateways with end-to-end encryption for all transactions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Can I track my orders?</h4>
                  <p className="text-sm text-gray-600">
                    Yes, you can track all your orders in real-time through your dashboard.
                  </p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View All FAQs
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  * Emergency support available 24/7 for critical issues
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

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
];

export default function ContactMethods() {
  return (
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
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-900">Send us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Form fields */}
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
        {/* Other form fields */}
        <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
      </CardContent>
    </Card>
  );
}

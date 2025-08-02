import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function BusinessHours() {
  return (
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
  );
}

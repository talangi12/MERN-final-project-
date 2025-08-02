import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FAQs() {
  return (
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
  );
}

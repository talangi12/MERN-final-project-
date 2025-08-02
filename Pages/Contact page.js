import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import ContactMethods from "@/components/ContactMethods";
import ContactForm from "@/components/ContactForm";
import SupportCategories from "@/components/SupportCategories";
import FAQs from "@/components/FAQs";
import BusinessHours from "@/components/BusinessHours";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container px-4 md:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-900 mb-4">
            Contact & Support
          </h1>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the channels below or fill out the contact form.
          </p>
        </div>
        <ContactMethods />
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <SupportCategories />
            <FAQs />
            <BusinessHours />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

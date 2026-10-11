"use client";

import * as React from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WEB3FORMS_ACCESS_KEY = "1943b944-95b9-4df2-83c1-5df92a292f46";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New enquiry: ${formData.get("subject") ?? "Website contact"}`);

    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully. We'll be in touch soon.");
        form.reset();
        setMessage("");
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      toast.error("Network error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" id="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-gold">*</span>
          </Label>
          <Input id="fullName" name="fullName" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-gold">*</span>
          </Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">
            Subject <span className="text-gold">*</span>
          </Label>
          <Input id="subject" name="subject" required />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="message">
            Message <span className="text-gold">*</span>
          </Label>
          <span className="text-xs text-muted-foreground">{message.length}/2000</span>
        </div>
        <Textarea
          id="message"
          name="message"
          rows={5}
          minLength={10}
          maxLength={2000}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-12 bg-navy px-8 text-base text-white hover:bg-navy/90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="size-4" /> Send Message
            </>
          )}
        </Button>
        <span className="text-xs text-muted-foreground">
          By submitting, you agree to our privacy policy
        </span>
      </div>
    </form>
  );
}

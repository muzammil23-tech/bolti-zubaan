import { useState } from "react";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WHATSAPP } from "@/data/site";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Naam kam se kam 2 letters").max(80),
  email: z.string().trim().email("Sahi email daalein").max(255),
  phone: z.string().trim().min(7, "Sahi phone number daalein").max(20),
  service: z.string().trim().min(2).max(60),
  message: z.string().trim().min(5, "Thora detail se batayein").max(1000),
});

export const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Web Development", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const text = `Naya Lead — Click & Buy Digital%0A%0AName: ${encodeURIComponent(parsed.data.name)}%0AEmail: ${encodeURIComponent(parsed.data.email)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0AService: ${encodeURIComponent(parsed.data.service)}%0AMessage: ${encodeURIComponent(parsed.data.message)}`;
    setTimeout(() => {
      setLoading(false);
      toast.success("Shukriya! Aap ka message bhej diya gaya hai.", {
        description: "Hum 24 hours ke andar contact karenge.",
      });
      window.open(`https://wa.me/923102523274?text=${text}`, "_blank");
      setForm({ name: "", email: "", phone: "", service: "Web Development", message: "" });
    }, 700);
  };

  const field = (name: keyof typeof form) => ({
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [name]: e.target.value }),
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Aap ka Naam</Label>
          <Input id="name" placeholder="Muhammad Ali" className="mt-1.5" {...field("name")} maxLength={80} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" placeholder="0300 1234567" className="mt-1.5" {...field("phone")} maxLength={20} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" {...field("email")} maxLength={255} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="service">Service Chahiye</Label>
        <select
          id="service"
          {...field("service")}
          className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {["Web Development", "Branding & Logo", "Social Media Management", "Paid Ads", "SEO", "Complete Package"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="message">Aap ka Project</Label>
        <Textarea
          id="message"
          placeholder="Apne project ke baare me batayein…"
          className="mt-1.5 min-h-[110px]"
          {...field("message")}
          maxLength={1000}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" disabled={loading} className="btn-lift btn-sheen w-full bg-gradient-accent text-accent-foreground shadow-accent">
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
        {loading ? "Bhej rahe hain…" : "Free Consultation Book Karein"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Ya seedha WhatsApp par{" "}
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">
          message karein
        </a>
      </p>
    </form>
  );
};

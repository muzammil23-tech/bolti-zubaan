import { Code2, Palette, Share2, Megaphone, Search, Printer, Rocket, Sparkles, Zap, Shield } from "lucide-react";

export const WHATSAPP = "https://wa.me/923102523274";
export const PHONE = "tel:+923102523274";
export const EMAIL = "mailto:muzammilsamiullah@gmail.com";

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern, blazing-fast websites that turn visitors into customers.",
    long:
      "React + Tailwind se bani custom websites — mobile-first, SEO-ready aur 90+ PageSpeed. Landing pages se le kar full e-commerce tak.",
    points: ["Custom UI/UX design", "Lightning-fast load times", "SEO-ready architecture", "Fully mobile responsive"],
  },
  {
    icon: Palette,
    title: "Branding & Logo Design",
    desc: "Distinct visual identities that make your brand unforgettable.",
    long:
      "Logo system, colour language, typography aur complete brand book — aap ka brand har touchpoint pe premium lage.",
    points: ["Logo & wordmark", "Complete brand guide", "Colour & type system", "Business cards + collateral"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Content strategy, creatives and community that keeps growing.",
    long:
      "Monthly content calendar, reels, carousels aur community management — consistent posting jo actually reach barhata hai.",
    points: ["Content strategy", "Post & reel design", "Caption + hashtag research", "Monthly analytics report"],
  },
  {
    icon: Megaphone,
    title: "Paid Marketing",
    desc: "Facebook & Instagram ads engineered for real ROI, not just likes.",
    long: "Funnel-first ad campaigns — audience research, creative testing aur weekly performance reporting.",
    points: ["Audience research", "Creative testing", "Landing page optimization", "Weekly reports"],
  },
  {
    icon: Search,
    title: "SEO & Lead Generation",
    desc: "Get found on Google and convert intent into qualified leads.",
    long: "Technical + content SEO, local Karachi SEO aur lead capture setup jo qualified enquiries laata hai.",
    points: ["Keyword strategy", "Technical audit", "Content optimization", "Local & Google Business"],
  },
  {
    icon: Printer,
    title: "Printing & Graphics",
    desc: "Business cards, flyers, banners — print that matches your brand.",
    long: "Print-ready designs jo aap ki digital identity se perfectly match karte hain — press quality guaranteed.",
    points: ["Business cards", "Flyers & brochures", "Banners & signage", "Packaging design"],
  },
];

export const whyUs = [
  { icon: Rocket, title: "On-Time Delivery", desc: "Deadlines are non-negotiable. Every project ships when promised." },
  { icon: Sparkles, title: "Premium Designs", desc: "AI-assisted creativity that looks premium, not cookie-cutter." },
  { icon: Zap, title: "Daily Updates", desc: "Transparent progress. You always know exactly where we're at." },
  { icon: Shield, title: "Dedicated Support", desc: "A real team on your side — no excuses, only results." },
];

export const comparison = {
  them: ["Missed deadlines", "Poor communication", "Excuses every time", "Low quality work", "No responsibility"],
  us: [
    "On-time delivery, every time",
    "Daily updates & transparency",
    "Premium, on-brand designs",
    "Dedicated project team",
    "Real accountability",
  ],
};

export const testimonials = [
  {
    name: "Ahmed R.",
    role: "Founder, Zaytoon Store",
    text: "Muzammil aur team ne humari online store 10 din me launch ki. Sales pehle mahine hi double ho gayin. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sana K.",
    role: "Marketing Lead",
    text: "Branding aur social media dono handle kiye. Har post premium lagti hai — client hume seriously lete hain ab.",
    rating: 5,
  },
  {
    name: "Bilal M.",
    role: "Owner, Karahi House",
    text: "PKR 9,999 me itni professional website milegi socha nahi tha. Fast, mobile-friendly, aur time pe deliver ki.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    role: "Boutique Owner",
    text: "Instagram ads ne 3x return diya. Team responsive hai aur daily updates milte hain. Trustworthy team.",
    rating: 5,
  },
];

export const faqs = [
  { q: "Website banane me kitna waqt lagta hai?", a: "Standard website 5–10 working days me ready ho jati hai. Complex projects (e-commerce/custom app) 2–4 hafton me deliver hoti hain." },
  { q: "PKR 9,999 me kya kya milta hai?", a: "5-page responsive website, modern UI/UX, mobile-friendly, contact form, basic SEO setup, aur 1 hafta free support." },
  { q: "Kya aap hosting aur domain bhi provide karte hain?", a: "Ji haan — hum affordable domain + hosting setup karwa sakte hain, ya aap ke existing hosting pe deploy kar sakte hain." },
  { q: "Payment plan kya hai?", a: "50% advance, 50% delivery pe. Bank transfer, JazzCash, aur Easypaisa sab accept karte hain." },
  { q: "Kya aap outside Karachi bhi kaam karte hain?", a: "Bilkul! Hum Pakistan bhar aur international clients ke saath online kaam karte hain — WhatsApp aur Zoom pe pura coordination." },
  { q: "Website ke baad support milega?", a: "Ji — 7 din free support included hai. Us ke baad monthly maintenance packages available hain." },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "9,999",
    tagline: "Naya business launch karna hai",
    features: ["5-page responsive website", "Mobile-friendly design", "Basic SEO setup", "Contact form", "1 week free support"],
    popular: false,
  },
  {
    name: "Business",
    price: "24,999",
    tagline: "Growing brand ke liye complete package",
    features: ["10-page premium website", "Custom UI/UX design", "Logo + basic branding", "Advanced SEO + analytics", "WhatsApp integration", "1 month free support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "49,999",
    tagline: "E-commerce ya custom features",
    features: ["E-commerce / custom app", "Complete brand identity", "Payment gateway integration", "Admin dashboard / CMS", "Advanced SEO + speed optimization", "3 months free support"],
    popular: false,
  },
];

/** Feature comparison matrix for the pricing page */
export const comparisonTable = {
  rows: [
    { label: "Pages included", values: ["5", "10", "Unlimited"] },
    { label: "Custom UI/UX design", values: [false, true, true] },
    { label: "Logo & branding", values: [false, true, true] },
    { label: "SEO setup", values: ["Basic", "Advanced", "Advanced + speed"] },
    { label: "WhatsApp integration", values: [false, true, true] },
    { label: "E-commerce / payments", values: [false, false, true] },
    { label: "Admin dashboard / CMS", values: [false, false, true] },
    { label: "Free support", values: ["1 week", "1 month", "3 months"] },
  ],
};

import type { Metadata } from "next";
import { StrandsPageClient } from "@/components/sections/strands/StrandsPageClient";

export const metadata: Metadata = {
  title: "Strands by HX — Premium Hair & Wig Collection",
  description:
    "Discover Strands by HX, the premium hair and wig collection sub-brand of Hairxpresser.NG. Browse our curated selection and shop via Instagram.",
};

export default function StrandsPage() {
  return <StrandsPageClient />;
}

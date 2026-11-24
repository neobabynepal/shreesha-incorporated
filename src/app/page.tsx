import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BrandShowcase from "@/components/home/BrandShowcase";
import ProductCategoryShowcase from "@/components/home/ProductCategoryShowcase";
import CompanyIntroSection from "@/components/home/CompanyIntroSection";
import OperationsSection from "@/components/home/OperationsSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import HomeContactCTA from "@/components/home/HomeContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandShowcase />
      <ProductCategoryShowcase />
      <CompanyIntroSection />
      <OperationsSection />
      <VisionMissionSection />
      <HomeContactCTA />
    </>
  );
}

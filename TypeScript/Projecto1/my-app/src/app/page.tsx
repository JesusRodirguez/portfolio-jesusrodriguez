"use client";
import React from "react";
import Navbar from "@/componentes/layout/NavBarHome";
import HeroSection from "@/componentes/layout/HeroSection";
import ServicesSection from "@/componentes/sections/ServicesSection";
import PortfolioSection from "@/componentes/sections/PortfolioSection";
import AboutSection from "@/componentes/sections/AboutSection";
import TeamSection from "@/componentes/sections/TeamSection";
import ContactSection from "@/componentes/sections/ContactSection";
import Footer from "@/componentes/layout/Footer";


export default function Page() {
  return (
    <div className="bg-black text-black">
      <Navbar brand="MidnightCode" />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

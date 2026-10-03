/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav, NavTab } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BookingExperience } from './components/BookingExperience';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Service } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateBooking = () => {
    setActiveTab('booking');
    scrollToSection('agendamento');
  };

  const handleNavigateServices = () => {
    setActiveTab('services');
    scrollToSection('servicos');
  };

  const handleNavigateAbout = () => {
    scrollToSection('sobre');
  };

  const handleNavigateLocation = () => {
    scrollToSection('localizacao');
  };

  const handleSelectServiceForBooking = (service: Service) => {
    setSelectedServiceId(service.id);
    setActiveTab('booking');
    scrollToSection('agendamento');
  };

  const handleMobileTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'services') {
      scrollToSection('servicos');
    } else if (tab === 'booking') {
      scrollToSection('agendamento');
    }
  };

  return (
    <div className="min-h-screen bg-[#D8C7B5] text-[#2C2522] flex flex-col font-sans selection:bg-[#8A7768] selection:text-[#F7F4EF]">
      {/* Top Header */}
      <Header
        onNavigateBooking={handleNavigateBooking}
        onNavigateServices={handleNavigateServices}
        onNavigateAbout={handleNavigateAbout}
        onNavigateLocation={handleNavigateLocation}
      />

      {/* Main Content with Mobile Bottom Nav Clearance */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section */}
        <Hero
          onScheduleClick={handleNavigateBooking}
          onExploreServices={handleNavigateServices}
        />

        {/* About Section */}
        <AboutSection onScheduleClick={handleNavigateBooking} />

        {/* Services Section */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Booking Experience (AGENDAMENTO) */}
        <BookingExperience initialServiceId={selectedServiceId} />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Instagram Section */}
        <InstagramSection />

        {/* Location Section */}
        <LocationSection />

        {/* Final High-Conversion CTA */}
        <FinalCTA onScheduleClick={handleNavigateBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp on Desktop/Tablet */}
      <FloatingWhatsApp />

      {/* Fixed Bottom Mobile Navigation (Phone only) */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={handleMobileTabChange}
      />
    </div>
  );
}

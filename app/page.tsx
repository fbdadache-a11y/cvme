'use client';

import { useReveal } from '@/components/useReveal';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import StatsSection from '@/components/StatsSection';
import EmpathySection from '@/components/EmpathySection';
import WhySection from '@/components/WhySection';
import PillarsSection from '@/components/PillarsSection';
import JourneySection from '@/components/JourneySection';
import TeamSection from '@/components/TeamSection';
import EventsSection from '@/components/EventsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import MobileJoinBar from '@/components/MobileJoinBar';

export default function Home() {
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsSection />
      <EmpathySection />
      <WhySection />
      <PillarsSection />
      <JourneySection />
      <TeamSection />
      <EventsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <MobileJoinBar />
    </>
  );
}

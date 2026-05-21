import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Architecture from '@/components/Architecture';
import Stack from '@/components/Stack';
import Comparison from '@/components/Comparison';
import FitCheck from '@/components/FitCheck';
import Tiers from '@/components/Tiers';
import SeedProgram from '@/components/SeedProgram';
import Founder from '@/components/Founder';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <PainPoints />
      <Architecture />
      <Stack />
      <Comparison />
      <FitCheck />
      <Tiers />
      <SeedProgram />
      <Founder />
      <ContactForm />
      <Footer />
    </main>
  );
}

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Capabilities from '@/components/Capabilities';
import Comparison from '@/components/Comparison';
import FitCheck from '@/components/FitCheck';
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
      <Capabilities />
      <Comparison />
      <FitCheck />
      <SeedProgram />
      <Founder />
      <ContactForm />
      <Footer />
    </main>
  );
}

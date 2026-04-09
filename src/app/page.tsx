import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { Stats } from '@/components/sections/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <Stats />
      <Portfolio />
      <Contact />
    </>
  );
}

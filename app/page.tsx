import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Packages } from "@/components/packages";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Packages />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}

import { Catering } from "@/components/Catering";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Hours } from "@/components/Hours";
import { Location } from "@/components/Location";
import { Menu } from "@/components/Menu";
import { Nav } from "@/components/Nav";
import { ScrollAssist } from "@/components/ScrollAssist";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgressProvider } from "@/lib/scroll-progress";

export default function Home() {
  return (
    <ScrollProgressProvider>
      <SmoothScroll>
        <Nav />
        <ScrollAssist />
        <main id="main" tabIndex={-1}>
          <Hero />
          <Menu />
          <Hours />
          <Location />
          <Catering />
        </main>
        <Footer />
      </SmoothScroll>
    </ScrollProgressProvider>
  );
}

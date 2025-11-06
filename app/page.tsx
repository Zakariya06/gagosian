import Header from "@/components/Header";
import HeroSection from "@/modules/home/HeroSection";
import OnViewSection from "@/modules/home/OnViewSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OnViewSection />
      </main>
    </>
  );
}

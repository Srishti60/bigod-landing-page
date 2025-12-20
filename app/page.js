import Features from "./components/home/features";
import Footer from "./components/home/footer";
import Banner from "./components/home/hero";
import RealUtility from "./components/home/realUtility";
import Security from "./components/home/security";
import Simple from "./components/home/simple";
import Trade from "./components/home/trade";
import Work from "./components/home/work";




export default function Home() {
  return (
    <main>
      <Banner/>
      <Work />
      <Simple />
      <Features />
      <RealUtility />
      <Security />
      <Trade />
      <Footer />
      
    </main>
  );
}

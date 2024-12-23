import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shorten from "./components/Shorten/Shorten";
import Stats from "./components/Stats/Stats";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <main className="bg-neutral-gray">
        <Shorten />
        <Stats />
        <Boost />
        <Footer />
      </main>
    </div>
  );
}

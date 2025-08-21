import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ComoFunciona from "./components/ComoFunciona.jsx";
import Footer from "./components/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
      </main>
      <Footer />
    </>
  );
}

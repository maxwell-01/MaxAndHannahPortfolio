import { Home } from "@/components/home/Home";
import { NavMenu } from "@/components/navMenu/NavMenu";
import { Footer } from "@/components/footer/Footer";

export default function App() {
  return (
    <main>
      <NavMenu />
      <Home />
      <Footer />
    </main>
  );
}

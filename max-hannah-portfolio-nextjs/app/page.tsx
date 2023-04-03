import { Home } from "@/src/components/home/Home";
import { NavMenu } from "@/src/components/navMenu/NavMenu";
import { Footer } from "@/src/components/footer/Footer";

export default function App() {
  return (
    <main>
      <NavMenu />
      <Home />
      <Footer />
    </main>
  );
}

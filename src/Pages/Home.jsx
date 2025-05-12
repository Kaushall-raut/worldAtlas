import { HeroContent } from "../components/HeroContent";
import { Image } from "../components/Image";
import { About } from "./About";

export const Home = () => {
  return (
    <main>
      <div className="hero-section container grid grid-col2 hero-content">
        <HeroContent />
        <div className="hero-img">
          <Image />
        </div>
      </div>
      <About />
    </main>
  );
};

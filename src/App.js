import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompletMyLookSection from "./components/CompletMyLookSection";
import NavbarComponent from "./components/NavbarComponent";
import TaggedSection from "./components/TaggedSection";
import VideoSection from "./components/VideoSection";
import FavouritesSection from "./components/FavouritesSection";
import { TbBrandWhatsapp } from "react-icons/tb";
import "./css/TaggedSectionContainer.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <VideoSection />
      <TaggedSection />
      <CompletMyLookSection />
      <FavouritesSection />
      <div className="whatsapp-container">
        <TbBrandWhatsapp size={"2.25rem"} color={"white"} />
      </div>
    </div>
  );
}

export default App;

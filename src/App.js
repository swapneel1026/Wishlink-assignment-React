import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompletMyLookSection from "./components/CompletMyLookSection";
import NavbarComponent from "./components/NavbarComponent";
import TaggedSection from "./components/TaggedSection";
import VideoSection from "./components/VideoSection";
import FavouritesSection from "./components/FavouritesSection";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <VideoSection />
      <TaggedSection />
      <CompletMyLookSection />
      <FavouritesSection />
    </div>
  );
}

export default App;

import { MovieContent } from "./assets/cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Highlight } from "./components/layout/highlight";
import { Navbar } from "./components/layout/navbar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Highlight />
        <Navbar/>
        <MovieContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
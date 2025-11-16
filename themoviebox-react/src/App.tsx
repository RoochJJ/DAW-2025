import { MovieContent } from "./cases/movies/components/movie-content";
import { MovieContextProvider } from "./cases/movies/context/movie-context";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Highlight } from "./components/layout/highlight";
import { Navbar } from "./components/layout/navbar";

function App() {
  return (
    <>
      <Header />
      <main>
        <MovieContextProvider>
        <Highlight />
        <Navbar />
        <MovieContent />
        </MovieContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
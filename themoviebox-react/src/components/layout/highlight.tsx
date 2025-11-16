import { useMovies } from "../../cases/movies/hooks/use-hook";
import { MovieGenres } from "../../cases/movies/components/movie-genres";

function resolveBackgroundPath(primary?: string, fallback?: string) {
  const source = (primary ?? "").trim() || (fallback ?? "").trim();

  if (!source) {
    return "";
  }

  const normalized = source.replace(/\\/g, "/");

  if (
    normalized.startsWith("http://") ||
    normalized.startsWith("https://") ||
    normalized.startsWith("data:")
  ) {
    return normalized;
  }

  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

export function Highlight() {
  const { selectedMovie } = useMovies();

  if (!selectedMovie) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl text-center text-white">Carregando...</p>
      </div>
    );
  }

  const backgroundImage = resolveBackgroundPath(
    selectedMovie.highlight,
    selectedMovie.image
  );

  return (
    <section
      className="relative flex bg-cover bg-no-repeat"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundPosition: "left center",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17, 17, 17, 0.95) 25%, rgba(17, 17, 17, 0.9) 55%, rgba(17, 17, 17, 0.4) 100%)",
        }}
      />

      <div className="w-full max-w-6xl px-6 md:px-12 flex gap-8 py-8 z-20">
        <img
          className="rounded-lg shadow-2xl w-[260px] min-w-[200px]"
          src={selectedMovie.image}
          alt={`Poster de ${selectedMovie.title}`}
        />

        <div className="flex flex-col max-w-3xl">
          <h2 className="text-[2.5rem] font-normal">{selectedMovie.title}</h2>

          <MovieGenres movie={selectedMovie}>
            <span className="pl-4 text-gray-300">
              {selectedMovie.duration.replace(":", "h ") + "m"}
            </span>
          </MovieGenres>

          <div className="flex flex-col gap-2">
            <h4 className="font-normal pt-12 pb-2 text-2xl">Sinopse</h4>
            <p className="text-[#a0a0a0] text-sm">{selectedMovie.sinopse}</p>
          </div>

          <div className="flex gap-4 my-6">
            <button
              className="
                bg-[#e50914] text-white
                border-none py-3 px-6 rounded
                font-bold transition-colors
                cursor-pointer
                hover:bg-[#b8070f]
              "
            >
              Assistir
            </button>
            <button
              className="
                bg-white/20 text-white
                border border-white/30
                py-3 px-6 rounded
                transition-colors
                hover:bg-white/30
              "
            >
              Detalhes
            </button>
            <button
              className="
                bg-white/20 text-white
                border border-white/30
                py-3 px-6 rounded
                transition-colors
                hover:bg-white/30
              "
            >
              + Adicionar a Lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


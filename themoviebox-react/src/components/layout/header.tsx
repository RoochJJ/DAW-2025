export function Header() {
  return (
    <header className="px-2 sm:px-4 py-4">
      <div className="mx-auto max-w-6xl flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide text-white">
          <span className="font-normal">THE</span> MOVIEBOX
        </h1>
        <div className="flex gap-4">
          <a
            className="
            text-white text-sm py-2 px-4 border
            border-[#333] rounded-sm transition 
            hover:bg-[#333]"
            href="#"
          >
            Entrar
          </a>
          <a
            className="
            text-white text-sm py-2 px-4 
            bg-[#e50914] border 
            border-[#e50914] rounded-sm transition 
            hover:bg-[#b8070f]"
            href="#"
          >
            Registrar
          </a>
        </div>
      </div>
    </header>
  );
}
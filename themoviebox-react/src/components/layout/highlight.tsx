export function Highlight() {
  return (
    <section className="relative flex bg-[url('../img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] bg-left
                                                   bg-top bg-cover bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-[linear-gradient(to_right,rgba(17,17,17,1)_calc((50vw-70px)-340px),rgba(17,17,17,0.7)_50%,rgba(17,17,17,0.7)_100%)]"></div>
      <div className="flex gap-8 py-8 z-2 mx-auto max-w-[1140px]"> 
        
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17, 17, 17, 1) calc((50vw - 70px) - 340px), rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0.7) 100%)",
        }}
      ></div>
      <div className="mx-auto max-w-6xl flex gap-8 py-8 z-20">
        <img
          className="rounded-lg"
          src=".\public\img\q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
          alt="Imagem do Filme"
        />
        <div className="flex flex-col">
          <h2 className="text-[2.2rem] font-normal"> Como Treinar o seu Dragão
          </h2>

          <div className="text-sm my-2.5 flex items-center gap-2">
            <span className="bg-white/20 py-1.5 px-3 rounded-full"> Fantasia
            </span>
            <span className="bg-white/20 py-1.5 px-3 rounded-full ml-2"> Família
            </span>
            <span className="bg-white/20 py-1.5 px-3 rounded-full ml-2"> Ação & Aventura
            </span>
            <span className="pl-4 text-[#ccc]">2h 5m</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-normal pt-18 pb-2 text-2xl">Sinopse</h3>
            <p className="text-[#acaaaa] text-sm">
              Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna amigo de um dragão ferido chamado
              Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que dragões não são os monstros que todos acreditavam
              ser.
            </p>
          </div>
          <div className="flex gap-4 my-6">
            <button
              className="
                bg-[#e50914] text-white  border-none py-3 px-6 rounded font-bold transition-colors
                cursor-pointer hover:bg-[#b8070f] "> Assistir
            </button>
            <button
              className="
                bg-white/20 text-white border border-white/30 py-3 px-6 rounded
                transition-colors hover:bg-white/30 "> Detalhes
            </button>
            <button
              className="
                bg-white/20 text-white border border-white/25 py-3 px-6 rounded 
                 transition-colors hover:bg-white/30 "> + Adicionar à Lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


import {
    createContext,
    useState,
    type ReactNode,
    type Dispatch,
    type SetStateAction,
} from "react";
import type { MovieDTO } from "../services/movie.service"

type MovieContextValue = {
    selectedMovie: MovieDTO | null;
    setSelectedMovie: Dispatch<SetStateAction<MovieDTO | null>>;
}

const MovieContext = createContext<MovieContextValue | undefined>(undefined);

export function MovieContextProvider({
    children
}: {children: ReactNode}) {
    const [selectedMovie, setSelectedMovie] = useState<MovieDTO | null>(null);

    return (
        <MovieContext.Provider value={{selectedMovie, setSelectedMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext

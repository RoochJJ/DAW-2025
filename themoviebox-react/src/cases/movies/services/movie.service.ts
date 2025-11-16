// themoviebox-react/src/cases/movies/services/movie.service.t
import { api } from "../../../lib/axios";

export type MovieDTO = {
    title: string;
    year: number;
    image: string;
    highlight?: string;
    genres: string[];
    sinopse: string;
    duration: string;
    id: string;
    
}

const _ENDPOINT = "/movies?key=435dad30"

export const MovieService = {
    async list(): Promise<MovieDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    }
}
import { Genre, GenreResponse } from "../models/genre";
import { Data } from "src/app/core/models/data";

export function genreResponseMock(genre?: Genre | null, messages: string[] = [], success: boolean = true): GenreResponse<Genre> {
    return  {
        dados: genre || {
            id: 'id',
            nome: 'nome',
            status: 'status',
            usuarioId: 'usuarioId'
        },
        mensagem: messages,
        sucesso: success
    }
}

export function getGenreResponseMock(genreLength: number, err: boolean = false, messages: string[] = [], success: boolean = true): GenreResponse<{dados: Data, pagina: Genre[]} | null> {
    if(!err) {
        return {
            dados: {
                dados: {
                    contagemTotalResultados: 10,
                    existePaginaAnterior: true,
                    existePaginaPosterior: false,
                    paginaAtual: 1,
                    resultadosExibidosPagina: 5,
                    totalPaginas: 1
                },
                pagina: genresMock(genreLength)
            },
            mensagem: messages,
            sucesso: success
        }
    }else {
        return {
            dados: null,
            mensagem: messages,
            sucesso: success
        }
    }
}

export function genreMock(genre?: Genre): Genre {
    return genre || {
        id: '1',
        nome: 'Genre Test',
        status: 'Status',
        usuarioId: 'usuarioId'
    }
}
export function genresMock(listLength: number = 1) {
    const genres: Genre[] = [];
    for(let index = 0; index < listLength; index++) {
        const genre: Genre = genreMock({
            id: `${index + 1}`,
            nome: `Genre Test ${index + 1}`,
            status: 'Status',
            usuarioId: 'usuarioId'
        })
        genres.push(genre)
    }

    return genres;
}
import { Author, AuthorResponse } from "../models/author";
import { Data } from "src/app/core/models/data";

export function authorResponseMock(author?: Author | null, messages: string[] = [], success: boolean = true): AuthorResponse<Author> {
    return  {
        dados: author || {
            id: 'id',
            nome: 'nome',
            status: 'status',
            usuarioId: 'usuarioId'
        },
        mensagem: messages,
        sucesso: success
    }
}

export function getAuthorResponseMock(authorLength: number, err: boolean = false, messages: string[] = [], success: boolean = true): AuthorResponse<{dados: Data, pagina: Author[]} | null> {
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
                pagina: authorsMock(authorLength)
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

export function authorMock(author?: Author): Author {
    return author || {
        id: '1',
        nome: 'Author Test',
        status: 'Status',
        usuarioId: 'usuarioId'
    }
}
export function authorsMock(listLength: number = 1) {
    const authors: Author[] = [];
    for(let index = 0; index < listLength; index++) {
        const author: Author = authorMock({
            id: `${index + 1}`,
            nome: `Author Test ${index + 1}`,
            status: 'Status',
            usuarioId: 'usuarioId'
        })
        authors.push(author)
    }

    return authors;
}
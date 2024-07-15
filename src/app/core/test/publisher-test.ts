import { Publisher, PublisherResponse } from "../models/publisher";
import { Data } from "src/app/core/models/data";

export function publisherResponseMock(publisher?: Publisher | null, messages: string[] = [], success: boolean = true): PublisherResponse<Publisher> {
    return  {
        dados: publisher || {
            id: 'id',
            nome: 'nome',
            status: 'status',
            usuarioId: 'usuarioId'
        },
        mensagem: messages,
        sucesso: success
    }
}

export function getPublisherResponseMock(publishLength: number, err: boolean = false, messages: string[] = [], success: boolean = true): PublisherResponse<{dados: Data, pagina: Publisher[]} | null> {
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
                pagina: publishersMock(publishLength)
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

export function publisherMock(publisher?: Publisher): Publisher {
    return publisher || {
        id: '1',
        nome: 'Publisher Test',
        status: 'Status',
        usuarioId: 'usuarioId'
    }
}
export function publishersMock(listLength: number = 1) {
    const publishers: Publisher[] = [];
    for(let index = 0; index < listLength; index++) {
        const publisher: Publisher = publisherMock({
            id: `${index + 1}`,
            nome: `Publisher Test ${index + 1}`,
            status: 'Status',
            usuarioId: 'usuarioId'
        })
        publishers.push(publisher)
    }

    return publishers;
}
import { Data } from "./data"

export interface Publisher {
    id: string,
    usuarioId: string,
    nome: string,
    status: string
}

export interface PublisherResponse {
    dados: {
        dados: Data,
        pagina: Publisher[]
    } | null
    mensagem: string[]
    sucesso: boolean
}
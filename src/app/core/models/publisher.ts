export interface Publisher {
    id: string,
    usuarioId: string,
    nome: string,
    status: string
}

export interface PublisherResponse<T> {
    dados: T
    mensagem: string[]
    sucesso: boolean
}
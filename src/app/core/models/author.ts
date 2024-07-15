export interface Author {
    id: string,
    usuarioId: string,
    nome: string,
    status: string
}

export interface AuthorResponse<T> {
    dados: T
    mensagem: string[]
    sucesso: boolean
}
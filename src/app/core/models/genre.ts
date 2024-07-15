export interface Genre {
    id: string,
    usuarioId: string,
    nome: string,
    status: string
}

export interface GenreResponse<T> {
    dados: T
    mensagem: string[]
    sucesso: boolean
}
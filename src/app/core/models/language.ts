export interface Language {
    id: string
    alias: string
    nome: string
    status: string
}

export interface LanguageResponse<T> {
    dados: T
    mensagem: string[]
    sucesso: boolean
}
export interface Auth {
    accessToken: string
    id: string
    nome: string
    notificar: string
    refreshToken: string
}

export interface AuthResponse {
    dados: Auth
    mensagem: string[] 
    sucesso: boolean
}
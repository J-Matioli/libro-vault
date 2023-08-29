export interface Auth {
    accessToken: string
    id: string
    nome: string
    notificar: boolean
    refreshToken: string
}

export interface AuthResponse {
    dados: Auth
    mensagem: string[] 
    sucesso: boolean
}

export interface AuthGenericResponse {
    dados: boolean
    mensagem: string[];
    sucesso: boolean
}

export interface RegisterResponse extends AuthGenericResponse { }
export interface ResetPasswordResponse extends AuthGenericResponse {}
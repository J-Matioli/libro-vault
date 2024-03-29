export interface User {
    id: string
    nome: string
    sobrenome: string
    dataNascimento: string
    genero: "Masculino" | "Feminino" | "Outro"
    email: string
    notificar: boolean
    status: string
}

export interface UserResponse {
    dados: {
        dados: Dados,
        pagina: User[]
    }
    mensagem: string[];
    sucesso: boolean
}

export interface Dados {
    paginaAtual: number
    totalPaginas: number
    resultadosExibidosPagina: number
    contagemTotalResultados: number
    existePaginaAnterior: boolean
    existePaginaPosterior: boolean
}
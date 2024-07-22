export interface Work {
    id: string,
    usuarioId: string,
    editoraId: string,
    generoId: string,
    autorId: string,
    nome: string,
    anotacao: string,
    avaliacaoTotal: number,
    precoTotal: string,
    paginaTotal: number,
    concluido: boolean,
    volumeUnico: boolean,
    caminhoAbsoluto: string,
    caminhoRelativo: string,
    tipo: string,
    status: string,
    volumes: Volume[]
}

export interface Volume {
    id: string,
    obraId: string,
    nome: string,
    ordem: number,
    paginas: number,
    anotacao: string,
    preco: string,
    avaliacao: number,
    lido: boolean,
    dataLeitura: string,
    dataCompra: string,
    status: string
}

export interface WorkResponse<T> {
    dados: T
    mensagem: string[]
    sucesso: boolean
}
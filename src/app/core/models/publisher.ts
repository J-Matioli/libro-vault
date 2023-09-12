import { Dados } from "./data";

export interface Publisher {
    nome: string;
    obras: number;
}

export interface PublisherResponse {
    dados: {
        dados: Dados;
        pagina: Publisher[]
    }
    sucesso: boolean
    mensagem: string[];
}
import { RegisterResponse } from "src/app/core/models/auth";

export function buildRegister(): RegisterResponse {  
    return {
        dados: true,
        mensagem: ['Usuário cadastrado com sucesso!'],
        sucesso: true
    }
}
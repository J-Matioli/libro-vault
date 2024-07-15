import { ResetPasswordResponse } from "src/app/core/models/auth";

export function buildResetPassword(): ResetPasswordResponse {  
    return {
        dados: true,
        mensagem: ['Alteração realizada com sucesso!'],
        sucesso: true
    }
}
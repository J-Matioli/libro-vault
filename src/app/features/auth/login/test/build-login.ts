import { Auth, AuthResponse } from "src/app/core/models/auth";

export function buildLogin(): AuthResponse {
    const auth: Auth = {
        accessToken: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRlc3RlIiwic3ViIjoiYWRkN2E4ZDEtZTEwMi00MmVlLWFjOTktYzIyZWY5ZTA0YmY4IiwiZW1haWwiOiJ0ZXN0ZWVtYWlsQHZpa2lub2tvLmNvbSIsImp0aSI6IjcyZGY5MTg0LTFkNDEtNGIyOS05NWJjLTI3MTczOWFmZTg2NCIsIm5iZiI6MTY5MzIzMTIwMSwiaWF0IjoxNjkzMjMxMjAxLCJWZXJzYW9Ub2tlbiI6IjYiLCJleHAiOjE2OTMyNzQ0MDEsImF1ZCI6IkF1ZGllbmNlIn0.J1I27HKwyg2Xy5oSdPGWytN2Jso7-0yHIOOiCckv2QJ4tIOtUCFSfaTboFvCu00SP4CfCmy9IDfkKbv6LFlbzw',
        id: 'add7a8d1-e102-42ee-ac99-c22ef9e04bf8',
        nome: 'Teste',
        notificar: true,
        refreshToken: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRlc3RlIiwic3ViIjoiYWRkN2E4ZDEtZTEwMi00MmVlLWFjOTktYzIyZWY5ZTA0YmY4IiwiZW1haWwiOiJ0ZXN0ZWVtYWlsQHZpa2lub2tvLmNvbSIsImp0aSI6IjcyZGY5MTg0LTFkNDEtNGIyOS05NWJjLTI3MTczOWFmZTg2NCIsIm5iZiI6MTY5MzIzMTIwMSwiaWF0IjoxNjkzMjMxMjAxLCJWZXJzYW9Ub2tlbiI6IjYiLCJleHAiOjE2OTMyNzQ0MDEsImF1ZCI6IkF1ZGllbmNlIn0.J1I27HKwyg2Xy5oSdPGWytN2Jso7-0yHIOOiCckv2QJ4tIOtUCFSfaTboFvCu00SP4CfCmy9IDfkKbv6LFlbzw'
    }

    return {
        dados: auth,
        mensagem: ['Login realizado com sucesso!'],
        sucesso: true
    }
}
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "./auth.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { buildLogin } from "src/app/features/auth/login/test/build-login";
import { buildRegister } from "src/app/features/auth/register/test/build-register";
import { buildResetPassword } from "src/app/features/auth/reset-password/test/build-reset-password";
import { ChangePasswordResponse, EmailConfirmResponse, ResetPasswordEmailResponse } from "../models/auth";
import { Dados, UserResponse, User } from "../models/user";

describe(AuthService.name, () =>{
     
    let service: AuthService;
    let httpController: HttpTestingController;
    let cookieService: CookieService;

    let url = 'https://librovaultapi.fickert.space/v1/';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatSnackBarModule
            ],
            providers: [
                CookieService
            ]
        })
        service = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
        cookieService = TestBed.inject(CookieService);
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`#${AuthService.prototype.login.name},
        should return login response`, () => {
        
        const cred = {
            email: 'yeweh57232@vikinoko.com',
            senha: 'Teste@123'
        }
        service.login(cred).subscribe({
            next: res => {            
                expect(res).toEqual(buildLogin());
            } 
        })
        
        const req = httpController.expectOne({
            method: 'POST',
            url: `${url}autenticacao/login`
        });
            
        req.flush(buildLogin());
    });

    it(`#${AuthService.prototype.register.name},
        should return Register response`, () => {
        
        const value = {
            nome: "Nome Sobrenome",
            email: "teste@email.com",
            dataDeNascimento:  "01/01/2000",
            genero: "2",
            senha: 'sdalk2312',
            confirmarSenha:"teste@email.com"
        }
        service.register(value).subscribe({
            next: res => {            
                expect(res).toEqual(buildRegister());
            } 
        })
        
        const req = httpController.expectOne({
            method: 'POST',
            url: `${url}usuario/cadastro-usuario`
        });
            
        req.flush(buildRegister());
    });

    it(`#${AuthService.prototype.resetPassword.name},
        should return ResetPassword response`, () => {
        
        const value = {
            senha: 'Teste@1234',
            confirmarSenha: 'Teste@1234'
        }
        service.resetPassword(value).subscribe({
            next: res => {            
                expect(res).toEqual(buildResetPassword());
            } 
        })
        
        const req = httpController.expectOne({
            method: 'POST',
            url: `${url}usuario/resetar-senha`
        });
            
        req.flush(buildResetPassword());
    });

    it(`#${AuthService.prototype.changePassword.name},
        should return ResetPassword response`, () => {
        
        const value = {
            senhaAntiga: 'Teste@123',
            novaSenha: 'Teste@1234',
            confirmarSenha: 'Teste@1234',
        }

        const response: ChangePasswordResponse = {
            dados: true,
            mensagem: ['Alteração realizada com sucesso!'],
            sucesso: true
        }

        service.changePassword(value).subscribe({
            next: res => {            
                expect(res).toEqual(response);
            } 
        })
        
        const req = httpController.expectOne({
            method: 'POST',
            url: `${url}usuario/alterar-senha`
        });
            
        req.flush(response);
    });

    it(`#${AuthService.prototype.sendEmailResetPassword.name},
        should return ResetPassword response`, () => {
        
        const value = new FormData();
        value.append('email', 'emailTeste@teste.br');

        const response: ResetPasswordEmailResponse = {
            dados: true,
            mensagem: ["Enviamos um <i>e-mail</i> para realização da alteração de senha."],
            sucesso: true
        }

        service.sendEmailResetPassword(value).subscribe({
            next: res => {            
                expect(res).toEqual(response);
            } 
        })
        
        const req = httpController.expectOne({
            method: 'POST',
            url: `${url}usuario/resetar-senha-email`
        });
            
        req.flush(response);
    });

    it(`#${AuthService.prototype.reSendEmailConfirmation.name},
    should return ResetPassword response`, () => {
        const value = new FormData();
        value.append('email', 'emailTeste@teste.br');

        const response: EmailConfirmResponse = {
            dados: true,
            mensagem: ["Verificação reenviada com sucesso!"],
            sucesso: true
        }

        service.reSendEmailConfirmation(value).subscribe({
            next: res => {            
                expect(res).toEqual(response);
            } 
        })
        
        const req = httpController.expectOne({
            method: 'POST',
            url: `${url}usuario/reenviar-confirmacao-email`
        });
            
        req.flush(response);
    });

    it(`#${AuthService.prototype.getUser.name},
    should return ResetPassword response`, () => {
    
    const id = cookieService.get('_id')
    
    const response: UserResponse = {
        dados: {
            dados: {} as Dados,
            pagina: [] as User[]
        },
        mensagem: ["Verificação reenviada com sucesso!"],
        sucesso: true
    }

    service.getUser().subscribe({
        next: res => {            
            expect(res).toEqual(response);
        } 
    })
    
    const req = httpController.expectOne({
        method: 'GET',
        url: `${url}usuario/usuario?id=${id}`
    });
        
    req.flush(response);
});
})
                                                                                                                                        
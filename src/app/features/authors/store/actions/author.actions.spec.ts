import { Author, AuthorResponse } from "src/app/core/models/author";
import { AddAuthor, AddAuthorError, AddAuthorSuccess, DeleteAuthor, DeleteAuthorError, DeleteAuthorSuccess, Filter, LoadedAuthors, AuthorActionTypes, RequestAuthors, UpdateAuthor, UpdateAuthorError, UpdateAuthorSuccess } from "./author.actions";
import { Data } from "src/app/core/models/data";

describe(RequestAuthors.name, () => {
  it('should create an RequestAuthors action', () => {
    const payload: { data: Filter } = {
      data: {
        NumeroPagina: 1,
        Ordenar: 'Novos',
        PalavraChave: '',
        ResultadosExibidos: 10
      }
    }
    const action = new RequestAuthors(payload);

    expect({ ...action }).toEqual({type: AuthorActionTypes.RequestAuthors, payload});
  });
});

describe(LoadedAuthors.name, () => {
  it('should create an LoadedAuthors action', () => {
    const payload: { data: AuthorResponse<{dados: Data, pagina: Author[]} | null> } = {
      data: {
        dados: {
          dados: {
            contagemTotalResultados: 1,
            existePaginaAnterior: false,
            existePaginaPosterior: false,
            paginaAtual: 1,
            resultadosExibidosPagina: 1,
            totalPaginas: 1
          },
          pagina: [{
            id: 'id',
            nome: 'Teste',
            status: 'Ativo',
            usuarioId: 'usuarioId'
          }]
        },
        mensagem: ['Success'],
        sucesso: true
      }
    }
    const action = new LoadedAuthors(payload);

    expect({ ...action }).toEqual({type: AuthorActionTypes.LoadedAuthors, payload});
  });
});

describe(AddAuthor.name, () => {
  it('should create an AddAuthor action', () => {
    const payload: { data: Author } = {
      data: {
        id: 'id',
        nome: 'Teste',
        status: 'Ativo',
        usuarioId: 'usuarioId'        
      }
    }
    const action = new AddAuthor(payload);

    expect({ ...action }).toEqual({type: AuthorActionTypes.AddAuthor, payload});
  });
});

describe(AddAuthorSuccess.name, () => {
  it('should create an AddAuthorSuccess action', () => {
    const action = new AddAuthorSuccess();

    expect({ ...action }).toEqual({type: AuthorActionTypes.AddAuthorSuccess});
  });
});

describe(AddAuthorError.name, () => {
  it('should create an AddAuthorError action', () => {
    const action = new AddAuthorError();

    expect({ ...action }).toEqual({type: AuthorActionTypes.AddAuthorError});
  });
});

describe(UpdateAuthor.name, () => {
  it('should create an UpdateAuthor action', () => {
    const payload: { data: Author } = {
      data: {
        id: 'id',
        nome: 'Teste',
        status: 'Ativo',
        usuarioId: 'usuarioId'        
      }
    }
    const action = new UpdateAuthor(payload);

    expect({ ...action }).toEqual({type: AuthorActionTypes.UpdateAuthor, payload});
  });
});

describe(UpdateAuthorSuccess.name, () => {
  it('should create an UpdateAuthorSuccess action', () => {
    const action = new UpdateAuthorSuccess();

    expect({ ...action }).toEqual({type: AuthorActionTypes.UpdateAuthorSuccess});
  });
});

describe(UpdateAuthorError.name, () => {
  it('should create an UpdateAuthorError action', () => {
    const action = new UpdateAuthorError();

    expect({ ...action }).toEqual({type: AuthorActionTypes.UpdateAuthorError});
  });
});

describe(DeleteAuthor.name, () => {
  it('should create an DeleteAuthor action', () => {
    const payload: {id: string} = {
      id: 'id'
    }
    const action = new DeleteAuthor(payload);

    expect({ ...action }).toEqual({type: AuthorActionTypes.DeleteAuthor, payload});
  });
});

describe(DeleteAuthorSuccess.name, () => {
  it('should create an DeleteAuthorSuccess action', () => {
    const action = new DeleteAuthorSuccess();

    expect({ ...action }).toEqual({type: AuthorActionTypes.DeleteAuthorSuccess});
  });
});

describe(DeleteAuthorError.name, () => {
  it('should create an DeleteAuthorError action', () => {
    const action = new DeleteAuthorError();

    expect({ ...action }).toEqual({type: AuthorActionTypes.DeleteAuthorError});
  });
});
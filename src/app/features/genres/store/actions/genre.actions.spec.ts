import { Genre, GenreResponse } from "src/app/core/models/genre";
import { AddGenre, AddGenreError, AddGenreSuccess, DeleteGenre, DeleteGenreError, DeleteGenreSuccess, Filter, GenreActionTypes, LoadedGenres, RequestGenres, UpdateGenre, UpdateGenreError, UpdateGenreSuccess } from "./genre.actions";
import { Data } from "src/app/core/models/data";

describe(RequestGenres.name, () => {
  it('should create an RequestGenres action', () => {
    const payload: { data: Filter } = {
      data: {
        NumeroPagina: 1,
        Ordenar: 'Novos',
        PalavraChave: '',
        ResultadosExibidos: 10
      }
    }
    const action = new RequestGenres(payload);

    expect({ ...action }).toEqual({type: GenreActionTypes.RequestGenres, payload});
  });
});

describe(LoadedGenres.name, () => {
  it('should create an LoadedGenres action', () => {
    const payload: { data: GenreResponse<{dados: Data, pagina: Genre[]} | null> } = {
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
    const action = new LoadedGenres(payload);

    expect({ ...action }).toEqual({type: GenreActionTypes.LoadedGenres, payload});
  });
});

describe(AddGenre.name, () => {
  it('should create an AddGenre action', () => {
    const payload: { data: Genre } = {
      data: {
        id: 'id',
        nome: 'Teste',
        status: 'Ativo',
        usuarioId: 'usuarioId'        
      }
    }
    const action = new AddGenre(payload);

    expect({ ...action }).toEqual({type: GenreActionTypes.AddGenre, payload});
  });
});

describe(AddGenreSuccess.name, () => {
  it('should create an AddGenreSuccess action', () => {
    const action = new AddGenreSuccess();

    expect({ ...action }).toEqual({type: GenreActionTypes.AddGenreSuccess});
  });
});

describe(AddGenreError.name, () => {
  it('should create an AddGenreError action', () => {
    const action = new AddGenreError();

    expect({ ...action }).toEqual({type: GenreActionTypes.AddGenreError});
  });
});

describe(UpdateGenre.name, () => {
  it('should create an UpdateGenre action', () => {
    const payload: { data: Genre } = {
      data: {
        id: 'id',
        nome: 'Teste',
        status: 'Ativo',
        usuarioId: 'usuarioId'        
      }
    }
    const action = new UpdateGenre(payload);

    expect({ ...action }).toEqual({type: GenreActionTypes.UpdateGenre, payload});
  });
});

describe(UpdateGenreSuccess.name, () => {
  it('should create an UpdateGenreSuccess action', () => {
    const action = new UpdateGenreSuccess();

    expect({ ...action }).toEqual({type: GenreActionTypes.UpdateGenreSuccess});
  });
});

describe(UpdateGenreError.name, () => {
  it('should create an UpdateGenreError action', () => {
    const action = new UpdateGenreError();

    expect({ ...action }).toEqual({type: GenreActionTypes.UpdateGenreError});
  });
});

describe(DeleteGenre.name, () => {
  it('should create an DeleteGenre action', () => {
    const payload: {id: string} = {
      id: 'id'
    }
    const action = new DeleteGenre(payload);

    expect({ ...action }).toEqual({type: GenreActionTypes.DeleteGenre, payload});
  });
});

describe(DeleteGenreSuccess.name, () => {
  it('should create an DeleteGenreSuccess action', () => {
    const action = new DeleteGenreSuccess();

    expect({ ...action }).toEqual({type: GenreActionTypes.DeleteGenreSuccess});
  });
});

describe(DeleteGenreError.name, () => {
  it('should create an DeleteGenreError action', () => {
    const action = new DeleteGenreError();

    expect({ ...action }).toEqual({type: GenreActionTypes.DeleteGenreError});
  });
});
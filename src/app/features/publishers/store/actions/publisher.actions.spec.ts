import { Publisher, PublisherResponse } from "src/app/core/models/publisher";
import { AddPublisher, AddPublisherError, AddPublisherSuccess, DeletePublisher, DeletePublisherError, DeletePublisherSuccess, Filter, LoadedPublishers, PublisherActionTypes, RequestPublishers, UpdatePublisher, UpdatePublisherError, UpdatePublisherSuccess } from "./publisher.actions";
import { Data } from "src/app/core/models/data";

describe(RequestPublishers.name, () => {
  it('should create an RequestPublishers action', () => {
    const payload: { data: Filter } = {
      data: {
        NumeroPagina: 1,
        Ordenar: 'Novos',
        PalavraChave: '',
        ResultadosExibidos: 10
      }
    }
    const action = new RequestPublishers(payload);

    expect({ ...action }).toEqual({type: PublisherActionTypes.RequestPublishers, payload});
  });
});

describe(LoadedPublishers.name, () => {
  it('should create an LoadedPublishers action', () => {
    const payload: { data: PublisherResponse<{dados: Data, pagina: Publisher[]} | null> } = {
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
    const action = new LoadedPublishers(payload);

    expect({ ...action }).toEqual({type: PublisherActionTypes.LoadedPublishers, payload});
  });
});

describe(AddPublisher.name, () => {
  it('should create an AddPublisher action', () => {
    const payload: { data: Publisher } = {
      data: {
        id: 'id',
        nome: 'Teste',
        status: 'Ativo',
        usuarioId: 'usuarioId'        
      }
    }
    const action = new AddPublisher(payload);

    expect({ ...action }).toEqual({type: PublisherActionTypes.AddPublisher, payload});
  });
});

describe(AddPublisherSuccess.name, () => {
  it('should create an AddPublisherSuccess action', () => {
    const action = new AddPublisherSuccess();

    expect({ ...action }).toEqual({type: PublisherActionTypes.AddPublisherSuccess});
  });
});

describe(AddPublisherError.name, () => {
  it('should create an AddPublisherError action', () => {
    const action = new AddPublisherError();

    expect({ ...action }).toEqual({type: PublisherActionTypes.AddPublisherError});
  });
});

describe(UpdatePublisher.name, () => {
  it('should create an UpdatePublisher action', () => {
    const payload: { data: Publisher } = {
      data: {
        id: 'id',
        nome: 'Teste',
        status: 'Ativo',
        usuarioId: 'usuarioId'        
      }
    }
    const action = new UpdatePublisher(payload);

    expect({ ...action }).toEqual({type: PublisherActionTypes.UpdatePublisher, payload});
  });
});

describe(UpdatePublisherSuccess.name, () => {
  it('should create an UpdatePublisherSuccess action', () => {
    const action = new UpdatePublisherSuccess();

    expect({ ...action }).toEqual({type: PublisherActionTypes.UpdatePublisherSuccess});
  });
});

describe(UpdatePublisherError.name, () => {
  it('should create an UpdatePublisherError action', () => {
    const action = new UpdatePublisherError();

    expect({ ...action }).toEqual({type: PublisherActionTypes.UpdatePublisherError});
  });
});

describe(DeletePublisher.name, () => {
  it('should create an DeletePublisher action', () => {
    const payload: {id: string} = {
      id: 'id'
    }
    const action = new DeletePublisher(payload);

    expect({ ...action }).toEqual({type: PublisherActionTypes.DeletePublisher, payload});
  });
});

describe(DeletePublisherSuccess.name, () => {
  it('should create an DeletePublisherSuccess action', () => {
    const action = new DeletePublisherSuccess();

    expect({ ...action }).toEqual({type: PublisherActionTypes.DeletePublisherSuccess});
  });
});

describe(DeletePublisherError.name, () => {
  it('should create an DeletePublisherError action', () => {
    const action = new DeletePublisherError();

    expect({ ...action }).toEqual({type: PublisherActionTypes.DeletePublisherError});
  });
});
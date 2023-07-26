import { Option } from "../custom-select/custom-select.component";

export const orderOptions: Option[] = [
    {value: 'adicionados-recentemente', viewValue: 'Adicionados recentemente'},
    {value: 'autor', viewValue: 'Autor'},
    {value: 'n-paginas-maior', viewValue: 'Nº de paginas maior'},
    {value: 'n-paginas-menor', viewValue: 'Nº de paginas menor'},
    {value: 'ordem-crescente', viewValue: 'Ordem crescente'},
    {value: 'ordem-decrescente', viewValue: 'Ordem decrescente'},
    {value: 'preco-maior', viewValue: 'Preço maior'},
    {value: 'preco-menor', viewValue: 'Preço menor'},
]

export const yesOrNoOptions: Option[] = [
    {value: 's', viewValue: 'Sim'},
    {value: 'n', viewValue: 'Não'},
]

export const languageOptions: Option[] = [
    {value: 'ch', viewValue: 'Chinês'},
    {value: 'en', viewValue: 'inglês'},
    {value: 'es', viewValue: 'Espanhol'},
    {value: 'fr', viewValue: 'Fancês'},
    {value: 'jp', viewValue: 'Japonês'},
    {value: 'kr', viewValue: 'Coreano'},
    {value: 'pt', viewValue: 'Português'},
]

export const genresOptions: Option[] = [
    {value: 'autoajuda', viewValue: 'Autoajuda'},
    {value: 'aventura', viewValue: 'Aventura'},
    {value: 'comedia', viewValue: 'Comédia'},
    {value: 'fabula', viewValue: 'Fábula'},
    {value: 'fantasia', viewValue: 'Fantasia'},
    {value: 'ficcao-cientifica', viewValue: 'Ficção científica'},
    {value: 'romance', viewValue: 'Romance'},
    {value: 'suspense', viewValue: 'Suspense'},
    {value: 'terror', viewValue: 'Terror'},
]

export const authorOptions: Option[] = [
    { value: '1', viewValue: 'Junji Ito'},
    { value: '2', viewValue: 'Margaret Atwood'},
    { value: '3', viewValue: 'Neil Gaiman'},
    { value: '4', viewValue: 'Inio Asano'},
    { value: '5', viewValue: 'C. S. Lewis'},
    { value: '6', viewValue: 'George Orwell'},
    { value: '7', viewValue: 'Jules Verne'},
    { value: '8', viewValue: 'Ursula K. Le Guin'},
    { value: '9', viewValue: 'Isaac Asimov'},
    { value: '10', viewValue: 'Franz Kafka' }
]

export const publisherOptions: Option[] = [
    { value: '1', viewValue: 'Panini'},
    { value: '2', viewValue: 'JBC'},
    { value: '3', viewValue: 'Pipoca e Nanquim'},
    { value: '4', viewValue: 'Devir'},
    { value: '5', viewValue: 'NewPop'},
    { value: '6', viewValue: 'DarkSide'},
    { value: '7', viewValue: 'L&PM'},
    { value: '8', viewValue: 'Companhia das Letras'},
    { value: '9', viewValue: 'SESI'},
    { value: '10', viewValue: 'Rocco' }
]
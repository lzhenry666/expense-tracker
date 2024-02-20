import { Category } from "../types/Category";
export const categories:Category = {
    food:{title: 'Alimentação', color: 'blue', expense: true},
    salary:{title: 'Salário', color: 'green', expense: false},
    extra:{title: 'Extra', color: 'red', expense: false},
    health:{title: 'Saúde', color: 'purple', expense: true},
    sport:{title: 'Esporte', color: 'orange', expense: true},
    rent:{title: 'Aluguel', color: 'black', expense: true},
    other:{title: 'Outros', color: 'gray', expense: true}
}
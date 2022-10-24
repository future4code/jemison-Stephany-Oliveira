// Exercício 4

/*
O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se
trabalham presencialmente ou por home office:

[
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
    { nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
    { nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
    { nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
    { nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
    { nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

Considerando o array acima, crie um ENUM para os setores e um type para as pessoas colaboradoras.
Em seguida, crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor
de marketing que trabalham presencialmente.
*/

enum department {
    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="financeiro"
}

type Employee = {name:string, salary:number, department:department, workAtOffice:boolean}

const company: Employee[] = [
    { name: "Marcos", salary: 2500, department: department.MARKETING, workAtOffice: true },
    { name: "Maria", salary: 1500, department: department.VENDAS, workAtOffice: false },
    { name: "Salete", salary: 2200, department: department.FINANCEIRO, workAtOffice: true },
    { name: "João", salary: 2800, department: department.MARKETING, workAtOffice: false },
    { name: "Josué", salary: 5500, department: department.FINANCEIRO, workAtOffice: true },
    { name: "Natalia", salary: 4700, department: department.VENDAS, workAtOffice: true },
    { name: "Paola", salary: 3500, department: department.MARKETING, workAtOffice: true }
]

const marketingHealthCheck = (arr:Employee[]):Employee[] => {
    const newArr:Employee[] = arr.filter((employee) => {
        return employee.department === 'marketing' && employee.workAtOffice === true;
    })
    return newArr
}

console.table(marketingHealthCheck(company))
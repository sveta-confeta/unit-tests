export type UserType = {
    name: string
    hair: number
    address: { title: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType={
    id: number, title: string
}

export type WithCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
}


//функция для 1 теста:
export function hairdresser(u: UserType, power: number) {
    let copy = {
        ...u, hair: u.hair / power
    }
    // copy.hair=copy.hair/power
    return copy

}

//функция для 2го теста:

export function moveUser(u: UserWithLaptopType, city: string) {
    let copymoveUser =
        {...u, ...u.address, address: u.address.title = city};

    return copymoveUser

}


//функция для 3го теста:

export function upgradeUserLaptop(u: UserWithLaptopType, brend: string) {

    return {...u, laptop: {...u.laptop, title: brend}};

}

//функция для 4го теста:
export function moveUserToOtherHause(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house: house}};
}

//функция для 5го теста:
export function addNewBook(u: UserWithLaptopType & UserWithBooksType, book: Array<string>) {
    return {...u, books: [...u.books, ...book]};

}

//функция для 6го теста:
export function upgradeBook(u: UserWithLaptopType & UserWithBooksType, oldbook: string, newbook: string) {
    return {...u, books: u.books.map(m => m === oldbook ? newbook : m)};

}

//функция для 7го теста:
export function removeBook(u: UserWithLaptopType & UserWithBooksType, oldbook: string) {
    return {...u, books: u.books.filter(f => f !== oldbook)};

}

//функция для 8го теста:
export function addCompanies(u: UserWithLaptopType & WithCompaniesType , companie:{ id: number, title: string }) {
    return {...u, companies: [...u.companies, companie]};

}

//функция для 9го теста:
export function updateCompanyTitle(u: WithCompaniesType ,  title: string) {
    return {...u, companies: u.companies.map(m=> m.title==='Епам' ? title: m)};

}
//функция для 10го теста:
export function updateCompanyTitle2(u: WithCompaniesType ,id:number,  title: string) {
    const copy:WithCompaniesType={...u,companies: u.companies.map(m=>m.id===id? {...m,title:title} : m)}
    // return {...u, companies: u.companies.map(m=> m.title==='Епам' ? 'EPAM': m)};
return copy;
}

//функция для 11го теста:
export const updateCompany=(companies:{[key:string]:Array<CompanyType>},userName:string,companyId:number,newTitle:string)=> {
let companyCopy={...companies}
    companyCopy[userName]=companyCopy[userName].map(c=>c.id===companyId ?
        {...c,title:newTitle}:c)
    return companyCopy;
}


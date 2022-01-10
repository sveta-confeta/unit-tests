export type UserType={
    name:string
    hair:number
    address:{title:string,house?:number}
}

export type LaptopType={
    title:string
}
export type UserWithLaptopType=UserType & {
    laptop:LaptopType
}
export type UserWithBooksType=UserType & {
    books:Array<string>
}



  //функция для 1 теста:
export function hairdresser(u:UserType,power:number) {
    let copy={
        ...u,hair:u.hair/power
    }
    // copy.hair=copy.hair/power
    return copy

}

//функция для 2го теста:

export function moveUser(u:UserWithLaptopType,city:string) {
    let copymoveUser=
        {...u,...u.address,address: u.address.title=city};

    return copymoveUser

}


//функция для 3го теста:

export function upgradeUserLaptop(u:UserWithLaptopType,brend:string) {

     return {...u,laptop:{...u.laptop,title:brend}};

}
//функция для 4го теста:
export function moveUserToOtherHause(u:UserWithLaptopType & UserWithBooksType,house:number) {
    return {...u,address:{ ...u.address, house:house }};
}

//функция для 5го теста:
export function addNewBook(u:UserWithLaptopType & UserWithBooksType,book:Array<string>) {
    return {...u,books:[ ...u.books, ...book] };

}

//функция для 6го теста:
export function upgradeBook(u:UserWithLaptopType & UserWithBooksType,oldbook:string, newbook:string) {
    return {...u,books:u.books.map(m=>m===oldbook ? newbook : m) };

}


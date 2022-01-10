export type UserType={
    name:string
    hair:number
    address:{title:string}
}

export type LaptopType={
    title:string
}
export type UserWithLaptopType=UserType & {
    laptop:LaptopType
}


  //функция для 1 теста:
export function hairdresser(u:UserType,power:number) {
    let copy={
        ...u,hair:u.hair/power;
    }
    // copy.hair=copy.hair/power
    return copy

}


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


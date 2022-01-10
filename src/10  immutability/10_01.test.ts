import {UserType, UserWithLaptopType} from "./10_01";
import {hairdresser} from "./10_01";
import {moveUser} from "./10_01";
import {upgradeUserLaptop} from "./10_01";


// 1 test:
test('reference type test',()=>{
    let user:UserType={
        name:'Dimych',
        hair: 32,
        address:{
            title:'Minsk'
        }
    }

   const hair= hairdresser(user,2);

    expect(user.hair).toBe(32);
    expect(hair.hair).toBe(16);
})

      //2 test: изменяем обьект в обьекте более глубокой вложенности
test('change address',()=>{
    let user:UserWithLaptopType={
        name:'Dimych',
        hair: 32,
        address:{
            title:'Minsk'
        },
        laptop:{
            title:'ZenBook'
        }
    }
    const movedUser= moveUser(user,'Kiev');

    expect(user).not.toBe(movedUser); //должны быть два разных обьекта
    expect(user.address).not.toBe(movedUser.address); //не должны быть равны, потому что мы сделаем копию и потом изменим эти данные
    expect(movedUser.address).toBe('Kiev');//а этот обьект не должен менятся
    expect(user.laptop).toBe(movedUser.laptop);//мы не делали копий и не изменяли его
})


//3 test: изменяем обьект в обьекте более глубокой вложенности
test('upgrade to macbook',()=>{
    let user:UserWithLaptopType={
        name:'Dimych',
        hair: 32,
        address:{
            title:'Minsk'
        },
        laptop:{
            title:'Zenbook'
        },
    }
    const brendUser= upgradeUserLaptop(user,'Macbook');

    expect(user).not.toBe(brendUser); //должны быть два разных обьекта
    expect(user.laptop).not.toBe(brendUser.laptop); //не должны быть равны, потому что мы сделаем копию и потом изменим эти данные
    expect(user.laptop.title).toBe('Zenbook');//а этот обьект не должен менятся
    expect(user.address).toBe(brendUser.address);//мы не делали копий и не изменяли его
})

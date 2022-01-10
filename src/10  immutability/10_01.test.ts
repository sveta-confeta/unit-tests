import {UserType} from "./10_01";
import {hairdresser} from "./10_01";


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
    let user:UserType={
        name:'Dimych',
        hair: 32,
        address:{
            title:'Minsk'
        }
    }
    const hair= moveUser(user,'Kiev');

    expect(user.hair).toBe(32);
    expect(hair.hair).toBe(16);
})

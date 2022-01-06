function age(u:UserType){ //в параметр функции входит user
    u.age++;
}
export type UserType={
    name:string
    age:number
    address?:{title:string}
}



test('reference test',()=>{
    const user:UserType={
        name:'Dimych',
        age:32,
    }
age(user);//и тепрь у него в age лежит 33

    //проверочка:

    expect(user.age).toBe(33)

    //cоздаем новый обьект и запишем в него user
    const superman=user;
    superman.age=1000;

    //опять проверочка user: (сколько там стало)

    expect(user.age).toBe(1000)
})

test('array test',()=>{
    const users=[
        {
        name:'Dimych',
        age:32
    },{
        name:'Sveta',
        age:40,
    }
    ];

    //cоздаем новый обьект и запишем в него users
 const admins=users;
    admins.push({name:'doda',age:69});

    //опять проверочка users: (сколько там стало)

    expect(users[2]).toEqual({name:'doda',age:69})
})

test('value type test',()=> {
    const usersCount = 100;

    //cоздаем новый обьект и запишем в него users
    let adminsCount = usersCount;
    adminsCount = 101;

})

test('reference type test',()=>{
    let user:UserType={
        name:'Dimych',
        age:32,
        address:
            {title:'Minsk'}
    }

    //cоздаем новый обьект и запишемв него user
    // const addr =user.address;
    
    let user2: UserType={
        name:'Natasha',
        age:30,
        address: user.address,
    }

    // @ts-ignore
    user2.address.title='Kanary';
    // @ts-ignore
    expect(user.address.title).toBe('Kanary')
    // @ts-ignore
    expect(user2.address.title).toBe('Kanary')
})





export const userObj={
    '0':'Dimych',
    '1':'Natasha',
    '2':'Valera',
    '3':'Katya',
}

export type UsersType={
    [key:string]:{id:number,name:string}
}

export const users:UsersType={   //ассоциативный массив
    '101':{id:101, name:'Dimych'},
    '10145':{id:10145, name:'Natasha'},
    '56':{id:56, name:'Valera'},
    '1013':{id:1013, name:'Katya'},
}
// users[56] ; //скорость доставания данных по id
let user={id:4567,name:'Igor'}; //нам нужно этот обьект добавить в общий обьект
users[user.id]=user;
delete users[user.id];
users[user.id].name='Vasya'; 

export const usersArray=[{id:101, name:'Dimych'},{id:10145, name:'Natasha'},{id:56, name:'Valera'},{id:1013, name:'Katya'}]
//usersArray.find(f=> f.id===56)
//let userCopy=[... usersArray.filter(),user] -добавление user
//let users= usersArray.filter (u=>u.id !== user.id)-удаление user
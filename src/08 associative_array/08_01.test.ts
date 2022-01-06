export type UsersType={
    [key:string]:{id:number,name:string}
}

let users:UsersType; //будем во время тестов присваивать сюда

beforeEach(()=>{
    users={
        '101':{id:101, name:'Dimych'},
        '10145':{id:10145, name:'Natasha'},
        '56':{id:56, name:'Valera'},
        '1013':{id:1013, name:'Katya'},
    }
})

test('should update corresponding user',()=>{
    users['56'].name='Victor';//перезатираем наши данные

    expect(users['56'].name).toBe('Victor');//проверяем,перезатерлись ли ваши данные
})
test('should delete corresponding user',()=>{
   delete users['56']//удаляем  наши данные

    expect(users['56']).toBeUndefined();//проверяем,стерлись ли наши данные:undefined
})
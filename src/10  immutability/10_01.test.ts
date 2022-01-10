import {
    moveUserToOtherHause,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from "./10_01";
import {hairdresser} from "./10_01";
import {moveUser} from "./10_01";
import {upgradeUserLaptop} from "./10_01";
import {addNewBook} from "./10_01";
import {upgradeBook} from "./10_01";
import {removeBook} from "./10_01";
import {addCompanies} from "./10_01";
import {updateCompanyTitle} from "./10_01";
import {updateCompanyTitle2} from "./10_01";
import {updateCompany} from "./10_01";


// 1 test:
test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const hair = hairdresser(user, 2);

    expect(user.hair).toBe(32);
    expect(hair.hair).toBe(16);
})

//2 test: изменяем обьект в обьекте более глубокой вложенности
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser); //должны быть два разных обьекта
    expect(user.address).not.toBe(movedUser.address); //не должны быть равны, потому что мы сделаем копию и потом изменим эти данные
    expect(movedUser.address).toBe('Kiev');//а этот обьект не должен менятся
    expect(user.laptop).toBe(movedUser.laptop);//мы не делали копий и не изменяли его
})


//3 test: изменяем обьект в обьекте более глубокой вложенности
test('upgrade to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
    }
    const brendUser = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(brendUser); //должны быть два разных обьекта
    expect(user.laptop).not.toBe(brendUser.laptop); //не должны быть равны, потому что мы сделаем копию и потом изменим эти данные
    expect(user.laptop.title).toBe('Zenbook');//а этот обьект не должен менятся
    expect(user.address).toBe(brendUser.address);//мы не делали копий и не изменяли его
})

//4 test:
test('upgrade to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react'],
    }
    const houseUser = moveUserToOtherHause(user, 99);

    expect(user).not.toBe(houseUser); //должны быть два разных обьекта
    expect(user.books).toBe(houseUser.books) //этот массив не изменился
    expect(user.laptop).toBe(houseUser.laptop) //этот обьект не изменился
    expect(user.address).not.toBe(houseUser.address); //не должны быть равны, потому что мы сделаем копию и потом изменим эти данные
    expect(user.laptop.title).toBe('Zenbook');//а этот обьект не должен менятся
    expect(houseUser.address.house).toBe(99);//
})
//5 test: добавим во вложенный массив массив
test('add book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react'],
    }
    const houseUser = addNewBook(user, ['ts', 'rest AP']);

    expect(user).not.toBe(houseUser); //должны быть два разных обьекта
    expect(user.books).not.toBe(houseUser.books) //этот массив изменился
    expect(user.laptop).toBe(houseUser.laptop) //этот обьект не изменился
    expect(user.address).toBe(houseUser.address); // должны быть равны
    expect(user.laptop.title).toBe('Zenbook');//а этот обьект не должен менятся
    expect(houseUser.books[4]).toBe('ts');
    expect(houseUser.books[5]).toBe('rest AP');

})

//6 test: поменяем во вложенном  массиве один элемент на другой
test('upgrade js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react'],
    }
    const houseUser = upgradeBook(user, 'js', 'ts');

    expect(user).not.toBe(houseUser); //должны быть два разных обьекта
    expect(user.books).not.toBe(houseUser.books) //этот массив изменился
    expect(user.laptop).toBe(houseUser.laptop) //этот обьект не изменился
    expect(user.address).toBe(houseUser.address); // должны быть равны
    expect(houseUser.books[2]).toBe('ts');


})

//7test: фильтрация в  массиве
test('remove js book ', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react'],
    }
    const houseUser = removeBook(user, 'js');

    expect(user).not.toBe(houseUser); //должны быть два разных обьекта
    expect(user.books).not.toBe(houseUser.books) //этот массив изменился
    expect(user.laptop).toBe(houseUser.laptop) //этот обьект не изменился
    expect(user.address).toBe(houseUser.address); // должны быть равны
    expect(houseUser.books.length).toBe(3);


})

//8test:
test('add the companie ', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-Incubator'},

        ]
    }
    const houseUser = addCompanies(user, {id: 3, title: 'Google'});

    expect(user).not.toBe(houseUser); //должны быть два разных обьекта

    expect(user.laptop).toBe(houseUser.laptop) //этот обьект не изменился
    expect(user.address).toBe(houseUser.address); // должны быть равны
    expect(houseUser.companies.length).toBe(3);


})
//9test: как в массиве с обьектами найти нужное слово и зменить его
test('add the companie ', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Епам'}, //заменить на английское слово
            {id: 2, title: 'IT-Incubator'},

        ]
    }
    const houseUser = updateCompanyTitle(user,  'EPAM');

    expect(user).not.toBe(houseUser); //должны быть два разных обьекта
    expect(user.address).toBe(houseUser.address); // должны быть равны
    expect(user.companies).not.toBe(houseUser.companies);
    expect(houseUser.companies[0]).toBe('EPAM');
    


})
//10test: как в массиве с обьектами по id елемент и заменить его
test('add the companie ', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Епам'}, //заменить на английское слово
            {id: 2, title: 'IT-Incubator'},

        ]
    }
    const houseUser = updateCompanyTitle2(user, 1, 'EPAM');

    expect(user).not.toBe(houseUser); //должны быть два разных обьекта
    expect(user.address).toBe(houseUser.address); // должны быть равны
    expect(user.companies).not.toBe(houseUser.companies);
    expect(houseUser.companies[0].title).toBe('EPAM');



})

//11test: ассоциативный массив
test('update companie ', () => {

    let companies={ //нужно имутабельно изменить компанию
        'Dimych':[  {id: 1, title: 'Епам'},{id: 2, title: 'IT-Incubator'}, ],
        'Artem':[{id: 2, title: 'IT-Incubator'}]
    }
    const copy=updateCompany(companies,'Dimych',1,'Google');


    expect(copy['Dimych']).not.toBe(companies['Dimych'])

    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Google')

})

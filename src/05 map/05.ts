export type PeopleType = {
    name: string
    age: number
}


const people: Array<PeopleType> = [   //начальный массив
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},

]

const dimychTransform = (man: PeopleType) => {
    return {                                      //функция которая вызывается для каждого обьекта
        stack: ['css,', 'html', 'js', 'tdd'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs = [     //в результате новый массив
    {
        stack: ['css,', 'html', 'js', 'tdd'],
        firstName: 'Andrew', LastName: "Ivanov"
    },
    {
        stack: ['css,', 'html', 'js', 'tdd'],
        firstName: 'Alexander', LastName: "Petrov"
    },
    {
        stack: ['css,', 'html', 'js', 'tdd'],
        firstName: 'Dmitry', LastName: "Sidorov"
    },

]

let d1 = dimychTransform(people[0]);
let d2 = dimychTransform(people[1]);
let d3 = dimychTransform(people[2]);

const dev2 = [   //по итогу получаем массив как в dev
    d1, d2, d3
]
////// реализация при помощи map:

const dev3 = people.map(p => ({
  stack: ['css,', 'html', 'js', 'tdd'],
    firstName: p.name.split('')[0],
            LastName:p.name.split('')[1],
}

))

export const message=people.map(m=> `Hello, ${m.name.split('')[0]}.Welcome IT-Incubator`) //тест
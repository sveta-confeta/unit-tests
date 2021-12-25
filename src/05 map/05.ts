export type PeopleType={
    name:string
    age:number
}


const people:Array<PeopleType>=[   //начальный массив
    {name:'Andrew Ivanov',age:33},
    {name:'Alexander Petrov',age:24},
    {name:'Dmitry Sidorov',age:18},

]

const dimychTransform=(man: PeopleType) =>{
    return{                                      //функция которая вызывается для каждого обьекта
        stack:['css,','html','js','tdd'],
        firstName:man.name.split(' ')[0],
        lastName:man.name.split(' ')[1]
    }
}

const devs=[     //в результате новый массив
    {
        stack: ['css,', 'html', 'js', 'tdd'],
        firstName:'Andrew',LastName:"Ivanov"
    },
    {
        stack: ['css,', 'html', 'js', 'tdd'],
        firstName:'Alexander',LastName:"Petrov"
    },
    {
        stack: ['css,', 'html', 'js', 'tdd'],
        firstName:'Dmitry',LastName:"Sidorov"
    },

]

////// реализация при помощи map:


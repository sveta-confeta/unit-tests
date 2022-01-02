import {PeopleType} from './05'

let people:Array <PeopleType>=[];
beforeEach(()=>{
    people= [                                     //начальный массив
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},

    ]
})

test('should get array greeting messages',()=>{
    const message=people.map(m=> `Hello, ${m.name.split(' ')[0]}.Welcome IT-Incubator`)

    expect(message.length).toBe(3);
    expect(message[0]).toBe('Hello, Andrew.Welcome IT-Incubator');
    expect(message[1]).toBe('Hello, Alexander.Welcome IT-Incubator');
    expect(message[2]).toBe('Hello, Dmitry.Welcome IT-Incubator');
})
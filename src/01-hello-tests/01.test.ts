import {sum} from './01';
import {mult} from './01';
import {splitIntoWords} from './01';

test('sum should be correct', () =>{ //пишем название что должно произойти-"сумма должна быть корректной"
    //data
    const a=1; //исходные данные
    const b=2;


    //action
    const result =sum (a,b);

    //expect result-ожидаем результат
    expect(result).toBe(3);

})

test('multiply should be correct', () =>{ //пишем название что должно произойти-"сумма должна быть корректной"
    //data
    const a=1; //исходные данные
    const b=2;
    const c=3;


    //action
    const result1 =mult(a,b);
    const result2 = mult(b,c);

    //expect result-ожидаем результат
    expect(result1).toBe(2);
    expect(result2).toBe(6);


})

test('splitting into words should be correct ', () =>{ //пишем название что должно произойти
    //data
    const sent1="Hello my friend!"; //исходные данные
    const sent2="JS - the best  programming language";



    //action
    const result1 =splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expect result-ожидаем результат
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');


})
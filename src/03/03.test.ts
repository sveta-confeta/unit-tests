import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(()=>{
    student = {  //копируем обьект из файла 02
        id:1,
        'name': 'Dimych',
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'html'
            },
            {
                id: 2,
                title: 'js'
            }, {
                id: 3,
                title: 'react',
            },
        ]
    };
})


test("new tech skill should be added to student", ()=>{
    expect(student.technologies.length).toBe(3);//длина до вызова функции-3

    addSkill(student,'JS'); //вызов функции который что то добавляет

    expect(student.technologies.length).toBe(4);//длина после  вызова функции-4
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();//id определено,какое неважно

})

//напишем еще один тест:
test("student should be made active", ()=>{
    expect(student.isActive).toBe(false);//до вызова функции был false

    makeStudentActive(student); // функция


    expect(student.isActive).toBe(true);//после вызова функции стал true


})
//напишем еще один тест:
test("does student lives is city?", ()=>{


  let resault1=doesStudentLiveIn(student,'Moscow'); // функция будет возращать false are true,поэтому записана в переменную
    let resault2=doesStudentLiveIn(student,'Minsk');

    expect(resault1).toBe(false);
    expect(resault2).toBe(true);
})


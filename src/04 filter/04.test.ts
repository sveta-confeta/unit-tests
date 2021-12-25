test('should take men older then 90', ()=> {
    const ages=[18,20,22,1,100,98,13]; // в исходные данные копируем массивы начальные

    const predicate=(age: number)=>{
        return age>90;
    }
    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

///-----2---/////
test('should take courses chipper 160', ()=> {
    const courses =[
        {title:'CSS',price:110},
        {title:'JS',price:200},
        {title:'React',price:150},

    ];//  в исходные данные копируем массивы начальные

    const chipCourses = courses.filter((course:CourseType) => course.price<160 ); //в параметры передаем весь массив с любым именем, но тип такой же ,как и у передаваемого массива


    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('React');

})
///---3----///
test ('get only completed tasks'),()=> {
    const tasks=[
        {id:1,title:'bread',isDone: false},
        {id:2,title:'milk',isDone: true},
        {id:3,title:'sugar',isDone: false},
        {id:4,title:'meat',isDone: true},
    ]

    const completedTask=tasks.filter(item => item.isDone)

    //проверка функции

    expect(completedTask.length).toBe(2);
    expect(completedTask[0].id).toBe(2);// 0-это после фильтрации будет первым true
    expect(completedTask[1].id).toBe(4);
}

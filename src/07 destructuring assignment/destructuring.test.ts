import {ManType} from "./Destructuring";

let props: ManType; //требует типизации
beforeEach(() => {
    props = {
        name: 'Sveta',
        age: 40,
        lessons: [{title: '1'}, {title: '2'},{title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosty street'

            }
        }
    }
})


test("", () => {
    // const age=props.age; //мы часто так делаем, если нам нужно сделать пропсы покороче.
    // const lessons=props.lessons;
    // //проведем тесты:

    //а теперь то что выше сделаем с деструктуризацией:
    const {age, lessons} = props;
    const {title} = props.address.street


    expect(age).toBe(40);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Nezavisimosty street');
})
test('',()=>{
    const l1=props.lessons[0];
    const l2=props.lessons[1];

    // const[ls1,ls2]=props.lessons

    const [ls1,...restlessons]=props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    // expect(ls2.title).toBe('2')
    expect(restlessons.length).toBe(2);
    expect(restlessons[0].title).toBe('2');

})
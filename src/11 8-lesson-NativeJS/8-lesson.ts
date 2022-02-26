// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {

    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
     if (a === b && b === c && c === a) {
      return '10'
     }else if( b === c && a < b || a===b && b>c){
         return '01'
     } else if(a!==b && b!==c && c!==a){
         return '11'
     } else if (b+c< a || a+c<b || a+b<c){
         return '00'
     }else{
         return ''
     }


}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let arr=String(number).split(''); //['3','4']
    return arr.map(el=> Number(el)).reduce((sum,el)=>sum+el);




}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumChot=0;
    let sumNechot=0;
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            sumChot=sumChot+arr[i]
        }else{
            sumNechot=sumNechot+arr[i]
        }


    }

    return   sumChot>sumNechot;
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let arr=array.filter(m=> m > 0&& Number.isInteger(m));
    return arr.map(m=>Math.pow(m,2));
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let sum=0;
 for(let i=0;i<=N;i++){
        sum=sum+i;
 }
    return sum
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    let newArr = []
    let numOfBan = 0
    numOfBan += Math.trunc(amountOfMoney/1000)
    for (let i = 0; i < numOfBan; i++) {newArr.push(1000)}
    amountOfMoney = amountOfMoney%1000
    numOfBan += Math.trunc(amountOfMoney/500)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(500)}
    amountOfMoney = amountOfMoney%500
    numOfBan += Math.trunc(amountOfMoney/100)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(100)}
    amountOfMoney = amountOfMoney%100
    numOfBan += Math.trunc(amountOfMoney/50)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(50)}
    amountOfMoney = amountOfMoney%50
    numOfBan += Math.trunc(amountOfMoney/20)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(20)}
    amountOfMoney = amountOfMoney%20
    numOfBan += Math.trunc(amountOfMoney/10)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(10)}
    amountOfMoney = amountOfMoney%10
    numOfBan += Math.trunc(amountOfMoney/5)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(5)}
    amountOfMoney = amountOfMoney%5
    numOfBan += Math.trunc(amountOfMoney/2)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(2)}
    amountOfMoney = amountOfMoney%2
    numOfBan += Math.trunc(amountOfMoney/1)
    for (let i = newArr.length; i < numOfBan; i++) {newArr.push(1)}
    return newArr
}
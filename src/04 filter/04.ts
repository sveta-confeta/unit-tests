 import {CityType} from "../02/02_02";


 const ages=[18,20,22,1,100,98,13];

const predicate=(age: number)=>{
    return age>90;
}

const oldAge=[100]; //ожидаем результат от фильтра predicate



///--2-------это логика-------/////
type CourseType={
    title:string
    price:number
}

const courses =[          //filter
    {title:'CSS',price:110},
    {title:'JS',price:200},
    {title:'React',price:150},

];


const  chipPredicate=(courses:CourseType) =>{ //фильтрация
 return courses.price < 160;
}

const chipCourses =[
    {title:'CSS',price:110}, //РЕЗУЛЬТИРУЮЩАЯ ФУНКЦИЯ
    {title:'React',price:150},
];

/////------------/////

 export function demolishHouse(city:CityType,street:string){
     city.houses=city.houses.filter(h=>h.address.street.title!==street)
 }//фильтруем и переписываем значение начальное


import {student, StudentType} from "../02/02";
import {BuildType, HouseType} from "../02/02_02";

  //----1 function---
export const addSkill= (student: StudentType, skill: string) =>{ //протестируем как это функция работает
    student.technologies.push({ // функция не возращает а модифицирует(добавляет новые данные в указанное место)
        id: new Date().getTime(), //-обьект из id i titlle со своими данными из параметров
         title:skill
    })
}
   //---------2 function-----------///
export function  makeStudentActive(student:StudentType) {
    student.isActive=true;
}
//----3 function---
export const doesStudentLiveIn=(student:StudentType,cityName:string) =>{
 return student.address.city.title === cityName; //равен ли город который указан в обьекте student тому, что передано в параметрах
}


//----4 function---
export const repairHouse=(city:HouseType) =>{ //функция которая repead делает true
   city.repaired=true;
}



export const  toFireStaff=(building:  BuildType, staffCountToFire:number)=>{
building.staffCount-=staffCountToFire;
}

import {student, StudentType} from "../02/02";
import {BuildType, HouseType} from "../02/02_02";


export const addSkill= (student: StudentType, skill: string) =>{ //протестируем как это функция работает
    student.technologies.push({ // функция не возращает а модифицирует(добавляет новые данные в указанное место)
        id: new Date().getTime(),
         title:skill
    })
}

export function  makeStudentActive(student:StudentType) {
    student.isActive=true;
}

export const doesStudentLiveIn=(student:StudentType,cityName:string) =>{
 return student.address.city.title === cityName;
}

export const repairHouse=(city:HouseType) =>{ //функция которая repead делает true
   city.repaired=true;
}



export const  toFireStaff=(building:  BuildType, staffCountToFire:number)=>{
building.staffCount-=staffCountToFire;
}

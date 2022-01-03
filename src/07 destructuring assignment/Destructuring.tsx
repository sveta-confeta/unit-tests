import React from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: StreetType
}
type LessonsType = {
    title: string
}
type TitleType = {
    title: string
}
type StreetType = {
    street: TitleType
}

type PropsType={
title:string
    man:ManType
}

export const ManComponents:React.FC<PropsType>=({title,man})=>{
    //1 вариант использование деструктуризации
    // const{title}=props;
    // const {name}=props.man
    //2 вариант использование деструктуризации
    // const{title,man}=props;
return <div>
<h1>{title}</h1>
    <hr/>
    <div>{man.name}</div>
</div>
}
export  type StreetType={
    title:string
}

export  type AddressType={
    number:number
    street:StreetType
}

export type HouseType = {  //массив  houses состоит из 3х HouseType
    buildedAt:number
    repaired: boolean
    address:AddressType

}
export type BuildType={
    type:string
    budget:number
    staffCount:number
    address:StreetBuildType
}
 type StreetBuildType={
    street:TitleBuildType
}
 type TitleBuildType={
    title:string
}



export type CityType={
    title:string
    houses: Array<HouseType>
    buildings:Array<string>
    governmentBuildings: Array <BuildType>
    citizensNumber:number
}


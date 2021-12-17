export type StudentType={
    id:number
    'name': string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<DataType>
}
type CityType={
    title:string
    countryTitle:string
}
type AddressType={
    streetTitle:string
    city:CityType
}
type DataType={
    id: number
    title: string
}



export const student = {
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
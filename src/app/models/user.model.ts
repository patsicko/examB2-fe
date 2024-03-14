export interface CreateUserDto {
    
    firstName:string
    lastName:string
    email:string
    password:string
    
}
export interface LoginData {
    email:string
    password:string
}
export interface Marks {
    subject: string
    marks: number
    type: string
}
export interface Student {
    firstName: string
    lastName: string
}
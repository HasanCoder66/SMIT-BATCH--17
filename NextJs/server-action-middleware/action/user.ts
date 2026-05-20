"use server"
import fs from 'fs/promises'

export const registerUser = async (formData:FormData) => {
// console.log("register user function chala -->", formData);

const name = formData.get("name")
const address = formData.get("add")

console.log(`my user name is: ${name} and his home address is: ${address}` );
// fs.writeFile("random.txt", "han jani kia haal hain...")
// User.create
}


// export const createPost = async (formData:FormData) => {
// // console.log("register user function chala -->", formData);

// const name = formData.get("name")
// const address = formData.get("add")

// console.log(`my user name is: ${name} and his home address is: ${address}` );

// // User.create
// }


// export const login = async (formData:FormData) => {
// // console.log("register user function chala -->", formData);

// const email = formData.get("email")
// const password = formData.get("password")

// // {name : "ayan",password :"12345678", email :"ayan@gmail.com"} 
// //const user =  User.find({email:email}) 

// // if(!user) return "user not found" 

// // if(user.password !== password) return "invalid credientials"

// // console.log(`my user name is: ${name} and his home address is: ${address}` );
// // fs.writeFile("random.txt", "han jani kia haal hain...")
// // User.create
// }
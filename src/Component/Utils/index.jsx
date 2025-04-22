import Mybookings from "../../Pages/Mybookings"
import toast from 'react-hot-toast';

export const getfav =()=>{
    const bookedLawyer= localStorage.getItem("lawyer")
    if(bookedLawyer) return JSON.parse(bookedLawyer)
        else  return []
}

export const bookLawyer = lawyer =>{
const booked= getfav();
const exist = booked.find(p=>p.id===lawyer.id)
if(exist) { toast.error("Already added!");
    return 
}

console.log("already ache") 
booked.push(lawyer)
console.log(booked)
localStorage.setItem("lawyer", JSON.stringify(booked))
}

export const remove = id =>{
    const booked= getfav();
    const remain= booked.filter(p=> p.id !== id)
    localStorage.setItem("lawyer", JSON.stringify(remain))
}
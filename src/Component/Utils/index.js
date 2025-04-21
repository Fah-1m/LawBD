
export const getfav =()=>{
    const bookedlawyer= localStorage.getItem(lawyer)
    if(bookLawyer) return JSON.parse(lawyer)
        else  return []
}

export const bookLawyer = lawyer =>{
const booked= getfav();
booked.push(lawyer)

localStorage.setItem("lawyer", JSON.stringify(lawyer))
}
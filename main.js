let num1 = +prompt("Birinchi aylanani radisuni kiriting")
let num2 = +prompt("Ikkinchi aylanani radisuni kiriting")
let num3 = +prompt("Uchinchi aylanani radisuni kiriting")

function calcAge(num1,num2,num3) {
    let userAge = num1 + num2 + num3
    alert(`${userAge}`)
    return userAge;
}
calcAge(num1,num2,num3)

let son1 = +prompt("Birinchi yuzani kiriting")
let son2 = +prompt("Ikkinchi yuzani kiriting")
let son3 = +prompt("Uchinchi yuzani kiriting")
function calcUser(son1,son2,son3){
    let calcUser = son1 * son2 * son3;
    alert(`${calcUser }`)
    return calcUser;
}
calcUser(son1,son2,son3)

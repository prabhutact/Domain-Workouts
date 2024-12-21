const person = {
    name : 'Prabhu',
    age : 50,
    Address : {
        city : 'Chennai',
        pincode : 626142
    }
}

const person1 = {...person}
person1.age = 35
person1.Address.city = 'Maduari'

console.log(person)
console.log(person1)
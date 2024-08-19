const tinderUser={}
tinderUser.id="aksfjl"
tinderUser.name="ramn"
tinderUser.loogi=false
// console.log(tinderUser)

const regularUser={
    email:"kaufa.gamil.com",
    fullname:{
        userfullname:{
            firstname:"ksdf",
            lastname:"akan"
        }
    }

}
// console.log(regularUser.fullname.userfullname.lastname)

const obj1={ 1: "a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={6:"a",5:"b"}

// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

const course = {
    coursname:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

}
const {courseInstructor} = course
console.log(courseInstructor)
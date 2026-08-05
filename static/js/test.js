console.log("hello world")
let student_name = "janitha"
console.log("student name is: " + student_name)
let student_age = 21
let course_name = "python Full Stack"
console.log("student age is: " + student_age, "course name is: " + course_name)
let  fee = 10000
let discount = 10
let discounted_fee = fee - (fee * discount / 100)
console.log("Discounted fee is: " + discounted_fee)
 
let age=18
if(age>=18)
{
    console.log("eligible for admisssion")
}
else
{
    console.log("not eligible for admission")
}
for(let i=1; i<=5;i++)
{
     console.log("Iteration number:" + i)
}
const pi = 3.14
console.log("value of pi is: " + pi)
let student = {
    name:"janitha",
    age:21,
    course:"python Full stack",
    fee:10000
}
console.log("student details: ",student)
function greetstudent(name){
    console.log("hello " + name + ", welcome to NRIIT Learning Management System")

}
greetstudent(student_name)
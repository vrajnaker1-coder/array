

let marks=[30,50,68,99,58]
let student=["jane","mark","jose","jeff","caleb"]
console.log(marks[0,3])
marks.push(40)
marks.unshift(10)
student.push("steve")
student.unshift("kel")
console.log(marks)
console.log(student)
marks.pop()
marks.shift()
student.pop()
student.shift()
console.log(marks)
console.log(student)
marks.forEach(element => {
    console.log(element)
});
student.forEach((element) => {
    console.log(element)
})
    




function person() {
    this.name = "xufeifan";
    this.age = 20;
    //这里this是必须的
}

function student() {
    studentName = "zhangsan";
    studentAge = 20;
}

var person = new person();
var studentObj = new student();

console.log(person.name);
console.log(person.age);
//xufeifan 20

console.log(studentObj.studentName);
console.log(studentObj.studentAge);
//undefined undefined

console.log(studentName);
console.log(studentAge);
//zhangsan 20

console.log(document);
console.log(window);
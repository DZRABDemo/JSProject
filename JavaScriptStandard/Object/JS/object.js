function fun() {
    var person = new Object();
    person.name = "xufeifan";
    console.log(person.name);
}

fun();

function fun1() {
    var obj1 = new Object();
    var obj2 = obj1;
    obj1.name = "xufeifan";
    console.log(obj2.name);
    //这里是引用类型
}

//fun1();


console.log(document);
console.log(window);
//console.log(Object);

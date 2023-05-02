//console.log("hellllloooo world");

/*let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

let car={
    model:"celerio",
    color:"black",
    price:100000000
}

console.log(`${car.model} ${car.color}    ${car.price}`)

let stud={
    name:"lea",
    college:"cce",
    class:"12th",
    address:{
        housename:"chittilappilly",
        street:"ftfg"
    }

}
console.log(`${stud.address.housename} ${stud.address.street}` )

let fruits=["apple","grapes","orange"]
fruits[3]="pineapple"
fruits.push("papaya")
fruits.unshift("strawberry")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)

let todo=[
    {
        id:1,
        task:"clean home"
    },
    {
        id:2,
        task:"homework"
    },
    {
        id:3,
        task:"sleep"
    }
]

console.log(todo[1].task)
function add(a,b){
    console.log("addition : ",a+b);
}
function sub(a,b){
    console.log("subtraction : ",a-b);
}
function mult(a,b){
    console.log("multiplication : ",a*b);
}

add(10,20);
sub(10,20);
mult(10,20);

add=(a,b)=>{
    console.log(a+b);
}
add(10,6);
sub=(a,b)=>{
    console.log(a-b);
}
sub(2,5);

fun=(a,b)=>{
    d=a+b;
    if(d>10){
        console.log("THE RESULT IS GREATER THAN 10")
    }
    else{
        console.log("THE RESULT IS LESS THAN 10");
}

}
fun(5,6);*/
let num=[1,2,3,4,5,6,7,8,9,10];
c=num.length
let i=0;
forloop=(num)=>{
let i=0;

for(i=0;i<c;i++){
    console.log(num[i]);
}

}
forloop(num);

whileloop=(num)=>{
    let i=0;
    c=num.length
    while(i<c){
        console.log(num[i]);
        i++;
    }
}  
whileloop(num)

dowhileloop=()=>{
    let i=0;

    c=num.length
    do{
        console.log(num[i]);
        i++;
    }while(i<c);
    
    }
dowhileloop(num);
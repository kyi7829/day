
/*함수 기초 
function sayHello(name,jender,old){
    console.log('Hello!',name,"your jender is",
    jender, "you", old)
}

sayHello("kimYeongIn","man",24)
*/

/* `` 개꿀인듯? (백틱?) 
function sayHello(name, age){
    
    console.log
    (`Hello ${name} your ${age} years old`);
}

sayHello("Kyi", 24);  */

/* return 써보기
function sayHello(name, age){
    return `Hello ${name} your ${age} years old`;
}

const greetKyi = sayHello("Kyi", 24)
console.log(greetKyi)
*/



/* prompt 와 if 를 이용한 조건문
const age = prompt("how old are you?")

if (age > 18 && age <=21){
    console.log("you can drink but you should not");
}   else if(age > 21){
    console.log("go ahead");
}   else{
    console.log("too young")
}   */

// addEventListener 종류 ↓
// https://second27.tistory.com/17  
// HTML JavaScript DOM event MDN 

/* title 색바꾸기 함수 2개 , if , 이벤트
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
const currentColor = title.style.color;

if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}


/* 2장 마지막 강의 하는데 ㅈ같아서 보류
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else{
        title.className = "";
    }
}

*/
//mini if 개꿀팁 = {a < 10 ? `${bla}` : vla}  = a가 10보다 작을때? bla를 쓰고 아닐경우 vla를 써라~ 
//setInterval(함수, 실행할 간격)
//input type 사이트 https://coding-factory.tistory.com/24
const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours
}:${minutes < 10 ? `0${minutes}` : minutes
}:${seconds < 10 ? `0${seconds}` : seconds}`;}

function init() {
 getTime();
 setInterval(getTime, 1000);
}

init();



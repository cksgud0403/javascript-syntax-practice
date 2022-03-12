//함수 선언식, 익명 함수 선언 및 호출, 함수 표현식, 화살표 함수


// 함수 선언식

/* function a(a , b) {
    return a + b;
}

console.log(a(1, 1)); */

//익명 함수 선언 및 호출

/* (function(a, b){
    console.log(a+b);
})(1, 1); */

//함수 표현식

/* let a = function(a,b) {
    return a + b;
}

console.log(a(1,1)); */

//화살표 함수

console.log(a);
let a = (a, b) => {
    return a + b;
}

console.log(a(1, 1));
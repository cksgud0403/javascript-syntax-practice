//런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화 되지 않았다.
console.log(foo);//초기화 이전의 일시적 시각지대에서는 변수를 참조할 수 없다.

let foo; //변수 선언문에서 초기화 단계가 실행이 된다.
console.log(foo) //undefined

foo = 1; //할당문에서 할당 단계가 실행된다.

console.log(foo); // 1
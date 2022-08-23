const str = "Hello"
const message = '^^ ' + str
[0] + [1]
console.log(message)


// 변수 선언과 할당
const val_boolean = true
const val_null = null
let val_undefined_1 // undefined
const val_undefined_2 = undefined
const val_number_1 = 1
const val_number_2 = 1.1
const val_bigint = 1n
const val_string='abc'

console.log(typeof val_boolean ) // 이렇게 해도 되고
console.log(typeof(val_null)) // 함수처럼 불러도 된다.
console.log(typeof val_undefined_1)
console.log(typeof val_undefined_2)
console.log(typeof val_number_1)
console.log(typeof val_number_2)
console.log(typeof val_bigint)
console.log(typeof val_string)


// Symbol
const symbol1 = Symbol('a')
const symbol2 = Symbol('a')
const symbol3 = Symbol() // description은 선택사항

console.log(symbol1.description)
console.log(symbol1.toString())
console.log(symbol1===symbol2) // false


// 전역 Symbol
const symbolA = Symbol.for('A') // 없으니까 새로 생성
const symbolA2 = Symbol.for('A') // 생성해둔 심볼 반환
console.log(symbolA===symbolA2)
console.log(Symbol.keyFor(symbolA)) // A


// String Template Literals
// - 문자열을 정의할 때 ``(백틱)를 사용하면 표현식을 문장 사이에 삽입할 수 있다.
// - 표현식은 ${expression} 과 같이 표현한다.
// 1)
let i = 0;
const str3 = `value is ${i}`;
console.log(str3);
// 2)
let j = 0;
const str4 = `value is ${j+5}`;
console.log(str4);
// 3)
// 줄바꿈이 적용된다.
const str5 = `Hello, Everyone`;
console.log(str5);


// 기본 연산자 - 비교 연산자 (true/false를 반환)
// 주의할 점
console.log( 1 =='1' )           // true
console.log( 0 == false )        // true
console.log( '' == false )       // true
console.log( undefined == 0 )    // false
console.log( null == 0 )         // false
console.log( undefined == null ) // true. 특별한 케이스


// switch
// - 괄호에 계산식이 들어가도 된다.
// - 타입에 엄격하다.
const date = 1;

switch(date) {
    case 0: console.log('REST'); break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: console.log('WORK'); break;
    case 6: console.log('REST'); break;
    default: console.log('UNKNOWN')
} // break를 만날 때 까지 계속 진행된다.


// 라벨
// 중첩된 반복문을 한번에 종료(break, continue) 해야 할 때
outer: // label
for(let i=0; i<3; i++){
    inner: // label
    for(let j=0; j<3; j++){
        if(i+j > 2)
            break outer;
        console.log(`${i} + ${j} = ${i+j}`);
    }
}
// 라벨 이름은 예약어를 피해 만든다.

// continue는 반복문에서만 라벨을 사용할 수 있다.
// break는 코드블록에 라벨을 사용할 수 있다.
myBlock: {
    let i=0;
    console.log(i);
    if(i==0) break myBlock;
    console.log('Dead code...');
}


// 함수 선언
// Hoisting
// var, function 키워드로 선언된 변수와 함수의 '선언'을 스코프의 제일 앞으로 끌어 올리는 동작. 변수의 할당은 하지 않는다. (undefined 처리)
console.log(cat)
var cat='cat'
var cat='new cat'
console.log(cat)

console.log(hello())
function hello(){
    return 'Hello'
}


// 함수 표현식
// 함수 표현식(Expression) : Hoisting 되지 않는다.
// const/let 변수이름 = function [이름] (매개변수, ...) {statements}
const hello = function sayHello(name){
    console.log('Hello'+name)
}

const bye = function (name){
    console.loy('Bye '+name)
}

// sayHello(); // 표현식에서의 이름으로는 호출할 수 없다.
hello('user');
bye('user');

// 람다식으로 정의
// const/let 변수이름 = (매개변수, ...) => {statements}
const hello = (name) => {
    console.log('Hello ' + name)
}
hello('user');

// 한 번만 사용하는 함수 선언이 가능하다.
(function(){
    console.log('one time')
}) ();

// 람다식
(()=> {
    console.log('one time')
}) ();


// 객체를 생성하는 방법 - 1
// - 객게의 속성을 사용할 때 최종 생성된 속성 이름이
// 식별자 기준을 만족하면 객체.이름
// 아니면 (심볼이나 '' 등) 객체[이름]
const value='value'
const symbol = Symbol('A')

const myObject = {
    id:1,
    _desc_:'my object',
    value, // value:value
    '?':'?',
    [symbol]:'abc',
    [value + (()=>1)()]:1 // 동적 이름
}

console.log(myObject.id)
console.log(myObject._desc_)
console.log(myObject.value)
console.log(myObject['?'])
// console.log(myObject.'?') // error
console.log(myObject[symbol])
// console.log(myObject.symbol) // undefined
console.log(myObject.value1)

// 객체를 생성하는 방법 - 2
// Javascripte에서 함수는 하나의 객체. 함수와 new 연산자를 이용해 객체 생성.
// new 연산자와 함께 호출할 경우
// Student.protype을 상속받은 객체가 생성되고
// 만들어진 객체를 this로 사용하여 아래 함수가 호출된다.
function Student(sid, sname){
    this.studentId=sid;
    this.studentName=sname;
}

const student1 = new Student(1, 'std1');
const student2 = new Student(2, 'std2');

console.log(student1);
console.log(student2);

// 객체를 생성하는 방법 - 3



// 객체의 속성 - 데이터 속성
// 생성 이후 만들어진 객체에 속성을 추가하거나 삭제 하는 것이 가능
let obj={
    id:1
}
console.log(obj)

obj.value='value'
console.log(obj)

delete obj.value
console.log(obj)


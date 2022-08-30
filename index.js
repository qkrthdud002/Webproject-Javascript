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



// 함수 - 객체로 사용하기
// 함수의 매개 변수 또는 반환값이 될 수 있다.
function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2){
    return n1-n2;
}

function executor(f, a, b) {
    return f(a, b)
}

const result = executor(add, 1, 1)
console.log(result)


function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2){
    return n1-n2;
}

function executor(type){
    if(type=='add')
        return add;
    else
        return sub;
}

const f = executor('add')
console.log(f(1, 1))


// 변수에 저장하거나 내부 객체로 선언하기
function outer() {
    function inner() {
        console.log('inner')
    }

    console.log('outer')
    inner();
    inner();
}
outer();

function outer() {
    const inner = function () {
        console.log('inner')    
    }
    console.log('outer')
    inner();
    inner();
}
outer();


// Generator : return 이 아닌 yield를 하며 함수의 실행을 종료하지 않고 값을 외부로 전달. iterator이 가능하게 해준다.
// function* 선언으로 Generator 객체를 생성할 수 있다.
function* gen() {
    yield 0;
    yield 1;
    yield 2;
}

const g = gen()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next()) // done : false
console.log(g.next()) // done : true


// 원시타입
// 원시타입 변수는 함수의 local 변수로 복사본이 제공된다.
// 함수 안에서 값을 수정해도 원본에는 영향이 없다. 
function op(number) {
    number += 1
    console.log(number) // 11
}
let number = 10
op(number)
console.log(number) // 10

function op(value){
    value += '!!'
    console.log(value) // user!!
}
let value = 'user'
op(value)
console.log(value) // user


// 가변 매개변수
// 개수가 정해지지 않은 매개변수. Array로 전달된다.
function test(...params) {
     console.log(params.length)
     if(params.length>0)
        console.log(params[0])
}
test(0)
test(1)
test(1, 2, 3)

// 객체타입
// 객체타입 변수는 함수의 참조 (reference)가 전달된다.
// 함수 안에서 값을 수정하면 객체의 속성이 변경된다.
function op(ob) {
    obj.prop='prop' // and property
    console.log(obj)
}
let obj = {
    id:1
}
console.log(obj)
op(obj)
console.log(obj) // property prop added

function op(array) {
    array.push(4);
    console.log(array) // 1, 2, 3, 4
}
let array = [1, 2, 3]
console.log(array)
op(array)
console.log(array) // item added


// 구조 분해 할당 (Restructuring assignment)
// 객체
function getInfo() {
    return {
        name:'ABC',
        price:1000
    };
}
let{name, price} = getInfo();
console.log(name, price);

// 함수 파라미터
const user={
    id:123,
    name:'user',
    address:'korea'
};
function printId({id}){
    console.log(id);
}
printId(user);

// Collections
// Array, Set, Map

// map : 배열의 각 항목을 이용해 새로운 배열을 만든다.
const arr=[1, 2, 3];
const arr2 = arr.map((item)=>{return `${item}th`});
console.log(arr2);

// filter : 배열의 각 항목 중 true를 반환한 아이템만을 가지는 새로운 배열을 만든다.
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = arr.filter((i)=>{
    if(i % 2 ==0)
        return true;
    else
        return false
});
console.log(arr2);

// find : 최초로 true를 리턴한 아이템을 반환하고 검색을 멈춘다.
const arr = [1, 2, 3, 4, 5, 6];
const value = arr.find((i)=>{
    if(i==3)
        return true;
    else return false;
});
console.log(value);

// findIndex : 최초로 true를 반환한 index를 반환하고 검색을 멈춘다.
const arr = [1, 2, 3, 4, 5, 6];
const value = arr.findIndex((i)=>{
    if(i==3) return true;
    else return false;
});
console.log(value);

// includes : 주어진 값을 포함하면 true, 아니면 false를 반환한다.
// forEach : 배열의 모든 항목을 iteration한다.
const arr=[1, 2, 3, 4, 5];

console.log(arr.includes(0));
arr.forEach((v, i)=>{
    console.log(`value:${v}, index:${i}`);
});

// pop : 가장 마지막 요소를 삭제하고 반환
// shift : 첫 요소를 삭제하고 반환
const arr=[1, 2, 3, 4, 5];

console.log(arr.pop());
console.log(arr.shift());
console.log(arr);


// Spread - Array, String 같이 iterable 한 데이터의 각 항목을 각각 나눈다.
const arr=[1, 2]

// 인자가 2개 필요한 함수.
function add(num1, num2) {
    return num1 + num2;
}

// Spread
const result=add(...arr);
console.log(result);


// Array (배열)의 복사
// Shallow copy : 객체의 참조만 복사. 사실상 하나의 객체
const arr = [1, 2, 3, 4];
const arr2 = arr; // 참조만 복사

console.log(arr2);

arr2.pop(); // arr2에 변화는 arr에 변화와 동일
console.log(arr);

// Deep copy : 같은 값을 가지는 새로운 Array를 생성
// - Array에 값만 있을 경우 slice()로 가능
// - Array의 항목으로 object가 있을 경우 별도의 함수를 구현해서 모두 복사해야 진짜 Deep copy로 동작
const arr = [1, 2, 3, 4];
const arr2 = arr.slice();

console.log(arr);
console.log(arr2);

arr2.pop();

console.log(arr);
console.log(arr2);


// Set(집합) : 중복을 허용하지 않는 데이터의 모음
const set = new Set([1, 2, 3]); // 배열로 초기화 가능
set.add(1); // 중복되는 값
set.add(4);
console.log(set);
const obj = {value:1}; // 객체도 넣을 수 있다.
set.add(obj);
console.log(set);

// Map : Key, Value의 쌍으로 가지는 순서를 가지는 데이터의 모음. / Key는 유일함
const map = new Map();

map.set('k1', 'v1');
map.set('k2', 2);
map.set('k3', 3.0);

console.log(map);

// Map과 Object의 차이 : Object가 아닌 Map을 써야할 때


// Iterator
// for in VS for of
// for in은 세부 항목을 string으로 변환한 뒤 iteration 한다.
// for of는 세부 항목을 iteration 한다.
console.log('for in');
for(let i in arr) {
    console.log(i+0);
}
console.log('for of');
for(let i of arr){
    console.log(i+0);
}

const arr=[1, 3, 5, 7, 9]
// 전통적인 방법
console.log('traditional');
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log('for each');
arr.forEach((item)=>{
    console.log(item);
});

console.log('for of');
for(let i of arr) {
    console.log(i);
}



// Module(모듈)
// 내보내는 쪽


// 동기 - 비동기
// 동기 함수 : 함수를 호출하면 그 함수가 return 하기 전까지 다음 줄의 코드가 실행되지 않는다.
function sigma(start, end){
    let sum=0;
    for(let i=start; i<end; i++){
        sum+=i;
    }
    return sum;
}

const start=1;
const end = 10000;

// sigma 함수가 반환할 때까지 result의 할당은 이루어지지 않으며
const result = sigma(start, end);
// console.log 역시 실행되지 않는다.
console.log(result);

// 비동기 함수 : 함수를 호출하면 그 함수는 일단 바로 return 하고 실행 결과는 나중에 알려준다.
// Promise
// 방법 1
function test(value) {
    return new Promise((resolve, reject)=>{
        if(value>=0)
            resolve('ok');
        else
            reject('error');
    });
}
test(1)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

// 방법 2
function test(value){
    return new Promise((resolve, reject)=>{
        if(value>=0) resolve('ok');
        else reject('error');
    });
}
function test2(value){
    return new Promise((resolve, reject)=>{
        console.log('test2'+value);
        resolve('finished');
    });
}
function test3(value){
    console.log(value);
}
test(1)
.then(test2)
.then(test3)
.catch((error)=>{
    console.log(error);
})

// Async, await
// Promise는 코드 스타일이 일반 함수와 다른 점이 단점.
// 일반 함수와 비슷한 스타일로 비동기 함수를 실행할 수 있다.
function test(value){
    return new Promise((resolve, reject)=>{
        resolve('ok');
    });
}

async function runTest(){
    const result = await test(1);
    console.log(result);
}
renTest();

// 예외처리는 try, catch를 사용.
function test(value){
    return new Promise((resolve, reject)=>{
        if(value>=0)
            resolve('ok');
        else
            reject('ng');
    });
}
async function runTest() {
    try{
        const result = await test(-1);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
runTest();
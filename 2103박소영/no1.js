// 다음 코드를 Hoisting이 발생하지 않도록 수정하라.
// 정상적으로 수정한 경우 실행 시 에러가 발생해야 한다.
// 단, count 는 여러번 값을 할당할 수 있도록 하고, category 변수는 상수로 정의한다.


console.log(count);
console.log(category);

let count = 0;
const category = "Major";
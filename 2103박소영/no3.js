// 다음과 같은 함수를 '선언문'으로 정의한다.
// 이름: func1
// 파라미터: 정수 배열
// 반환: 파라미터로 넘어온 정수 배열의 수 중에서 양의 정수(>0)의 수 

// 이곳에 작성
const arr = [1, 2, 3, 4, 5];

function fun1(arr){
    return arr;
}
module.exports = {fun1}

// 다음 코드를 마지막에 두고 아래 코드는 수정하지 않는다.
// module.exports = { func1 }

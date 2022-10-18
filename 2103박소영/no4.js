// 다음과 같은 함수를 '표현식'으로 정의한다. '람다식'을 사용해도 된다.
// 이름: func2
// 파라미터: 정수 배열
// 반환: 정수 배열 내의 가장 큰 수와 가장 작은 수의 차이 값. 
// 예를 들어 3, 5 라면 2
// -5, 5 라면 10
// 가장 큰 수와 가장 작은 수가 같거나 빈 배열의 경우 0을 반환

// 이곳에 작성

function func2(value1, value2){
    if(value1 > value2)
        return value1 - value2;
    else if(value1 == value2 && null)
        return 0;
    else
        return value2 - value1;
}

console.log(func2);

module.exports = {func2}


// 다음 코드를 마지막에 두고 아래 코드는 수정하지 않는다.
// module.exports = { func2 }
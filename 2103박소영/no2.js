// 0 ~ 9 사이의 난수 생성 코드는 다음과 같다.
Math.floor(Math.random()*10);
// 위 코드를 참조하여 다음 기능을 구현한다.
// 6이상의 수가 생성될 때 까지 다음 동작을 반복한다.

// 1. 난수 생성
// 2. 생성된 난수를 출력
// 3. 6 미만이 수이면 "다시 생성합니다." 출력 후 1단계부터 실행, 6 이상이면 "종료합니다." 출력 후 종료

// 이곳에 작성
let num;
// num = Math.floor(Math.random()*10);

while(true) {
    num = Math.floor(Math.random()*10);
    console.log(num);
    if(num < 6)
        console.log('다시 생성합니다.');
    else if(num  >= 6)
        // break;
        console.log('종료합니다.'); 
        break
}

function check() {
    const elementUserid = document.getElementById('userid');
    const elementBirthday = document.getElementsByName('birthday');
    const elementPassword = document.getElementByName('password');
    const elementPassword2 = document.getElementByName('password2');
    if(elementUserid.value.length==0){
        alert('아이디를 입력하세요');
        return false;
    }
    if(elementBirthday.value.length==0 || elementBirthday.value.length!=6){
        alert('올바른 생년월일을 입력하세요');
        return false;
    }
    if(elementPassword.value.length<4){
        alert('비밀번호는 4글자 이상 입력하세요');
        return false;
    }
    if(elementPassword.value != elementPassword2.value){
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    }
    return true;
}
function check() {
    const mutual = document.getElementById('mutual');
    const name = document.getElementById('name');
    const companyNumber = document.getElementById('companyNumber');
    const representativeNumber = document.getElementById('representativeNumber');
    const id = document.getElementById('id');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const ck_infoQuery = 'input[name="person"]:checked';
    const ck_info = document.querySelector(ck_infoQuery);
    if(ck_info == null) {
        alert("개인 정보 동의여부를 체크해주세요.");
        return false;
    }

    const ck_methodQuery = 'input[name="input"]:checked';
    const ck_method = document.querySelector(ck_methodQuery);

    if(ck_method == null) {
        alert("처리 방법을 선택해주세요.");
        return false;
    }
    if(ck_method.value == "instant") {
        alert("즉시 등록");
        return true;
    }
    if(ck_method.value == "temporary") {
        alert("임시 저장");
        return true;
    }

    if(mutual.value.length == 0) {
        alert("상호명을 입력해 주세요.");
        return false;
    }

    if(name.value.length == 0) {
        alert("대표자명을 입력해 주세요.");
        return false;
    }

    if(companyNumber.value.length == 0) {
        alert("사업자 등록번호를 입력해 주세요.");
        return false;
    }

    if(representativeNumber.value.length == 0) {
        alert("대표전화를 입력해 주세요.");
        return false;
    }

    if(id.value.length == 0) {
        alert("거래처 id를 입력해 주세요.");
        return false;
    }

    if(password.value.length == 0) {
        alert("비밀번호를 입력해 주세요.");
        return false;
    }

    if(password2.value.length != password.value.length) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }
}
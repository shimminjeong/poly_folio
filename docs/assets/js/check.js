function bookCheck(event) {

    if (event.key == 'Enter' || event) {

        var title = document.querySelector('#bookchk').value;
        var button = document.querySelector('#bookcheckbtn');

        if (title) {
            alert(`${title} 책 제목 확인`)
            button.innerText = '확인완료';
            button.style.backgroundColor = 'green';
        }
        else {
            alert("아무것도 입력하지 않았습니다.")
        }
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
    }
}

function nameCheck(event) {

    if (event.key == 'Enter' || event) {

        var inputValue = document.querySelector('#namechk').value;
        var button = document.querySelector('#namecheckbtn');

        if (inputValue === null || inputValue.trim() === '') {
            alert('이름을 입력하세요!');
        } else {
            alert('이름 확인 완료')
            button.innerText = '확인완료';
            button.style.backgroundColor = 'green';
        }

    }
}

function birthCheck(event) {

    if (event.key == 'Enter' || event) {

        const date = new Date();
        const currentYear = date.getFullYear();// 상수

        var birthStr = document.querySelector('#birthchk').value;
        var button = document.querySelector('#birthcheckbtn');

        if (birthStr) {
            if (birthStr.length == 8) {
                birthYear = parseInt(birthStr.substring(0, 4));
                let age = currentYear - birthYear + 1;
                if (age >= 120) {
                    alert("생년월일 제대로 입력했는지 확인하세요")
                } else {
                    alert(`현재 ${age}세 입니다`)
                    button.innerText = '확인완료';
                    button.style.backgroundColor = 'green';
                }
            }
            else {
                alert("19981223 형식으로 작성해주세요");
            }
        } else {
            alert("아무것도 입력하지 않았습니다.")
        }
    }
}

function addressCheck(event) {

    if (event.key == 'Enter' || event) {

        var address = document.querySelector('#addresschk').value;
        var button = document.querySelector('#addresscheckbtn');

        if (address) {
            alert(`${address} 에 사시는군용`)
            button.innerText = '확인완료';
            button.style.backgroundColor = 'green';
        }
        else {
            alert("아무것도 입력하지 않았습니다.")
        }
    }
}

function phonenumberCheck(event) {

    if (event.key == 'Enter' || event) {

        var phonenumber = document.querySelector('#phonenumberchk').value;
        var button = document.querySelector('#phonecheckbtn');

        if (phonenumber) {
            if (phonenumber.length == 11) {
                alert(`${phonenumber} 전화번호 등록`)
                button.innerText = '확인완료';
                button.style.backgroundColor = 'green';
            } else {
                alert("01012345678 형식으로 작성해주세요")
            }
        }
        else {
            alert("아무것도 입력하지 않았습니다.");
        }
    }
}

function notcomplete(button) {
    alert("아직 미완성 기능입니다.");
}
fetch('./assets/json/checkout.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error("JSON 파일을 로드하는데 오류가 발생했습니다.");
        }
        console.log("json파일 로드 성공");
        return response.json();
    })
    .then(checkoutData => {
        function createTable() {
            const tableBody = document.getElementById("loanHistoryListChk");

            // 기존의 tbody 내용 제거
            while (tableBody.firstChild) {
                tableBody.firstChild.remove();
            }

            checkoutData.forEach((checkout) => {
                const row = document.createElement("tr");

                // 번호
                const number = document.createElement("td");
                number.textContent = checkout.number;
                row.appendChild(number);

                // 이름
                const name = document.createElement("td");
                name.textContent = checkout.name;
                row.appendChild(name);

                // 책 제목
                const title = document.createElement("td");
                title.textContent = checkout.title;
                row.appendChild(title);

                // 대여일자
                const checkoutdate = document.createElement("td");
                checkoutdate.textContent = checkout.checkoutdate;
                row.appendChild(checkoutdate);

                // 반납예정일자
                const expreturndate = document.createElement("td");
                expreturndate.textContent = checkout.expreturndate;
                row.appendChild(expreturndate);

                // 반납일자
                const returndate = document.createElement("td");
                returndate.textContent = checkout.returndate;
                row.appendChild(returndate);

                // 반납상태
                const returnstate = document.createElement("td");
                returnstate.textContent = checkout.returnstate;
                row.appendChild(returnstate);

                tableBody.appendChild(row);
            });
        }
        createTable(); // Call the function to populate the table with data
    })
    .catch(error => {
        console.log("json파일 로드 오류: " + error);
    });

fetch('./assets/json/book.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error("JSON 파일을 로드하는데 오류가 발생했습니다.");
        }
        console.log("json파일 로드 성공");
        return response.json();
    })
    .then(bookData => {
        function createTable() {
            const tableBody = document.getElementById("bookListChk");

            // 기존의 tbody 내용 제거
            while (tableBody.firstChild) {
                tableBody.firstChild.remove();
            }

            bookData.forEach((book) => {
                const row = document.createElement("tr");

                // 제목
                const title = document.createElement("td");
                title.textContent = book.title;
                row.appendChild(title);

                // 저자
                const author = document.createElement("td");
                author.textContent = book.author;
                row.appendChild(author);

                // 출판사
                const publisher = document.createElement("td");
                publisher.textContent = book.publisher;
                row.appendChild(publisher);

                // 대출가능상태
                const checkoutstatus = document.createElement("td");
                checkoutstatus.textContent = book.checkoutstatus;
                row.appendChild(checkoutstatus);

                tableBody.appendChild(row);
            });
        }
        createTable(); // Call the function to populate the table with data
    })
    .catch(error => {
        console.log("json파일 로드 오류: " + error);
    });


fetch('./assets/json/user.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error("JSON 파일을 로드하는데 오류가 발생했습니다.");
        }
        console.log("json파일 로드 성공");
        return response.json();
    })
    .then(userData => {
        function createTable() {
            const tableBody = document.getElementById("userListChk");

            while (tableBody.firstChild) {
                tableBody.firstChild.remove();
            }

            userData.forEach((user) => {
                const row = document.createElement("tr");

                // 이름
                const name = document.createElement("td");
                name.textContent = user.name;
                row.appendChild(name);

                // 생년월일
                const birth = document.createElement("td");
                birth.textContent = user.birth;
                row.appendChild(birth);

                // 주소
                const address = document.createElement("td");
                address.textContent = user.address;
                row.appendChild(address);

                // 전화번호
                const phonenumber = document.createElement("td");
                phonenumber.textContent = user.phonenumber;
                row.appendChild(phonenumber);

                tableBody.appendChild(row);
            });
        }
        createTable(); // Call the function to populate the table with data
    })
    .catch(error => {
        console.log("json파일 로드 오류: " + error);
    });
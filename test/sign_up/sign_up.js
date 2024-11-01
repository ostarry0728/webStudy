function onLoad(){
    const idPattern = /^[\w]{3,}$/; //[\w]는 영문자, 숫자, _만 입력 가능 {3,} 3글자이상가능
    const pwdPattern = /^[\w]{6,10}$/; //영문자와 숫자, _ 6~10
    const emailPattern =/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    const namePattern =/^[가-힣]{2,4}|[A-Z]{1}[a-zA-Z\x20]{1,19}$/; //한글 2~4글자,영문자 2-20 첫글자는대문자 공백가능
    const rrnumPattern = /^d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}$/;

    const inputID = document.querySelector("#id");
    const inputPWD1 = document.querySelector("#pwd");
    const inputPWD2 = document.querySelector("#pwd1");
    const inputEmail= document.querySelector("#email");
    const inputName = document.querySelector("#name");
    const inputRrnum = document.querySelector("#rrnum");

    inputID.addEventListener("blur",()=>validate(inputID, idPattern, "영문자, 숫자, _만 입력가능"));
    inputPWD1.addEventListener("blur",()=>validate(inputPWD1,pwdPattern, "영문자와 숫자, _ 6~10" ));
    inputPWD2.addEventListener("blur",()=>{
        validate(inputPWD2,pwdPattern, "영문자와 숫자, _ 6~10" );
        if(inputPWD1.value !== inputPWD2.value){
            inputPWD2.nextSibling.textContent ="패스워드가 일치하지 않음";
            inputPWD2.nextSibling.style.color ="red";
            inputPWD1.value="";
            inputPWD2.value="";
            inputPWD1.focus(); 
            return; 
        }
    });
    inputName.addEventListener("blur",()=>validate(inputName,namePattern, "한글 2~4글자,영문자 2-10 첫글자는대문자 공백가능" ));
    inputEmail.addEventListener("blur",()=>validate(inputEmail,emailPattern, "이메일형식 안맞음" ));
    inputRrnum.addEventListener("blur",()=>validate(inputRrnum,rrnumPattern, "주민등록번호 형식이 안맞음" ));
}

function validate(userInput, pattern, message ){
    if(userInput.value.match(pattern)){
        userInput.nextSibling.innerHTML = "성공";
        userInput.nextSibling.style.color ="blue";
       }else{
        userInput.nextSibling.innerHTML = message;
        userInput.nextSibling.style.color ="red";
        userInput.value = "";
        userInput.focus();
        return; 
       }
}
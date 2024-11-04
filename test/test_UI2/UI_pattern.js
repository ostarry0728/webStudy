function onLoad(){
const idPattern = /^[\w]{3,}$/;
const pwdPattern =/^[\w]{6,10}$/;
const emailPattern =/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;

//객체찾기
const inputID = document.querySelector("#id"); 
const inputPW1 = document.querySelector("#pwd1"); 
const inputPW2 = document.querySelector("#pwd2");
const inputEmail= document.querySelector("#email");
//이벤트리스너등록및 핸들러처리
inputID.addEventListener("blur",()=>validate(inputID, idPattern, " 영문자, 숫자, _만 입력 가능" ));
inputPW1.addEventListener("blur",()=>validate(inputPW1,pwdPattern, " 영문자와 숫자, _ 6~10" ));
inputPW2.addEventListener("blur",()=>{
    validate(inputPW2,pwdPattern, " 영문자와 숫자, _ 6~10" );
    if(inputPW1.value !== inputPW2.value){
        inputPW2.nextSibling.textContent =" 패스워드가 일치하지 않음";
        inputPW2.nextSibling.style.color ="red";
        inputPW1.value="";
        inputPW2.value="";
        inputPW1.focus(); 
        return; 
    }
});
    inputEmail.addEventListener("blur",()=>validate(inputEmail,emailPattern, " 이메일형식 안맞음" ));
//폼 이벤트등록및 핸들러처리
    myform.addEventListener("submit",(e)=>{
        e.preventDefault();  //서버에 전송하는 기본기능막는다.
        validate(inputID, idPattern, " 영문자, 숫자, _만 입력 가능" );
        validate(inputPW1,pwdPattern, " 영문자와 숫자, _ 6~10" );
        validate(inputPW2,pwdPattern, " 영문자와 숫자, _ 6~10" );
        if(inputPW1.value !== inputPW2.value){
            inputPW2.nextSibling.textContent =" 패스워드가 일치하지 않음";
            inputPW2.nextSibling.style.color ="red";
            inputPW1.value="";
            inputPW2.value="";
            inputPW1.focus(); 
            return; 
        }
        validate(inputName,namePattern, " 한글 2~4글자,영문자 2-10 첫글자는대문자 공백가능" );
        validate(inputNickname,nicknamePattern, " 공백없이 한글,영문,숫자,_만 입력 가능(4글자 이상)" );
        validate(inputEmail,emailPattern, " 이메일형식 안맞음" );
        alert("서버로 전송하겠습니다.");
        myform.submit();  
    });
    //핸들러처리기능    
    function validate(userInput, pattern, message ){
        if(userInput.value.match(pattern)){
            userInput.nextSibling.innerHTML = " 성공";
            userInput.nextSibling.style.color ="blue";
           }else{
            userInput.nextSibling.innerHTML = message;
            userInput.nextSibling.style.color ="red";
            userInput.value = "";
            userInput.focus();
            return; 
           }
    }
}
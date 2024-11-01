function onLoad(){
    //객체찾기
    const btnOpen = document.querySelector("#open");
    const btnClose = document.querySelector("#close");
    const idObj = document.querySelector("#userid");
    const pwdObj = document.querySelector("#pwd");

    //팝업윈도우 핸들변수
    let win = null;

    //이벤트리스너 등록, 핸들러 처리
    btnOpen.addEventListener("click",()=>{
      win = window.open("./ex8_2_formName.html", "_blank", "width=400, height=400, left=30, top=30");
      setTimeout(()=>{
         win.document.querySelector("#userid").value = idObj.value;
         win.document.querySelector("#pwd").value = pwdObj.value;
      },100);
    });
    btnClose.addEventListener("click",()=>{
      win.close();
    });
}
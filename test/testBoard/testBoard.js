function carousel() {
    //화면객체 가져옴
    let slideshow = document.querySelector(".slideshow");
    let slideshow_slides = document.querySelector(".slideshow_slides");
    let slidesArray = document.querySelectorAll(".slideshow_slides a");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let indicatorArray = document.querySelectorAll(".slideshow_indicator a");
    
    //현재사진위치(현재 이미지 인덱스), 인터벌아이디, 슬라이드갯수
    let currentIndex = 0;
    let timerID = null;
    let slideCount = slidesArray.length;

    //현재이미지를 한줄 정렬
    for(let i = 0; i < slideCount; i++){
        let newLeft = `${i * 100}%`;
        slidesArray[i].style.left = newLeft;
    }

    //화면전환함수
    function gotoslide(index){
        currentIndex = index;
        let newLeft = `${index* -100}%`;
        slideshow_slides.style.left = newLeft;
        
    
    //indicator 그 위치를 가르켜줌
    for(let i = 0; i < slideCount; i++){
        indicatorArray[i].classList.remove('active');
    }
    indicatorArray[index].classList.add('active');
    } //end of gottoslide
    
    gotoslide(1);
    
    //3초마다 gotoslide() 호출(index 값을 0~3 반복)
    function startTimer(){
        timerID = setInterval(()=>{
            let index = (currentIndex + 1) % slideCount;
            currentIndex = index;
            gotoslide(index);
        }, 3000);
    }
    startTimer();

    //이벤트 등록, 핸들러 기능
    slideshow_slides.addEventListener("mouseenter", (event)=>{
        clearInterval(timerID);
    });
    slideshow_slides.addEventListener("mouseleave", (event)=>{
        startTimer(timerID);
    });
    prev.addEventListener("mouseenter", (event)=>{
        clearInterval(timerID);
    });
    prev.addEventListener("mouseleave", (event)=>{
        startTimer(timerID);
    });
    next.addEventListener("mouseenter", (event)=>{
        clearInterval(timerID);
    });
    next.addEventListener("mouseleave", (event)=>{
        startTimer(timerID);
    });
    prev.addEventListener("click", (event)=>{
        event.preventDefault(); //앵커 태그가 가지고있는 페이지이동 기본 기능을 막음
        currentIndex = currentIndex - 1;
        if(currentIndex < 0){
            currentIndex = slideCount - 1;
        }
        gotoslide(currentIndex);
    });
    next.addEventListener("click", (event)=>{
        event.preventDefault(); //앵커 태그가 가지고있는 페이지이동 기본 기능을 막음
        currentIndex = currentIndex + 1;
        if(currentIndex > (slideCount -1)){
            currentIndex = 0;
        }
        gotoslide(currentIndex);
    });

    //indicator 클릭 시 해당 페이지로 이동
    for(let i = 0; i < slideCount; i++){
        indicatorArray[i].addEventListener("mouseenter",(event)=>{
            clearInterval(timerID);
        });
    }
    for(let i = 0; i < slideCount; i++){
        indicatorArray[i].addEventListener("mouseleave",(event)=>{
            startTimer(timerID);
        });
    }
    for(let i = 0; i < slideCount; i++){
        indicatorArray[i].addEventListener("click",(event)=>{
            event.preventDefault();
            gotoslide(i);
        });
    }
    
} //end of carousel
'use strict';

//if문
//조건이 하나일 경우, (한 개인 조건이 false일 경우) 한번도 실행되지 않을 수 있다. 

{
let num1=9;

if(num1>10){
    console.log(`10보다 큽니다.`)
}

if(num1>10)console.log(`10보다 큽니다.`)

//button.btn을 클릭하면 
//userId 글자  수가 5글자 미만이면 
//"5글자 이상을 입력하세요" 표시 하도록 

//button 클래스 btn을 선택
const btn=document.querySelector(`button.btn`);
const userId=document.querySelector(`#userId`);

//button.btn을 클릭하면 
btn.addEventListener(`click`,()=>{



    if(userId.value.length<5){
    console.log(`5글자 이상을 입력하세요`)
    }



    console.log(`글자수 ->${userId.value.length}`)


});

const btn2=document.querySelector(`button.btn2`);

let i=0;




//btn2 를 클릭하면 span.num안의 숫자를 1씩 증가 

btn2.addEventListener(`click`,()=>{

    //만약에 spanNum이 5이상이면 
    //팝업창을 띄우고 alert "5이상 입니다."
    //if 문 이용해서 

    if(i >= 5){
        alert("5이상입니다.");
        return false; // 함수가 종료
    }
    
    //증감 연산자 => ++ , -- 
    console.log(`i => ${++i}`)
    // i++;
    // console.log(`i => ${i}`)

    //i의 값을 span.num에 i값을 추가 

    
});

}

//조건이 2개 일때 
//if ~ else 둘중에 하나를 판별한다. 

{

const userName="john";
const userPW="5555";

const loginBtn=document.querySelector(`#loginBtn`)
loginBtn.addEventListener(`click`,()=>{
 
    //만약에 userName, userPw 동시에 true면 
    //팝업창에 `login succeded`
    //false면 
    //팝업창에 `login failed`
    //if ~else ~ 사용 
    //&&, || (!)

    if(userName===`john` && userPW===`5555`){
        alert(`login succeded`)
    }else{
        alert(`login failed`)

    }

 if(userName!=='john' || userPW!=='5555'){
    alert(`login failed`)
 }else{
    alert(`login succeded`)
 }
});


//홀짝 = 2로 나눠서 나머지가 0이면 짝수 
//홀짝 = 2로 나눠서 나머지가 1이면 홀수 
//if~else 활용해서 num2가 홀수인지 짝수인지 콘솔에 출력

let num2 = prompt(`숫자(양수)를 입력해보세요`);

console.log(typeof num2)
if(num2 % 2 === 0){
    console.log(`짝수`)
}else{
    console.log(`홀수`)
}

}

console.clear();
//조건문 2개 이상 
{

    const btn3 = document.querySelector(`button.btn3`);
    //btn3를 클릭하면 국어 , 영어, 수학 점수의 평균을 구하고 
    //평균을 이용해서 학점을 계산하는 프로그램을 만들어 봐요 

    btn3.addEventListener(`click`,() =>{
const kor = parseInt(prompt(`국어점수 입력(정수)`));//국어 점수 
const eng= parseInt(prompt(`영어 점수 입력(정수)`));//english score
const math = parseInt(prompt(`수학점수 입력(정수)`));//math score
console.log(`국어 점수->${kor}`)
console.log(`영어 점수->${eng}`)
console.log(`수학 점수->${math}`)

//average
const avg= (kor+eng+math)/3
console.log(`평균 점수->${avg}`)

//avg가 95이상이면  A+
//avg가 90이상이면  A
//avg가 80이상이면  B
//avg가 70이상이면  C
//avg가 60이상이면  D
//avg가 60미만이면  F

if(avg >= 90){
    if(avg>=95){
        console.log(`A+`)
}else{
    console.log(`A`)
}
}else if(avg >= 80){
    if(avg>=85){
        console.log(`B+`)
 }else{
    console.log(`B`)}
}else if(avg >= 70){
    if(avg>=75){
        console.log(`C+`)
 }else{
    console.log(`C`)}
}else if(avg >= 60){
    if(avg>=65){
        console.log(`D+`)
 }else{
    console.log(`D`)}
}else{
    console.log(`F`)
}
})
}

console.clear();


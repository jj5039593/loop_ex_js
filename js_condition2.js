'use strict';
{
// //조건1 -> 조건이 true일 때만 실행

// let num1=10;

// if(num1>10){
//     console.log(`10보다 크다`)
// }


// if(num1<=10){
//     console.log(`10보다 작거나 같다`)
// }

// //조건이 2개일 때 if ~ else ~

// let num2=10;

// if(num2>10){
//     console.log(`10보다 크다`)
// }else{
//     console.log(`10보다 작거나 같다`)
// }

// // select theme 선택하면
// const selectTheme = document.querySelector(`select#theme`);
// const ex1 = document.querySelector(`.ex1`);

// ex1.style.width=`500px`;
// ex1.style.border=`1px solid #000`
// ex1.style.padding =`10px`

// function update(bgColor, textColor){
//     ex1.style.backgroundColor = bgColor;
//     ex1.style.color = textColor;
// }

// selectTheme.addEventListener(`change`,()=>{
//     //조건식                              //true                   // false
//     // (selectTheme.value === `black`) ? update(`black`, `white`) : update(`white`, `black`);
    
//     if(selectTheme.value === `black`){
//         update(`black`, `white`)
//     }else{
//         update(`white`, `blakc`)
//     }
    
//     console.log(`selectTheme.value ->${selectTheme.value}`)
// });


//다중 if 문 if ~ else if ~ else 

let num3=85

if(num3>=90){
    console.log(`A`)
}else if(num3>=80) {
    console.log(`B`)
}else if(num3>=70){
    console.log(`C`)
}else{
    console.log(`F`)
}

}

console. clear  ()

// switch ~ case 

const keyVal=`four`;

switch(keyVal){
    case `one`://keyVal이 one이면 
    console.log(`one`);// case 가 true이면 실행
    break;

    case `two`: //keyVal이 two면
    console.log(`two`);// case 가 true이면 실행
    break;


    case `three`:
    console.log(`three`);
    break;

    default://case의 값이 없으면 실행되는 문
    console.log(`해당하는 값이 없습니다.`)

}

//switch문을 if문으로 바꾸기 

if(keyVal == `one`){
    console.log(`one`);
}else if(keyVal == `two`){
    console.log(`two`);
}else if(keyVal == `three`){
    console.log(`three`);
}else{
    console.log(`해당하는 값이 없습니다.`);
}
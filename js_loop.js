'use strict';

//for문
//1~10출력

const app = document.querySelector(`#app`);

app.style.display =`flex`
app.style.flexWrap = `wrap`
app.style.width=`100%`
app.style.maxwidth=`400px`
app.style.margin=`0 auto`
app.style.border=`1px solid #f00`



for(let i=0;i<10;i++){
    //조건식이  true일 때 실행됨
    // console.log(`i->${i+1}`)
    // console.log(`i->${i}`)

    // app.innerText=i;
    const txt = document.createTextNode(`${i}`);
    const imgTag =document.createElement(`img`);
    const srcAttr=document.createAttribute(`src`)
    const altAttr=document.createAttribute(`alt`)
    imgTag.style.width=`200px`
    imgTag.style.height=`100px`

    
    imgTag.setAttributeNode(srcAttr);
    imgTag.setAttribute(`src`,`${i}`);
    imgTag.setAttribute(`alt`,`${i}`);

    console.log(imgTag)
    // app.appendChild(txt);
    app.appendChild(imgTag);

}
//TODO 1. 자바스트립트에서 html에 접속 (document)
//TODO 2. html 문서에 있는 특정 태그 선택 (getElement00)
//TODO 3. 태그의 내용을 가져온다 (innerText)
//TODO 4. 그 내용에 원하는 데이터를 덮어쓰기한다.

//console.log(document.getElementById('hello'))

const asd=()=>{
    const count=document.getElementById('number').innerText;
    document.getElementById('number').innerText=Number(count)+1;
}

const asdasd=()=>{
    const count = document.getElementById('num');
    count.innerText=String(Math.floor(Math.random()*1000000)).padStart(6,"0") 
}

//const asdasdasd=()=>{
    // const count=document.getElementById('num');
    //const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    //document.getElementById('num').innerText= token}

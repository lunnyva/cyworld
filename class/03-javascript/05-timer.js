const timer=()=>{
    let count=180;


    setInterval( ()=>{
        if(count>0){
            count=count-1;
            let min=count/60;
            let sec=count%60 ;      
            document.getElementById('number').innerText=Math.floor(min) +":"+ String(sec).padStart(2,"0")
        }
    }, 500) //ms 단위; 1000ms=1s

}

// setTimeout=>몇초 뒤에 우리가 만든 기능 실행
// setInterval=>몇초 마다 우리가 만든 기능 실행

const timer2=()=>{

    const asd=document.getElementById('num').innerText;
    const token=String(Math.floor(Math.random(6)*1000000)).padStart(6,"0")
    document.getElementById('num').innerText=token
    
   
    let count=10;
    
    setInterval( ()=>{
        if(count>0){
            count=count-1;
            document.getElementById('time').innerText=count

            if(count === 0) {
                document.getElementById('btn').setAttribute('disabled', true)
            }
        }   
    
    }, 1000) //ms 단위; 1000ms=1s

    
}




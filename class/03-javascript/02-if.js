//f(x)=x+3;

function add(x,y) {
    console.log(x+3+y);
}

function hello(){
    alert("안녕하세요")
}


const name =(aaa)=>{
    if("철수"==="철수"){
        console.log("같음");
    } else {
        console.log("다름");
    } 
};

const child=(age)=>{
    if(age<13) {
      console.log('어린이');
    } else{
      console.log('청소년');
    }
}

child(10);

const profile ={
    name:"철수",
    age:12,
    school:"다람쥐초등학교"
}

const age=(a)=>{
    if(typeof a==="number"){
        if(a>=20) {
          console.log('성인입니다');
        } else if(a>=8) {
          console.log('학생입니다');
        } else {
            console.log('어린이입니다');
        }  
    }
    else{
        console.log('잘못된 입력');
    }
}

age(profile.age);
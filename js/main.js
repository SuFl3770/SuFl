const number = Math.floor(Math.random() * 100);
var comments = ["어서오세요!","아마도 이 페이지는 3시간만에 만들었습니다.","여러분들은 컴공 오지마세요...","당신은 1% 확률을 뚫고 이 글을 읽으셨습니다!"];
var content = document.getElementById("comment");
console.log(number);


if(number <= 80){
    content.innerText = comments[0];
}
else if(number <= 90){
    content.innerText = comments[1];
}
else if(number <= 98){
    content.innerText = comments[2];
}
else{
    content.innerText = comments[3];
}
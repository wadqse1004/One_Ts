/**
 * 타입 추론
 */

//자동으로 타입 설정해줌
let a = 10;
let b = "string";

let c = {
    id: 1,
    name: "이름",
    profile: {
        nickname: "ts"
    },
    urls: ["https://naver.com"]
}

let {id, name, profile} = c;

let [one, two, three] = [1, "string", true];

//리턴값 기준으로 타입 정의
function func(message = "hello"){
    return "ts";
}

//매개변수는 기본값이 없을 경우 타입을 지정해줘야함
//function func(param){
//
//}

let d;       //아무것도 없으므로 any타입 (암묵적 any타입)
d = 10;      //숫자값을 넣어주면 number로 변경
d.toFixed(); //number타입으로 변경하여 number타입 함수 사용 가능

d = "string";//문자열을 넣으면 다시 string타입으로 변경
d.toString();//다시 string함수만 사용 가능

const num = 10;         //const는 타입변경이 불가능하므로 리터널 타입으로 표시
let arr = [1, "string"] //모든 배열의 타입을 고려해서 유니온 타입으로 표시
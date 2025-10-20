// object
let user: { //객체 리터럴 타입
    id?:number,  //? 추가시 있어도 되고 없어도 되는 표시 => 선택적 속성
    name:string
} = {
    id : 1,
    name : "박상준",
}

user.id; //object로 설정하면 에러

// 다른 언어   => 명목적 타입 시스템 (이름 기준)
// 타입스크립트 => 구조적 타입 시스템

user = {
    name: "홍길동",
}

let config : {
    readonly apiKey: string //readonly시 읽기 전용으로 변환
} = {
    apiKey: "My_Api_Key"
}
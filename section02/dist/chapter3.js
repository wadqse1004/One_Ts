// object
let user = {
    id: 1,
    name: "박상준",
};
user.id; //object로 설정하면 에러
// 다른 언어   => 명목적 타입 시스템 (이름 기준)
// 타입스크립트 => 구조적 타입 시스템
user = {
    name: "홍길동",
};
let config = {
    apiKey: "My_Api_Key"
};
export {};

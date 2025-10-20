//배열
let numArr = [1, 2, 3];
//문자열
let strArr = ["H", "E", "L"];
let boolArr = [true, false, true];
let boolArr2 = [false, true, false];
//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "Y", true];
//다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
//튜플
//길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "2", true];
//아래 오류가 안뜨니 신경써야함
tup1.push(1);
tup1.pop();
const users = [
    ["김상준", 1],
    ["이상준", 2],
    ["박상준", 3]
];
export {};

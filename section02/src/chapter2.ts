//배열
let numArr:number[] = [1,2,3];

//문자열
let strArr:string[] = ["H", "E", "L"];

let boolArr: Array<boolean> = [true, false, true];
let boolArr2:boolean[] = [false, true, false];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number | string | boolean)[] = [1, "Y", true];

//다차원 배열의 타입을 정의하는 방법
let doubleArr:number[][] = [
    [1,2,3],
    [4,5]
]

//튜플
//길이와 타입이 고정된 배열
let tup1:[number, number] = [1,2];

let tup2:[number, string, boolean] = [1, "2", true];

//아래 오류가 안뜨니 신경써야함
tup1.push(1);
tup1.pop();

const users : [string, number][] = [
    ["김상준", 1],
    ["이상준", 2],
    ["박상준", 3]
]
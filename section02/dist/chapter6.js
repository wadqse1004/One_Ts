//any
//특정 변수의 타입을 우리가 확실히 모를때
//런타임에서 오류가 발생하므로 검증을 하지 않는것과 같음
let anyVar = 10;
anyVar = "Hello";
anyVar = false;
anyVar = {};
anyVar = () => { };
anyVar.toUppeCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
//unknown
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
//num = unknownVar;  //불가능
if (typeof unknownVar === "number") { //타입 정제
    num = unknownVar;
}
export {};

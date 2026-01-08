/**
 * 함수 타입 정의
 */

//함수를 설명하는 가장 좋은 방법
//어떤 매개변수를 받고, 어떤 결과값을 반환하는지 말한다.
//어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는 말한다.
function func(a: number ,b: number): number{
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

//필수 매개변수가 앞에와야 정상 실행, 선택적 매개변수는 항상 뒤에 오도록 작성
function introduce(name = "이름", tall?: number){
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`);
    //console.log(`tall: ${tall + 10}`); --오류, undefined 일 수 있어서 오류
    if(typeof tall === "number")
    {
        console.log(`tall: ${tall + 10}`);
    }
}

introduce("타입스크립트");

function getSum(...rest: number[]){
    let sum = 0;
    rest.forEach((it) => (sum += it));
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
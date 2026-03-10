/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void; //호출 시그니처로 작성하면 오버로딩 가능
}

const person: Person = {
    name: "이름",
    // ?가 붙으면 없어도 에러 발생 X
    sayHi: function (){
        console.log("hi")
    }
}

//person.name = "홍길동"; // readonly 붙이면 수정 불가능
person.sayHi();
person.sayHi(1,2);
/**
 * 선언 합침
 */

interface Person{
    name: string;
}

//동일한 이름으로 생성해도 오류 발생하지 않음
interface Person{
    age: number;
}

const person: Person = {
    name: "",
    age: 10
}
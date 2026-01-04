/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁하는 방법을 말한다
 */


type Person = {
    name: string;
    age: number;
}

//value => number : toFixed
//value => string : toUpperCase
//value => Date : getTime
//value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person)
{
    value; //유니온 타입

    if(typeof value === "number")
    {
        console.log(value.toFixed()); //number타입
    }
    else if(typeof value === "string")
    {
        console.log(value.toUpperCase()); //string타입
    }
    else if(value instanceof Date)
    {
        console.log(value.getTime());
    }
    else if(value && "age" in value)
    {
        console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
}


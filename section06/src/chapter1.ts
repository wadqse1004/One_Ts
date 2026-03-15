/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "홍길동",
    age: 25,
    position: "developer",
    work(){
        console.log("개발함")
    }
}

class Employee{
    //필드
    name:string;
    age:number;
    position:string;

    //생성자
    constructor(name:string, age:number, position:string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //매서드
    work(){
        console.log("일함");
    }
}

class ExcutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name:string, age:number, position:string, officeNumber:number){
        super(name, age, position);
        this.officeNumber = officeNumber
    }
}

const employeeB = new Employee("박길동", 20, "개발자");

const employeeC : Employee = {
    name: "이길동",
    age: 0,
    position: "학생",
    work(){
        console.log("공부함")
    }
}
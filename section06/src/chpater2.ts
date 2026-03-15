/**
 * 접근제어자
 * access modifier
 * => public private protected
 * => private: 클래스 내부에서만 접근 가능, protected: 파생 클래스까지 가능
 */

class Employee{
    //필드
    protected name:string;
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

    func(){
        this.name;
    }
}

const employeeA = new Employee("홍길동", 25, "개발자");
//employeeA.name = "";

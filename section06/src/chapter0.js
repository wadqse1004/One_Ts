/**
 * 클래스
 */

let studentA = {
    name: "홍길동",
    grade: "A+",
    age: 27,
    study(){
        console.log("공부 잘함")
    },
    introduce() {
        console.log("안녕하세요.")
    }
};

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //메서드
    study(){
        console.log("공부 잘함");
    }

    introduce(){
        console.log(`안녕하세요 ${this.name}입니다.`)
    }
}

class StudentDeveloper extends Student{
    skill;

    constructor(name, grade, age, skill){
        super(name, grade, age);
        this.skill = skill;
    }

    programming(){
        console.log(`${this.skill}로 프로그래밍 함`)
    }
}

const studentDeveloper = new studentDeveloper("박길동", "B+", 25, "C#");
studentDeveloper.programming();

//클래스를 이용해서 만든 객체 -> 인스턴스
//student 인스턴스
let studentB = new Student("김길동", "A", 28);
studentB.study();
studentB.introduce();
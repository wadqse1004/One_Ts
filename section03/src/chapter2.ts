/**
 * Unknown 타입
 */

function UnknownExam(){
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar: unknown;

    //다운캐스팅 불가능 
    //let num: number = unknownVar;
    //let str: string = unknownVar;
    //let bool: boolean = unknownVar;
}

/**
 * Never 타입 (공집합)
 */

function neverExam(){
    function neverFunc() :never{
        while(true);
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    //공집합이라 값 부여X
    //let never1: never = 10;
    //let never2: never = "string";
    //let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam(){
    function voidFunc(): void{
        console.log("hello");
        return undefined;
    }

    let voidVar: void = undefined;
}

/**
 * Any 타입
 */

function anyExam(): any{
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    //다운캐스팅이지만 모두 무시
    anyVar = unknownVar;
    undefinedVar = anyVar;

    //never는 공집합이기 때문에 불가능
    //neverVar = anyVar;
}
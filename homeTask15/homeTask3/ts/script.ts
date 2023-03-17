"use strict";

//2

type MainFunctionArrayProp = string | number | { age: number, name: string };

type MainFunction = <T extends MainFunctionArrayProp>(
   arr: T[],
   callback: (arr: T[]) => string
) => string;

const mainFunction: MainFunction = (arr, callback) => {
   return callback(arr);
};

function upperFirstLetter(arr: string[]) {
   return arr.map((item) => item.replace(item[0], item[0].toUpperCase())).join(", ");
}

function multiplyTen(arr: number[]) {
   return arr.map((item) => item * 10).join(", ");
}

function dataBase(arr: { age: number; name: string }[]) {
   return arr.map((item) => item.name + " is " + item.age).join(", ");
}

function reverse(arr: string[]) {
   return arr.map((item) => item.split("").reverse().join("")).join(", ");
}

console.log(mainFunction(["my", "name", "is", "Vasya"], upperFirstLetter));
console.log(mainFunction([10, 20, 30], multiplyTen));
console.log(mainFunction([{ age: 45, name: "John" }, { age: 20, name: "Aaron" }], dataBase));
console.log(mainFunction(["abc", "123"], reverse));

//3.1
interface Rectangle {
   width: number,
   height: number,
}
function getSquare(rectangle: Rectangle) {
   return rectangle.width * rectangle.height
}

//3.2 
type Price = {
   price: number,
   discount: string,
   getPrice(): number,
   getPriceWithDiscount(): number
}

const price: Price = {
   price: 10,
   discount: "15%",
   getPrice: function () {
      return this.price;
   },
   getPriceWithDiscount: function () {
      return this.price - (this.price / 100 * parseInt(this.discount));
   }
}
//3.3 
type Numerator = {
   value: number,
   double(): number,
   plusOne(): number,
   minusOne(): number
}

const numerator: Numerator = {
   value: 1,
   double() {
      return this.value * 2;
   },
   plusOne() {
      return this.value + 1;
   },
   minusOne() {
      return this.value - 1;
   },
}

//3.4. 

type ElementType = {
   height: number;
   getHeight: () => number;
};

const element: ElementType = {
   height: 25,
   getHeight: function (): number {
      return this.height;
   }
};

const getElementHeight: ElementType = element;
getElementHeight.getHeight();

//4
type ConvertToObject = (num: number) => { value: number; isOdd: boolean };

const convertToObject: ConvertToObject = (num) => {
   const obj = {
      value: num,
      isOdd: Boolean(num % 2),
   };
   return obj;
}

//5.1 
function minus(x: number = 0) {
   return function (y: number = 0) {
      return x - y;
   }
}

//5.2 
function multiplyMaker(y: number) {
   function multiply(x: number) {
      return y *= x;
   }
   return multiply;
}
const multiply = multiplyMaker(2);

//5.3 
interface CreateStr {
   setStr(newStr: string | number | undefined): void;
   getStr(): string;
   getStrLength(): number;
   getStrReverse(): string;
}

const createStr = function (str: string): CreateStr {
   return {
      setStr(newStr: string | number | undefined): void {
         if (typeof newStr === "number") {
            str = "" + newStr;
         } else if (typeof newStr === "undefined") {
            str = "";
         } else {
            str = newStr;
         }
      },
      getStr(): string {
         return str;
      },
      getStrLength(): number {
         return str.length;
      },
      getStrReverse(): string {
         return str.split("").reverse().join("");
      },
   };
};

//5.4 

interface Calc {
   get(): Calc;
   set(x: number): Calc;
   add(x: number): Calc;
   subtract(x: number): Calc;
   multiply(x: number): Calc;
   divide(x: number): Calc;
   pow(x: number): Calc;
   modulus(x: number): Calc;
}

const calc: Calc = (() => {
   let num: number = 0;
   const a = {
      get() {
         console.log(num);
         return a;
      },
      set(x: number) {
         num = +x;
         return a;
      },
      add(x: number) {
         num += x;
         return a;
      },
      subtract(x: number) {
         num -= x;
         return a;
      },
      multiply(x: number) {
         num *= x;
         return a;
      },
      divide(x: number) {
         num /= x;
         return a;
      },
      pow(x: number) {
         Math.pow(num, x);
         return a;
      },
      modulus(x: number) {
         num % x;
         return a;
      }
   };

   return a;
})();


//6
function sum(a: number = 0) {
   return function (b: number = 0) {
      return function (c: number = 0) {
         return a + b + c;
      };
   };
}

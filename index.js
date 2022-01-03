// function bus (busStops) {
//     let people = 0

//     for(i = 0; i <= busStops.length; i++) {
//        let go = busStops[i]
//         for (i = 0; i <= go.length; i++) {
//             let gogo = go[0] 
//             people += gogo
//         }
//     }
//     console.log(people)
// }

// bus([[10,5],[5,3],[8,6]])



// const sequenceSum = (begin, end) => {
//     // BEGIN (write your solution here)
//     if (begin > end) {
//       return NaN
//     } else if (begin == 0 && end == 0 ){
//       return 0
//     } else if (begin == end) {
//       return begin || end 
//     } else if (begin <= end) {
//       return begin + sequenceSum(begin + 1, end)
//     }
//     // END
//   };

//   console.log(sequenceSum(1,5))



// const smallestDivisor = (num) => {
//     // BEGIN (write your solution here)
//     // if (num % num === 0) {
//     //     return num
//     // }
     
//     const iter = (counter, acc ) => {
//      if( counter === 1 ) {
//          return 1
//      }

//      if (counter % acc === 0) {
//          return acc
//      }  else {
//         return iter(counter , acc + 1)
//      }
//     }

//       return iter(num , 2)
//     }
//     // END
  




// console.log(smallestDivisor(359))



// const smallestDivisor = (num) => {
//     let counter = 2;

//     if (num === 1) {
//         return 1
//     }

//     if (num < 1 ) {
//         return NaN
//     }

//     while (num % counter !== 0) {
//         counter = counter + 1
//     }

//     return counter


// }



// console.log(smallestDivisor(1))



// const reverce = (str) => {
//     let newstr = '';
//     let i = 0;

//     while (i < str.length) {
//         newstr =  str[i] + newstr;
//         i++
//     }
//     return newstr

// }

// console.log(reverce('Hello world'))




// const isPrime = (num) => {

//     if (num < 0 ) {
//         num = Math.abs(num)
//     }

//     for (let index = 2; index <= num; index++) {

//         if (num === 1) {
//             return false
//         }

//         if (num === index ) {
//             return true
//         }

//         if (num % index === 0 ) {
//             return false
  

//     }

// }
// }

// console.log(isPrime(-3))



// const getTriangleArea = (h , f) => {
//     let s = (1/2) * h * f;
//     return s
//   }
  
//   console.log(getTriangleArea(5,10))


// const square = (a) => {
//     return a * a
//   }

// const sumOfSquares = (b,c) => {
//   return (square(b) + square(c))
// }

// console.log(square(5))
// console.log(square(10))
// console.log(sumOfSquares(5, 10))
// console.log(sumOfSquares(10, -9))


//  const length = (str) => str.length;
//  const toUpperCase = (str) => str.toUpperCase();


// const bigLettersCount = (str) => {
//   // BEGIN (write your solution here)
//   let counter = 0
//   for (i = 0; i <= str.length; i++) {
    
//     if (toUpperCase(srt[i]) === str[i]) {
//       counter +=1
//     }

//   }



//   toUpperCase(str) === str
//   let newstr = toUpperCase(str);
//   return newstr.length
//   // END
// };


// const compare = (first, second) => {
//   const firstCount = bigLettersCount(first);
//   const secondCount = bigLettersCount(second);

//   // BEGIN (write your solution here)

//   if( firstCount > secondCount) {
//     return 1
//   } else if (firstCount < secondCount) {
//     return -1
//   } else { return 0}

//   // END
// };

// const greaterThan = (first, second) => (
//   compare(first, second) === 1);

// const lessThan = (first, second) => (
//   compare(first, second) === -1);

// const isEqual = (first, second) => (
//   compare(first, second) === 0);

//  console.log(greaterThan('AD','ad sd'), lessThan('ghe df', 'dfwe r D'));



//   greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
// greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
// lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
// isEqual('liSp', 'lisP'); // true



// const foo = (num) => {
//   let sum = 0;
//   let str = String(num);

//   const baz = (val) => {

//   for (i = 0; i < val.length; i++) {
//     console.log(val[i])
//     sum += Number(val[i]) 
//     }
//   }

//   baz(str)
  
//   if (sum >= 10) {
//     let sum2 = sum;
//     let sum3 = String(sum2)
//     for (i = 0; i < sum3.length; i++) {
//       console.log(sum3[i])
//       sum2 += Number(sum3[i]) 
//       }
//       return sum2
//   }
  

// }


// console.log(foo(1259))



// const solution = (str) => {


//   let strstr = str.split(' ');

//       for (let index = 0; index < strstr.length; index++) {
        
//         (strstr[index])[0].toUpperCase()
        
//       }

//   console.log(toUpperCase(strstr))




//   }




// solution('hello world')



// function bind (person, logPerson) {
  

// }


// console.log(0 || "" || 2 || undefined || true || falsе)

// function F() { return F; }

// alert( new F() instanceof F );
// alert( new F() instanceof Function );


// console.log(2 && 1 && null && 0 && undefined)






// let user = {
//     name: "John",
//     age: 30
// }


// user.foo = 'hey man';

// user.baz = 'lala';

// for (let code in user) {
//     console.log(code)
// }

// delete user.foo

// for (key in user ) {

//     console.log(key)
// }


// console.log(user["name"])



// let schedule = {};



// function isEmpty (obj) {
//     for(key in obj) {
//         if (key === undefined) {
//             return true
//         } else { return false}
//     }

// }

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }


//   function su() {
//     let sum = 0;

        
//       for( key in salaries) {
//         if (key === undefined) {
//             return 0
//         }

//         sum += salaries[key]
//       }
//       return sum
//   }

//   console.log(su())


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//       for (let key in obj ) {
//           if (typeof obj[key] == 'number') {
//             obj[key] *= 2;}
          
//       }
//   }

//   multiplyNumeric(menu);


//   console.log(menu);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr3 = arr1.concat(arr2);
// console.log(arr3)


// arr1.reverse();
// console.log(arr1)

// arr1.push(4,5,6);
// console.log(arr1)

// arr1.unshift(4,5,6)
// console.log(arr1)


// let arr1 = ['js', 'css', 'jq'];
// console.log(arr1.shift());
// console.log(arr1.pop());
// console.log(arr1)


// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = arr1.slice(0,3)
// console.log(arr2)

// let arr3 = arr1.slice(3);
// console.log(arr3)


// let arr2 = arr1.splice(1,2);
// console.log(arr1);


// let arr2 = arr1.splice(1,3)
// console.log(arr2)

// let arr2 = arr1.splice(3,1,'a','b','c');
// console.log(arr1)

// arr1.splice(1,0,'a','b');
// // console.log(arr1)
// arr1.splice(6,0,'c');
// // console.log(arr1)
// arr1.splice(8,0,'e');
// console.log(arr1)


// let arr1 = [3, 4, 1, 2, 7];
// let arr2 = [8,9,90];

// // arr1.sort()
// // console.log(arr1)

// let arr2 =  arr1.map(function (num,index){
//     return num * 2, index *2
// })

// console.log(arr2)
//  let arr = [ 1, 2, 3, 4, 5 ];
//     let newar = []
//  let arr2 = arr.reduce(function (acc, current) {
//     newar.push(acc)
//     return acc += current
//  })

//  console.log(newar)


//  console.log(a);

//  var a = 0


// function Sum (name, age, ) {
//     this.name = name;
//     this.age = age;
//     this.isMetod = function isMetod() {
//         console.log(`имя ${this.name}, возраст ${this.age} `)
//     }
//     }



  

// let ivan = new Sum ('Vano', 32);

// ivan.isMetod()

// function Calculator () {
//     this.read = function read() {
//         this.first = +prompt('введите значение','someone');
//         this.second = +prompt('введите значение','sometwo');
//     }

//     this.sum = function sum () {
//         let summ = this.first + this.second;
//         return summ
//     }

//     this.mul = function mul () {
//         let mul = this.first * this.second;
//         return mul
//     }
// }

// let calculator = new Calculator();

// calculator.read()
// console.log(calculator)

// console.log(calculator.sum())
// console.log(calculator.mul())
// console.log(calculator.first)


// function Accumulator (value) {
//     this.value = value
//     this.read = function () {
//         this.value = this.value + (+prompt('введите значение', 3))
//     }
// }

// let acc = new Accumulator (1);

// acc.read()
// acc.read()
// acc.read()

// console.log(acc)


// function sum(a) {

//     return function (b) {

//         return a + b
        
//     }
    
// }


// console.log(sum(5)(-1))




// let obj = ['bbbbb', 'banana', 'halolo'];

// console.log(Object.values(obj))


// let promise = new Promise(function (resolve, reject) {

//     setTimeout(() => {
//         let i = 'hello world'       

//         resolve(i)
//     }, 1000);

//     setTimeout(() => {
        
//         reject('not work')
//     }, 2000);
// })

// promise.then(
//     (message) => console.log(message),
//     error => console.log(error),
// )



// function useFetch (sec) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let hey = 35000;

//             resolve(hey)

//         }, sec);
//     })
// }



// useFetch(4)
//     .then((value) => console.log(value))


   // let y = fetch("https://reqres.in/api/users/2");
   //  y.then((res) => {console.log(res); return res})
   //    .then((res) => res.json())
   //    .then((data) => {let i = data; return i})
   //    .then((i) => {
   //        let y = i.data; console.log(y);
   //        return y
   //    })
   //    .then((y) => {
   //        let mas = Object.values(y);
   //        let img = mas[4];
   //        let foto = document.createElement('img');
   //        console.log(typeof foto)
   //        foto.src = img;
   //        foto.classList = 'foto-user';
   //        document.body.append(foto)
   //
   //        setTimeout(() => {
   //            foto.remove()
   //        }, 3000);
   //    })
   //
   //  var x23 = 0;

//
// function testIf(a, b) {
//     var x;
//     if (a < b) {
//         x = a + b;
//         return x
//     } else {
//         x = a * b
//     }
//     return x;
// }
//
// console.log(testIf(4, 3))


/*function testIf(a, b) {
    var x;
    if (a > b) {
        x = a + b;
        return x
    } else if (a <b) {
        x = a - b
    } else {
        x = (a * b)*2
    }
    return x;
}

console.log(testIf(2, 2))
console.log(testIf(1, 5))
console.log(testIf(6, 3))*/

/*function testCase(a) {
    var x="";
    switch (a) {
        case (1) :
            x = "One";
            break;
        case (2) :
            x = 'Two';
            break
        case (3) :
            x = 'Three';
            break
        case (4) :
            x = 'Four';
            break
        case (5) :
            x = 'Five';
            break
        case (6) :
            x = 'Six';
            break
        case (7) :
            x = 'Seven';
            break
        case (8) :
            x = 'Eight';
            break
        case (9) :
            x = 'Nine';
            break
        case (0) :
            x = 'Zero';
            break
    }
    return x;
}

console.log(testCase(0))*/



let id = Symbol("hey");

/*
let obj = {
    foo: 'foooo',
    baz: 'bazzzzz'
};

obj[id] = 'new Symbol';

console.log(obj)

for ( let value in obj) {
    console.log(value);
    console.log(obj[value]);
}


let obj2 = Object.create(obj);

console.log(obj2.foo)

let arr = Object.entries(obj)
console.log(arr)

console.log(arr[0][1])*/

//
// function f() {
// console.log(arguments)
//  console.log(typeof arguments)
//     console.log(typeof [])
// }
//
// f('a', 'b');


    
/*let obj = {
    a: 42,
    b: 'hello'
}*/

/*function foo () {
    console.log(this.a)
    console.log(this.b)
}

foo.call(obj)

function bazz(color, sec) {
    console.log(this)
    console.log(arguments)
}

bazz.call(obj, 'red');

bazz.apply(obj, ['hello','bye'])*/

/*function foo (param1, param2) {
    console.log(this.a)
    console.log(this.b)
    console.log(param1)
    console.log(param2)

}

foo.call(obj,'hey')*/


/*let y = document.querySelector('button');
console.log(y);

y.addEventListener('click', item => {
    console.log(item.target)
})

async function yyy () {
console.log('it is promise')
}

console.log(yyy)

/!*setTimeout(()=> {yyy()},6000)*!/


yyy()*/


/*let array = [1,2,3,4,5,6,7,8,9,10];
    let newarray = []

let three = array.map((index, item) => {
    // console.log(item)
 if ((item - 1) % 3 === 0 && item > 0) {
     console.log(index)
     newarray.push(array[(index)])
     console.log(newarray)
 }
})

console.log(newarray)*/


/*
function f() {
let n = 0;
    return function hey() {
       ++n
        console.log(n)
        return n
    }


}

let counter = f();

counter();
counter();
counter();
counter();
*/

/*
let obj = {
    a : 1,
    b : 2
}

const {a,b} = obj;

console.log(a)

let i = Object.entries(obj);

console.log(i[0][0])


let obj1 = {
    c: 3,
    d: 4
}

Object.assign(obj,obj1);


console.log(obj)*/


let arr = [1,2,55,43,78]

let arr2 = [44,66,71,25]

arr.splice(1,3, arr2)

console.log(arr);



console.log('add to github')









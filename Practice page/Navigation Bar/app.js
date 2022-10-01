// /*const name1 = new String('Jeff');

// console.log(name1);
// name1.foo = 'asdf';

// console.log(name1);
// console.log(name1[0]);
// console.log(name1[1]);
// console.log(name1[2]);
// console.log(name1[3]);
// console.log(name1.foo);
// console.log(name1.foo[0]);
// console.log(name1.foo[1]);


// //const num = new Number(11);

// //num.aa = 67;

// const num1 = function(x , y){
//     return x+y;
// }

// const num = new Function('x' , 'y' , 'z' , 'return x+y+z');

// console.log(num(1 , 4, 5));
// console.log(num1(1 , 3));
// */
// /*

// function person(fn, ln)
// {
//     this.fna = fn;
//     this.lna = ln;

//     this.gna = function(){
//         return `${this.fna}`;
//     }
// }

// person.prototype.gnm = function(){
//     return `${lna}`
// }

// ash = new person("p" , 'o');

// //console.log(ash)
// //console.log(ash.hasOwnProperty('gna'))
// //console.log(ash.hasOwnProperty("gnm"))

// function cust(fn , ln , date)
// {
//     person.call(this , ln, fn);

//     this.d = date;
// }

// qe = new cust("a" , "b" , "c");

// console.log(qe);
// console.log(qe.fna);
// console.log(qe.lna);
// console.log(qe.d);
// console.log(qe.gna());
// */

// class Person {

//    // let fn,ln;

//     constructor(f , l)
//     {
//         this.fn = f;
//         this.ln = l;
//     }

//     gn()
//     {
//         return `${this.fn} ${this.ln}`;
//     }

//     cn(nn)
//     {
//         this.ln = nn;
//     }
// }

// let ash = new Person("a" , "b");
// console.log(ash);
// console.log(ash.gn());
// console.log(ash.cn("c"));
// console.log(ash.gn());

console.log(1);

setTimeout(test, 2000);

function test() {

    xhr = new XMLHttpRequest();

    xhr.open('GET', 'abc.txt', true);

    xhr.onload = function () {
        if (this.status === 200)
            console.log(xhr.responseText);
    }

    xhr.send();
}
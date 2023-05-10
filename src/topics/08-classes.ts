//import { Person } from './08-classes';

export class Person {
    // public name: string;
    // private address: string;

    // constructor(name: string, address: string){
    //     this.name = name;
    //     this.address = address;
    // }

    constructor (
        public firstName: string,
        public lastName: string, 
        private address: string = 'No Address'
        ){

        }
}

// export class Hero extends Person {

//         constructor (
//             public alterEgo: string,
//             public age: number,
//             public realName: string,
//         ) {
//             super(realName, 'Lisboa');
//         }
// }

// export class Hero {

//     public person: Person;

//     constructor (
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         this.person = new Person (realName);
//     }
// }

export class Hero {
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person (realName);
    }
}

const tony = new Person('Tony', 'Stark', 'Curitiba');

const iromen = new Hero ('Iromen', 45, 'Tony', tony);


// const iromen = new Person('Iromen','Brasilia');

console.log(iromen);
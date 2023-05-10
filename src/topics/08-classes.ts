



export class Person {
    // public name: string;
    // private address: string;

    // constructor(name: string, address: string){
    //     this.name = name;
    //     this.address = address;
    // }

    constructor (
        public name: string, 
        private address: string = 'No Address'
        ){}
}

export class Hero extends Person {

        constructor (
            public alterEgo: string,
            public age: number,
            public realName: string,
        ) {
            super(realName, 'Lisboa');
        }
}

const iromen = new Hero ('Iromen', 45, 'Tony Stark');


// const iromen = new Person('Iromen','Brasilia');

console.log(iromen);
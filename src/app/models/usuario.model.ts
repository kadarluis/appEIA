export class Usuario {
    constructor(
        public nombres: string,
        public apellidos: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public _id?: string
    ) {   }
};
export class Student {
    code: number;
    name: string;
    surname: string;
    qualification: number;
    observation: string;

    constructor (code: number, name: string, surname: string, qualification: number, observation: string) {
        this.code = code;
        this.name = name;
        this.surname = surname;
        this.qualification = qualification;
        this.observation = observation;
    }
}

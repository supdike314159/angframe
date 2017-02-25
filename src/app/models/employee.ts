export class Employee {

  constructor(id:number, firstName:string, lastName:string, birthDate: Date, status:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.id = id;
    this.status = status;
  }

  firstName: string;
  lastName: string;
  birthDate: Date;
  id: number;
  status: string;
}

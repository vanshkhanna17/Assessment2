export class Employee {
    id: number;
    name: string;
    dob: string;
    addr: string;
    phone: string;
    degr: string;
    marks: string;
    strm: string;
    clg: string;
    constructor(na, db, add, ph, dg, mrk, st, clg) {
        this.name = na;
        this.dob = db;
        this.addr = add;
        this.phone = ph;
        this.degr = dg;
        this.marks = mrk;
        this.strm = st;
        this.clg = clg;
    }
}
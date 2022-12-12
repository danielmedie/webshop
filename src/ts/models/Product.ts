export class Product {
    static addEventListener(arg0: string, arg1: (e: any) => void) {
        throw new Error("Method not implemented.");
    }
    static forEach(arg0: () => void) {
        throw new Error("Method not implemented.");
    }
    constructor(public title: string, public description: string, public price: number, public imgURL: string ) {}
  }

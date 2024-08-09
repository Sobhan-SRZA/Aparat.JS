export class error extends Error {
    constructor(message: string) {
        super();
        this.name = "aparat.js";
        this.message = message;
    }
}
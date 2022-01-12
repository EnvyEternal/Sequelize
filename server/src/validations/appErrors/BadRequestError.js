import AppError from "./AppError";

class BadRequestError extends AppError{
    constructor(message){
        super(massage, 400)
    }
}

export default BadRequestError
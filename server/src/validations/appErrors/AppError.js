class AppError extends Error{
    constructor(massage, status){
        super()
        this.name = this.constructor.name;
        this.massage = massage
        this.status = status
    }
}

export default AppError
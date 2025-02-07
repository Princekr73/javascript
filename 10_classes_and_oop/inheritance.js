class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const prince = new Teacher("prince", "pri@gmail.com", "123")
prince.addCourse()
const masalaChai = new User("masalachai")
masalaChai.logMe()
console.log(prince instanceof User);

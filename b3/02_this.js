const user= {
    username: "hitest",
    price:453,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage();


const addTwo = (num1,num2) => {
    return num1 +num2;
}
console.log(addTwo(4,2))
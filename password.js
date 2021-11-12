/*OBJECTIVES OF THE PROJECT
Welcome the user to the password validator tool
Prompt the user for a password to validate
Check if the user’s password meets the following constraint:
    At least 10 characters long
    If the user’s password meets the constraint, show a success message to the user
    If the user’s password fails the constraint, show a failure message to the user
*/
const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})
//Greeting
console.log("Welcome to the Password Validator!")


//Prompt for input
reader.question("Please enter a password to validate (Please note password must be at least a minimum of 10 characters long): ", function(input){
    initalPassword = input.split("");

    //Check for Length of minimum 10
    if(initalPassword.length < 10){
        console.log("Your password is not long enough, please try again.")
        process.exit(0);
    }else{
        console.log("Your password meets the minimum length.")
    }

    reader.question("Please re-enter your password to validate: ", function(input){
        rePassword = input.split("");


        //Check that Passwords match
        for(let i = 0; i < initalPassword.length; i++)
            if(initalPassword[i] != rePassword[i]){
               console.log("Your passwords do not match, please try again.")
               process.exit(0);
        }

        console.log("Your passwords match.")

        
        reader.close()
    })
})


        //console.log(`You entered ${initalPassword} & ${rePassword}`)
    
    
    

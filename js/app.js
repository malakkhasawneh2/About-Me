'use strict';
alert ('Welcom in this page to know mare information about me')
let userinput=prompt("Tell me what's your name please")
alert ('Wlecome to my page '+ userinput)
console.log(userinput);
let useranswered=prompt("Do you think I finished my university studies?");
switch (useranswered.toLocaleLowerCase()) {
    case 'yes':
    case 'y':    
        alert ('This is the correct answer I finished my study')
        console.log('Yes I finished my university studies');
        break;
    case 'no':
    case 'n':    
        alert ('This is a wrong answer, I finished my university studies');
        console.log('No Im finished my university studies');
        break;
    default:
        console.log('nothing');
        break;
}
let userans=prompt("Is my university degree in pharmacy?");
switch (userans.toLocaleLowerCase()) {
    case 'yes':
    case 'y':    
        alert ('This is the correct answer I have a pharmacy degree')
        console.log('Yes I have a pharmacy degree');
        break;
    case 'no':
    case 'n':    
        alert ('This is a wrong answer, I have a pharmacy degree');
        console.log('No I have a pharmacy degree');
        break;
    default:
        console.log('nothing');
        break;
}
let useran=prompt("Do you think I like cats?");
switch (useran.toLocaleLowerCase()) {
    case 'yes':
    case 'y':    
        alert ('This is the wrong answer I have a phobia of cats')
        console.log('no I have a phobia of cats');
        break;
    case 'no':
    case 'n':    
        alert ('This is correct answer, I have a phobia of cats');
        console.log('I have a phobia of cats');
        break;
    default:
        console.log('nothing');
        break;
}
let usera=prompt("Do you think I like sports?");
switch (usera.toLocaleLowerCase()) {
    case 'yes':
    case 'y':    
        alert ('This is the correct answer I like sports')
        console.log('Yes I like sports');
        break;
    case 'no':
    case 'n':    
        alert ('This is a wrong answer, I like sports');
        console.log('No I like sports');
        break;
    default:
        console.log('nothing');
        break;
}
let user=prompt("Is my favorite food fish?");
switch (user.toLocaleLowerCase()) {
    case 'yes':
    case 'y':    
        alert ('This is the wrong answer My favorite food is grilled chicken')
        console.log('no My favorite food is grilled chicken');
        break;
    case 'no':
    case 'n':    
        alert ('This is correct answer, My favorite food is grilled chicken');
        console.log('My favorite food is grilled chicken');
        break;
    default:
        console.log('nothing');
        break;
}
alert ('Thank you for answering these questions and for visiting this page '+ userinput)



'use strict';
alert ('Welcom in this page to know mare information about me')
let userinput=prompt("Tell me what's your name please")
let Score = 0;
alert ('Wlecome to my page '+ userinput)
console.log(userinput);
let useranswered=prompt("Do you think I finished my university studies?");
switch (useranswered.toLocaleLowerCase()) {
    case 'yes':
    case 'y':    
        alert ('This is the correct answer I finished my study')
        console.log('Yes I finished my university studies');
        Score++;
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
        Score++;
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
        Score++;
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
        Score++;
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
        Score++;
        break;
    default:
        console.log('nothing');
        break;
}
let Age=prompt('How old do you think I am? You have four attempts to guess the answer')
for(let i=1;i<4;i++){
    if (Age===25){
        console.log('correct answer, Im 25 years old');
    alert ('This is correct answer, Im 25 years old');
    Score++;
    break;
}else if (Age>25){
    console.log('wrong answer, please try again, this is too high '+ Age);
    Age = prompt('This is wrong answer please try again, this is too high');
}else if (Age<25){
    console.log('wrong answer, please try again, this is too low '+ Age);
   Age =  prompt('This is wrong answer please try again, this is too low');
}
}
alert ('Im 25 years old')
let myArr = ['strawberry', 'banana','apricot']
let fruit=prompt('What do you think of my favorite fruits? You have 6 attempts to guess the answer');
for(let i=1;i<6;i++){
    if (fruit.toLocaleLowerCase()==myArr[0] || fruit.toLocaleLowerCase()==myArr[1] || fruit.toLocaleLowerCase()==myArr[2]){
    console.log('my favorite fruits is strawberry,banana and apricot');
    alert ('This is correct answer, my favorite fruits is strawberry,banana and apricot');
    Score++;
    break;
}else if (fruit.toLocaleLowerCase()!==myArr[0] || fruit.toLocaleLowerCase()!==myArr[1] || fruit.toLocaleLowerCase()!==myArr[2])
console.log('wrong answer, please try again'+ fruit);
   fruit= prompt('This is wrong answer please try again');
}
alert ('My favorite fruits is strawberry,banana and apricot I eat them all the time');
console.log(Score); 
alert('Great  '+ userinput + ' and your scpre is ' + Score);
alert ('Thank you for answering these questions and for visiting this page '+ userinput);


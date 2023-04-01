//Switch Case

let num = 3;

switch (num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Invalid Input");
        break;
}


//Combining Cases Statement 

let letter = 'a';

switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter + " is an Vowel");
        break;
    default:
        console.log(letter + " is not a Vowel");
        break;
}
// a single palindrome in java script

// Create a function that reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
    
}

function palindrome(word) {
    
    
    if (reverseString(word)===word) {console.log(word +' is a palindrome');
                     }
    else {console.log(word +' is not a palindrome');
        }
}

palindrome("mama");
palindrome("ama");



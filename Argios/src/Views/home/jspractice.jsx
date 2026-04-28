import { LetterText } from "lucide-react";

export default function JsPractice() {
    // FILTER

    // Q1. We have a list of students with their details and a list of student IDs who are present in the van. We need to filter out the profiles of the students who are present in the van.  
    // const dummyData = [
    //     { id: 1, name: "Ram`", class: 8, father: "Shyam Kumar", isPresent: false },
    //     { id: 2, name: "Ram 2", class: 8, father: "Shyam 2 Kumar", isPresent: true },
    //     { id: 3, name: "Ram 3", class: 8, father: "Shyam 3 Kumar", isPresent: false },
    //     { id: 4, name: "Ram 4", class: 8, father: "Shyam 4 Kumar", isPresent: true },
    //     { id: 5, name: "Ram 5", class: 8, father: "Shyam 5 Kumar", isPresent: true },
    //     { id: 6, name: "Ram 6", class: 8, father: "Shyam 6 Kumar", isPresent: false },
    //     { id: 7, name: "Ram 7", class: 8, father: "Shyam 7 Kumar", isPresent: false },
    //     { id: 8, name: "Ram 8", class: 8, father: "Shyam 8 Kumar", isPresent: true },
    //     { id: 9, name: "Ram 9", class: 8, father: "Shyam 9 Kumar", isPresent: false },
    // ];

    // const vanData = [
    //     2, 5, 7, 8
    // ]


    // const filterStudents = () => {

    // Longer method but easy to understand 

    // const selected = [];

    // for (let j = 0; j < vanData.length; j++) {
    //     const stId = vanData[j];

    //     for (let i = 0; i < dummyData.length; i++) {
    //         const profile = dummyData[i];

    //         if (profile.id === stId) {
    //             selected.push(profile);
    //             continue;
    //         }
    //     }

    // }
    // return selected;

    // Shorter method with same result
    //     const filterStudents = () => {
    //         return dummyData.filter(profile => vanData.includes(profile.id));
    //     };
    //     return filterStudents();
    // }


    // console.log(filterStudents());

    //-------------------------------------------------------------------------------------------------
    //Q2. Create a function that find out the input is palindrome or not ?

    // function isPalindrome(i) {
    //     const value  = i.toLowerCase();
    //     const reverse = value.split("").reverse().join("");
    //     return value === reverse;}

    // console.log(isPalindrome("TATAT"));

    //------------------------------------------------------------------------------------------------
    //Q3.  Create a formatter that find out input is a validemail or not ?

    // function isValidEmail(e) {
    //     if (!e) {
    //         alert("Email cannot be empty");
    //         return;
    //     }

    //     const isAtpresent = `${e}`.includes("@");
    //     const isdomain = `${e}`.includes(".com") || `${e}`.includes(".in");

    //     if (isAtpresent && isdomain) {
    //         return true;
    //     }

    //     return false;
    // }

    // console.log(isValidEmail("example@gmail.com"));

    //-------------------------------------------------------------------------------------------------
    // Q4. Create a formatter that find out input is a vslid password or not ?

    // function isValidPassword(p) {
    //     if (!p) {
    //         alert("Set your password")
    //         return;
    //     }

    //     const password = `${p}`.length >= 8;
    //     const uppercase = `${p}`.split("").some(char => char >= "A" && char <= "Z");
    //     const lowercase = `${p}`.split("").some(char => char >= "a" && char <= "z");
    //     const number = `${p}`.split("").some(char => char >= "0" && char <= "9");  
    //     const symbol = `${p}`.split("").some(char => char >= "#" && char <= "@") ||  `${p}`.split("").find(char => char >= "%" && char <= "*") 

    //     if (password && uppercase && lowercase && number && symbol) {
    //         return true;
    //     }
    //     return false;

    // }

    // console.log(isValidPassword("Nikhil123@"));

    //-------------------------------------------------------------------------------------------------
    //Q5. Do same question with loop

    const Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const SmallAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const Symbol = ["@", "#", "$", "%", "^", "&", "*"];

    // function isValidPassword(p) {
    //     if (!p) {
    //         alert("Set your password")
    //         return;
    //     }

    //     const isCapLatter = findValue(Alphabet, p);
    //     const isSmall = findValue(SmallAlphabets, p);
    //     const isNumber = findValue(Number, p);
    //     const isSymbol = findValue(Symbol, p);


    //     const isValied = isCapLatter && isSmall && isNumber && isSymbol;
    //     if(!isValied){
    //         console.log(`Password ${p} is not valid`);
    //     return ;    
    //     }

    //     console.log("Password is Valid");





    // }


    // DNA Match

    const fatherDNA = ["a+", "a-", "aa5", "hnb", "hg3"];

    const sonDNA = ["a-", "ike", "pp0", "hnb", "hg3"];





    const findValue = (items, valuetoFind) => {

        let p_array = [];

        let matchKeywords = [];
        const isarray = Array.isArray(valuetoFind);
        console.log(isarray);

        if (!isarray) {
            p_array = valuetoFind.split("");

        } else {
            p_array = valuetoFind;
        }

        for (let i = 0; i <= items.length; i++) {
            const char = items[i];

            for (let j = 0; j < p_array.length; j++) {
                if (p_array[j] == char) {
                    matchKeywords.push(char);
                }

            }
        }
        return (matchKeywords.length / items.length) * 100;
    }

    const dnaMatch = findValue(fatherDNA, sonDNA);

    console.log(dnaMatch);






}
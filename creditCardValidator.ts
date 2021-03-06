/**
 * Author: Fahd Allebdi
 * run the code directly : ts-node file.ts
 * resource: https://github.com/TypeStrong/ts-node
 * description: this function implemented with Luhn Algorithm to validate a variety of identification numbers, 
 * such as credit card numbers , bank card numbers ..etc.
 * for more details: https://en.wikipedia.org/wiki/Luhn_algorithm
 */
export class CreditCardValidator {
    public static isValidNumber(cardNumber: string): boolean {
        if (!cardNumber)
            return false;

        cardNumber = cardNumber.trim();

        /**
         * validations:
         * 1- only numbers are accepted.
         * 2- user input should be 16 digits.
         */
        let regex = new RegExp("^[0-9]{16}$");
        if (!regex.test(cardNumber))
            return false;

        let sumOdd = 0; // sum of odd places
        let sumEven = 0; // sum of even places
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let number = Number(cardNumber[i]);
            if (i % 2 != 0) {
                // odd
                sumOdd += number;
            } else {
                // even
                let double = number * 2;
                let even = (double > 9) ? double - 9 : double;
                sumEven += even;
            }
        }
        return ((sumOdd + sumEven) % 10) == 0;
    }

}

// TEST
let cardNumber = "";
console.log(CreditCardValidator.isValidNumber(cardNumber) ? 'Valid' : 'Invalid');

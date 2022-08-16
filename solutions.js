"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    return input === true;
}

function isFalse(input){
    return input === false;
}

function not(input){
    return !input;
}

function addOne(input){
    return Number(input) +1;
}

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else if (input % 2 !== 0){
        return false;
    }
}

function isIdentical(input1, input2){
    if(input1 === input2) {
        return true;
    } else {
        return false;
    }
}

function isEqual(value1, value2){
    if(Number(value1 == value2)){
        return true;
    } else {
        return false;
    }
}

function or(num1, num2) {
    return (num1 || num2)
}

function and(and1, and2){
    return(and1 && and2)
}

function concat(word1, word2) {
    return (String(word1) + String(word2));
}

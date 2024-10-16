/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';

// Task 1

function to_fahrenheit(celsius) {

    return Math.round((celsius * 9/5) + 32);

}

// Task 2

function to_celsius(fahrenheit) {

    let celsius = Math.round((fahrenheit - 32) * 5/9);

    return celsius;
}

// Task 3 - skip

function roll_dice(qty, sides) {

randInt(1, sides)

}

// Task 4

function area_circle(radius) {

    let area = Math.PI * (radius ** 2)

    return area;
}

// Task 5

function cylinder_volume(radius, height) {

    let volume = area_circle(radius) * height

    return volume;
}

// Task 6

function percent_score(score, total) {

    let percent_mark = (score / total) * 100

    let rounded_mark = Math.round(percent_mark)

    console.log(`${rounded_mark}%`)

    return percent_mark;
}

function pythagorean_theorem(a, b) {

    let c = Math.sqrt(a ** 2 + b **2)

    return c;

}
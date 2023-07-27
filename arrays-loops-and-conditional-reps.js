/*
Learning Objectives:
  Practice with Arrays
  Practice with Loops
  Practice with Conditionals
*/

/*
Part I: HTML & CSS
*/
//Rank your comfort with the following material on a scale of 0 - 5: " 5 - I got this! I am ready to code. "
//When it comes to HTML & CSS, I feel very confident with it.

/*
Part II: JavaScript Reps
*/

////////////////////////////////
// Easy Going
////////////////////////////////

//Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

//This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// 1. Write a javascript application that logs all numbers from 1 - 100.
for (let i = 1; i <= 100; i++) {
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
  } else if (i % 3 === 0) {
    console.log("Fizz");
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

//Use the following arrays to answer the questions below (name, species, age, hometown): You should be modifying the elements by accessing them. 
//It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++;
console.log(plantee);
// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);
// 3. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// Here is a list of favMovies:
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic 

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):

// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?

// 2. Use the method pop

// 3. push"Guardians of the Galaxy"

// 4. Reverse the array

// 5. Use the shiftmethod

// 6. unshift- what does it return?

// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?

// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?

// 10. console.log your final results

// 11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

// 12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?



////////////////////////////////
// Where is Waldo
////////////////////////////////

// With the following multi-dimensional array

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"

////////////////////////////////
// Excited Kitten
////////////////////////////////

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

////////////////////////////////
// Find the Median
////////////////////////////////

// Find the median number in the following numsarray, then console.log that number.

//hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

//Hungry for More?

////////////////////////////////
// Alien Attire
////////////////////////////////

// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! \
// Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
// Use that variable to add Kristyn's lost shoe to Thom's accessories array.

////////////////////////////////
// Dress Us Up
////////////////////////////////

// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

////////////////////////////////
// Dirty Laundry
////////////////////////////////

// Continue looking at the closet arrays:
// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

////////////////////////////////
// Inventory
////////////////////////////////

// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
/*Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.

Example array: let colors = ["Red", "Green", "White", "Black"];

Should look like: "Red, Green, White, Black"

Do NOT use the "toString" method.
*/

//using the .join() method, create a function that joins components of an array to form a string


//Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.



const myArray = ['red', 'Green', 'white', 'black'];

function joinElements(a) {

    let result = a.join();
    return result
}

console.log(joinElements(myArray));
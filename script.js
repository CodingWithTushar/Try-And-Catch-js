console.log("It's Working");

// try {
	// try the code
// } catch(err) {			// The err variable contains an error object
	// error handling
// }

// let a = prompt("Enter First Number ")

// let b = prompt("Enter Second Number ")

// if (isNaN (a) || isNaN(b) ) {
    // throw SyntaxError("Sorry This is not allowed")
// }

// let sum = parseInt (a) + parseInt (b)

// try {
    // console.log('The Sum Is ' , sum*x);
    // return true
// } catch (error) {
    // console.log('Error aa Gaya Bhai');
    // return false
// }
// finally{
    // console.log('Files Are Being Closed And Db Connection is Being Closed '); 
// }

let c = prompt("Enter The Number You Want To Add ")

let d = prompt("Enter The Number YoU Want To Add With")

let  sum1 = parseInt(c) + parseInt(d);

try {
    console.log('Your Is Number Is ' + sum1);
}
catch (error) {
    console.log('Sorry Your Number Can not Be Defined');
}
finally{
    console.log('Files Are Being Closed And Db Connection is Being Closed '); 
}



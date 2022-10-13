

//https://projecteuler.net/problem=1


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// so the questions is to sum all the 3 or 5 number from 1 tp 1000
// so we loop trought from 1 to 1000
// then get remainder that equal to 0
// if 3 & 5 === 0 then sum up the number

// test function
//console.log('x % y = ', 5 % 3);

function question_1(){
    const MaxLimit = 1000
    var i, sum = 0;
    for (i = 3; i < MaxLimit; i += 1) {
        if (
            i % 3 === 0 
            || i % 5 === 0
            ){
            sum += i;
        }
    }
    console.log("The answer is : " + sum);
}

question_1()

//The answer is : 233168








//#######################################################################################
//https://projecteuler.net/problem=5
//#######################################################################################
//the smallest positive number that is evenly divisible by all of the numbers from 1 to 1e10 and stop if found

// there are much better approched
// simple and quick way is to just loop from the smaller number to the 1e10 and stop if found the number that match
// so for each number we loop through and check if after devision is not interger then we move to next number 
// continue to loop until 20, if all the number are interget then we found the answer



var BreakException = {};
try {

    for (let ii = 1; ii <= 1e10; ii++) {
        if(_check(ii) == false){
            console.log("Found : " + ii)
            throw BreakException;
        }

    }

} catch (e) {
  if (e !== BreakException) throw e;
}


function _check(_num){
    var MaxNo = 20
    var _founddecimal = false
    for (let i = 1; i <= MaxNo; i++) {
        var aa = _num / i

        // check if the number is interger
        if(Number.isInteger(aa) == false){
            //console.log("Number " + _num + "/" + i + " has DECIMAL" )
            _founddecimal = true
            return
        }

        // when looping until 20, check if there is any decimal for this nuumber, if no then we found the lowest number
        if(_founddecimal == false && i == MaxNo){
            return false // stop calculating
        }
       
        
      }

}













// //_check(2521)

// // // loop from small number until hit the number 
// // for (let ii = 1; ii <= 25230; ii++) {
// //     //console.log( ii + " - ##############")
// //     //console.log("check : " +  _check(ii))
// //     if(_check(ii) == false){
// //         console.log("Found : " + ii)
// //         throw BreakException;
        
// //     }

// // }

// var BreakException = {};

// try {

//     for (let ii = 1; ii <= 2523000000; ii++) {
//         //console.log( ii + " - ##############")
//         //console.log("check : " +  _check(ii))
//         if(_check(ii) == false){
//             console.log("Found : " + ii)
//             throw BreakException;
            
//         }
    
//     }

// //   [1, 2, 3].forEach(function(el) {
// //     console.log(el);
// //     if (el === 2) throw BreakException;
// //   });
// } catch (e) {
//   if (e !== BreakException) throw e;
// }



// //question_3()
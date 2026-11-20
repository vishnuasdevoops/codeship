// // let num = 10;
// // let name = "Vishnu";

// // let cities = ["Chennai", "Madurai", "Tiruchy", "Neyveli", "Kanchipuram"];

// // // console.log(cities.pop());
// // // console.log(cities)
// // // console.log(cities.shift())
// // // console.log(cities)
// // // console.log(cities.unshift('Chennai'))
// // // console.log(cities)

// // // cities.splice(1,2, 'x', 'y')
// // // console.log(cities) 

// // console.log(cities.slice(0,2))
// // console.log(cities.reverse())

// // let bas = cities.join(":").split("",6).join().split(",")

// // console.log(bas)

// // console.log()


// let array = [5, 8, 10, 7, 9, 11]

// //Replace 7, 9, 11 to 17, 19, 111
// console.log(array.splice(3,3,17, 19, 111))

// console.log(array)

// //Insert 100 in the beginning
// array.unshift(100)

// console.log(array)

// //Insert 200 in last but one position
// array.splice(-1, 0, 200)
// console.log(array)

// //Add 1000 at the end
// array.push(1000)
// console.log(array)

// //Insert 0 in the middle. Use arr.length to find middle position

// let len = array.length/2;

// console.log(len)
// array.splice(len,0, 0)

// console.log(array)

//Calculate how many words from the text area


// let word = document.getElementById("textarea")

// function calculateWord() {
//     let text = word.value.trim().split(/\s+/).filter(Boolean);
//     document.querySelector(".result").textContent = text.length;
//     document.querySelector(".result").style.display = "block";
// }    

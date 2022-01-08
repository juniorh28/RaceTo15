//https://www.youtube.com/watch?v=_vsLvOVafwA
/**
 * Race to 15
 * Given a list of numbers 1-9, we want to know how many sets of 3 numbers equal 15?
 * 
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let setEqual15 = new Set();

for (let i = 1; i < arr.length - 2; ++i) {
    for (let j = 2; j < arr.length - 1; j++) {
        if (j === i) continue;
        for (let k = 3; k <= arr.length; k++) {
            if (k === i || k === j) continue;

            if (i + j + k === 15) {
                let newArr = [i, j, k];
                setEqual15.add(newArr);
            }
        }
    }
}




//console.log(setEqual15)
let a = 0;
let b = 0;

setEqual15.forEach(ele => {

    if ((ele[1] === a || ele[1] === b) && (ele[2] === a || ele[2] === b)) {
        setEqual15.delete(ele)
    }

    a = ele[1]
    b = ele[2]

})

console.log(setEqual15)
console.log(setEqual15.size + " Sets of 3 numbers from 1-9 equals 15.")
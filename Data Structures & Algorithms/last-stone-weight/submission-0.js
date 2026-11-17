class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
// so we have 2 numbers that will be subtracted, first finding the highest number and subtracting by the next in order
// most likely looping through an array, can possibly brute force it with a quadratic solution so lets think thriugh those steps
//the return will be the remainder thats left off, and if its nothing that you have then it will return 0
//smash just means subtract
// lastStoneWeight([1,4,7,8,3,2]) = 1 // [1]
// lastStoneWeight([5,4,3,2]) = 0 // [] return the value which if empty it is zero
// method// reduce
    
    // let sort = stones.sort((a ,b => b - a))
    // for(let i = 0; i < sort.length; i++){
    //     let curr = sort[i]
    //     for(let j = i + 1; j < sort.length; j++){
    //         let next = sort[j]
            
    //        while(curr >= next ){
    //         let remainder = curr - next
    //        }
    //        if(remainder > 0){
    //         sort.push(remainder)
    //        }

    //     }
        
    //   return sort  
    // }
    // let sorted = stones.sort((a, b) => b - a)
    // let remainder = sorted.reduce((a, b) => b -a)
    // return remainder
    while(stones.length > 1){
        stones.sort((a, b) => b - a)


        let first = stones.shift()
        let sec = stones.shift()

        let remainder = first - sec

        if(remainder > 0){
            stones.push(remainder)
        }
    }
    return stones[0] || 0
    }
}

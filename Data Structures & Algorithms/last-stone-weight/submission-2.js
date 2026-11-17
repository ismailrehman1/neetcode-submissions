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
    
    
    
    while(stones.length > 1){
        stones.sort((a, b) => b - a)


        let first = stones[0]
        let sec = stones[1]

        let remainder = first - sec

        stones.splice(0, 2)
        if(remainder > 0){
            stones.push(remainder)
        }
    }
    return stones[0] || 0
    }
}

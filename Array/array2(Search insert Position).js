// 35. Search Insert Position
// This needs improvement to solve in O(log n)

let nums = [1,3,5,6]
let target1 = 5
let target2 = 2
let target3 = 7

let searchInsert = function(nums,target){
    let i = 0
    for(;i<nums.length;i++){
        if(nums[i] === target){
            return i;
        }
        else if(nums[i] > target){
            return i;
        }
    }
    return i
}

console.log(searchInsert(nums,target3));
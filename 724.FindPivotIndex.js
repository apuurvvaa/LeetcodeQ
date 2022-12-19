/*var pivotIndex = function(nums) {
    //declare variables
    let leftSum = 0;
    let rightSum = nums.reduce((a,b) => a + b)
    //find the pivot index
    for(let i =0; i < nums.length; i++){
        rightSum -=nums[i];
        if(leftSum === rightSum){
            return i; 
        }
        leftSum += nums[i];
    }

    //return index;
    return -1; // if there's no such index
};
*/


var pivotIndex = function(nums){

//declare variables
leftIndex = 0;
let totalSum = 0;
//find the pivot index
nums.forEach((e)=>{    //find totalSum
    totalSum += e
})

for(let i=0; i < nums.length; i++){
    if(totalSum - leftIndex - nums [i] === leftIndex){ 
        return i
    }
    leftIndex += nums[i]
}

//return index;
return -1;

}

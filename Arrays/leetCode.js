var moveZeroes = function (nums) {
    console.log(nums)
    let nonZeroElements = nums.filter(item => item != 0)
    let zeroCount = nums.length - nonZeroElements.length
    console.log(zeroCount)

    nums.length = 0
    nums.push(...nonZeroElements, ...Array(zeroCount).fill(0))
    console.log(nums)


};

moveZeroes([0, 1, 0, 3, 12])
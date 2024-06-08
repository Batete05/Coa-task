const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the array of integers (comma separated): ', (arrInput) => {
    rl.question('Enter the target sum: ', (targetInput) => {
        const arr = arrInput.split(',').map(Number);
        const target = Number(targetInput);

        function hasSubarrayWithSum(arr, target) {
            let currentSum = 0;
            let start = 0;

            for (let end = 0; end < arr.length; end++) {
                currentSum += arr[end];

                while (currentSum > target && start <= end) {
                    currentSum -= arr[start];
                    start++;
                }

                if (currentSum === target) {
                    return true;
                }
            }

            return false;
        }

        const result = hasSubarrayWithSum(arr, target);
        console.log(result ? 'true' : 'false');
        
        rl.close();
    });
});

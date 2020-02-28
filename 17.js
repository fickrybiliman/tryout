const numbers = [1, 3, 4, 1, 201, 100, 4, 7, 42, 85, 12, 583, 13, 104, 31, 76, 49];

function bubbleSort(num) {
   let temp;
   for (let i = 0; i < num.length; i++) {
      for (let j = i+1; j < num.length; j++) {
         if (num[i] > num[j]) {
            temp = num[i];
            num[i] = num[j];
            num[j] = temp;
         }
      }
   }
   return num;
};

console.log(bubbleSort(numbers));
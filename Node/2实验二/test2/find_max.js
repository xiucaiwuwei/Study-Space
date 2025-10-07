// 定义数组
const numbers = [5, 18, 46, 19, 77, 103, 88];

// 方法1: 使用Math.max和扩展运算符
const max1 = Math.max(...numbers);
console.log(`数组 [${numbers}] 中的最大值是: ${max1}`);

// 方法2: 使用reduce方法
const max2 = numbers.reduce((max, current) => Math.max(max, current), numbers[0]);
console.log(`使用reduce方法得到的最大值是: ${max2}`);

// 方法3: 使用传统循环
let max3 = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max3) {
    max3 = numbers[i];
  }
}
console.log(`使用循环方法得到的最大值是: ${max3}`);
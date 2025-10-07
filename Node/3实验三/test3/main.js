// main.js
const { avg } = require('./module');

const score = [73, 55, 81, 63, 79, 97, 82, 91, 100, 77];
const averageScore = avg(score);

console.log(`班级A同学的英语平均成绩为: ${averageScore}`);
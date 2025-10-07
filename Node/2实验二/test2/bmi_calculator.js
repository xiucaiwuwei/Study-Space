// BMI计算器函数，可在浏览器和Node.js中使用
function calculateBMI(height, weight) {
  const bmi = weight / (height * height);
  
  let result = `您的BMI指数是: ${bmi.toFixed(2)}\n`;
  
  // 根据BMI指数判断体型
  if (bmi < 18.5) {
    result += '您的体型: 过轻';
  } else if (bmi >= 18.5 && bmi < 25) {
    result += '您的体型: 正常';
  } else if (bmi >= 25 && bmi < 28) {
    result += '您的体型: 有点重';
  } else if (bmi >= 28 && bmi < 32) {
    result += '您的体型: 胖了';
  } else {
    result += '您的体型: 严重肥胖';
  }
  
  return result;
}

// 浏览器环境中的函数 - 使用弹窗输入，控制台输出
function browserCalculateBMI() {
  // 使用弹窗获取用户输入
  const height = prompt("请输入您的身高(m)");
  if (height === null) return; // 用户取消输入
  
  const weight = prompt("请输入您的体重(kg)");
  if (weight === null) return; // 用户取消输入
  
  // 验证输入
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    console.error("请输入有效的数值！");
    return;
  }
  
  // 计算并显示结果到控制台
  const result = calculateBMI(parseFloat(height), parseFloat(weight));
  console.log(result);
}

// Node.js环境
if (typeof window === 'undefined') {
  // 在Node.js环境中使用prompt库
  const prompt = require('prompt');
  
  // 配置prompt
  prompt.message = '';
  prompt.delimiter = '';
  
  // 定义要获取的属性
  const schema = {
    properties: {
      height: {
        description: '请输入您的身高(m)',
        type: 'number',
        required: true
      },
      weight: {
        description: '请输入您的体重(kg)',
        type: 'number',
        required: true
      }
    }
  };
  
  // 开始获取用户输入
  prompt.start();
  
  // 获取用户输入的身高和体重
  prompt.get(schema, function (err, result) {
    if (err) {
      console.error('输入错误:', err);
      return;
    }
    
    const bmiResult = calculateBMI(result.height, result.weight);
    console.log(bmiResult);
  });
}

// 导出函数供浏览器使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateBMI, browserCalculateBMI };
}
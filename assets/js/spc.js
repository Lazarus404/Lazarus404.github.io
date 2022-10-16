const chiTable = [
  [0.5, 0.1, 0.05, 0.025, 0.01, 0.005],
  [0.455, 2.706, 3.841, 5.024, 6.635, 7.879],
  [1.386, 4.605, 5.991, 7.378, 9.210, 10.597],
  [2.366, 6.251, 7.815, 9.348, 11.345, 12.838],
  [3.357, 7.779, 9.488, 11.143, 13.277, 14.860],
  [4.351, 9.236, 11.070, 12.833, 15.086, 16.750],
  [5.348, 10.645, 12.592, 14.449, 16.812, 18.548],
  [6.346, 12.017, 14.067, 16.013, 18.475, 20.278],
  [7.344, 13.362, 15.507, 17.535, 20.090, 21.955],
  [8.343, 14.684, 16.919, 19.023, 21.666, 23.589],
  [9.342, 15.987, 18.307, 20.483, 23.209, 25.188],
  [10.341, 17.275, 19.675, 21.920, 24.725, 26.757],
  [11.340, 18.549, 21.026, 23.337, 26.217, 28.300],
  [12.340, 19.812, 22.362, 24.736, 27.688, 29.819],
  [13.339, 21.064, 23.685, 26.119, 29.141, 31.319],
  [14.339, 22.307, 24.996, 27.488, 30.578, 32.801],
  [15.338, 23.542, 26.296, 28.845, 32.000, 34.267],
  [16.338, 24.769, 27.587, 30.191, 33.409, 35.718],
  [17.338, 25.989, 28.869, 31.526, 34.805, 37.156],
  [18.338, 27.204, 30.144, 32.852, 36.191, 38.582],
  [19.337, 28.412, 31.410, 34.170, 37.566, 39.997]
];

function mean(numbers) {
  var total = 0, i;
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total / numbers.length;
}

function median(numbers) {
  // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
  var median = 0, numsLen = numbers.length;
  numbers.sort((a,b) => a - b);

  if (numsLen % 2 === 0) { // is even
    median = (numbers[(numsLen / 2) - 1] + numbers[numsLen / 2]) / 2;
  } else { // is odd
    median = numbers[(numsLen - 1) / 2];
  }

  return median;
}

function mode(numbers) {
  // as result can be bimodal or multi-modal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  var modes = [], count = [], i, number, maxIndex = 0;
 
  for (i = 0; i < numbers.length; i += 1) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }
 
  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
}

function range(numbers) {
  numbers.sort();
  const r = {min: numbers[0], max: numbers[numbers.length - 1]};
  return Object.assign({range: r.max - r.min}, r);
}

function sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr
  }, 0);
}

function factorial(value, total = 1) {
  return value <= 1 ? total : factorial(value - 1, total * value);
}

function binomial(size, num, prob, cumulative, workings) {
  if (!workings) workings = [];
  let runningTotal = 0, res = 0, i;
  if (cumulative == 2) {
    for (i=size; i>=0; i--) {
      res = binomial(i, num, prob, false, workings).result;
      if (i > 0) {
        workings.push({value: res, desc: '+<br />'});
      }
      runningTotal += res;
    }
    return {result: runningTotal, workings};
  } else if (cumulative == 1) {
    for (i=size; i<=num; i++) {
      res = binomial(i, num, prob, false, workings).result;
      if (i < num) {
        workings.push({value: res, desc: '+<br />'});
      }
      runningTotal += res;
    }
    return {result: runningTotal, workings};
  } else {
    const combination = (factorial(num) / (factorial(size) * factorial(num - size)));
    let desc = `<code>P(${size}) = <sup>${num}!</sup>&frasl;<sub>${size}!(${num}-${size})!</sub> &bull; ${prob}<sup>${size}</sup> &bull; (1-${prob})<sup>${num}-${size}</sup></code><br />`;
    const Px = (prob ** size);
    const oneMinusP = (1 - prob);
    const numMinusSize = (num - size);
    desc += `<code>P(${size}) = <sup>${factorial(num)}</sup>&frasl;<sub>${factorial(size)} * ${factorial(num - size)}</sub> * ${Px} * ${oneMinusP}<sup>${numMinusSize}</sup></code><br />`;
    desc += `<code>P(${size}) = ${combination} * ${Px} * ${oneMinusP ** numMinusSize}</code><br />`;
    const result = combination * Px * (oneMinusP ** numMinusSize);
    desc += `<code>P(${size}) = ${result}</code><br />`;
    workings.push({result, desc});
    return {result, workings};
  }
}

function poisson(x, micro, cumulative, workings) {
  if (!workings) workings = [];
  let runningTotal = 0, res = 0, i;
  if (!!cumulative) {
    for (i=x; i>=0; i--) {
      res = poisson(i, micro, false, workings).result;
      if (i > 0) {
        workings.push({value: res, desc: '+<br />'});
      }
      runningTotal += res;
    }
    if (cumulative === 2) {
      return {result: runningTotal, workings};
    }
    workings.push({value: res, desc: '<code>1 - P(x, &micro;)</code><br />'});
    return {result: 1 - runningTotal, workings};
  } else {
    const e = 2.71828;
    let desc = `<code>P(${x}, ${micro}) = ${e}<sup>-${micro}</sup> &bull; (${micro}<sup>${x}</sup> / ${x}!)</code><br />`;
    const log = e**(-micro);
    const calc = (micro**x) / factorial(x);
    desc += `<code>P(${x}, ${micro}) = ${log} * ${calc}</code><br />`;
    const result = log * calc;
    desc += `<code>P(${x}, ${micro}) = ${result}</code><br />`;
    workings.push({result, desc});
    return {result, workings};
  }
}

function cdf(x, mean, variance) {
  return 0.5 * (1 + erf((x - mean) / (Math.sqrt(2 * variance))));
}

function erf(x) {
  // save the sign of x
  var sign = (x >= 0) ? 1 : -1;
  x = Math.abs(x);

  // constants
  var a1 =  0.254829592;
  var a2 = -0.284496736;
  var a3 =  1.421413741;
  var a4 = -1.453152027;
  var a5 =  1.061405429;
  var p  =  0.3275911;

  // A&S formula 7.1.26
  var t = 1.0/(1.0 + p*x);
  var y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y; // erf(-x) = -erf(x);
}

function normal_standard_distance(x, cumulative, workings) {
  if (!workings) workings = [];
  if (!!cumulative) {
    const data = cdf(x, 0, 1);
    workings.push({value: data, desc: 'unable to calculate by normal means'});
    return {result: data, workings};
  } else {
    const e = 2.71828;
    let desc = '<code>e = 2.71828</code><br />';
    desc += '<code>z = <sup>1</sup>&frasl;<sub>&sigma;&radic;<span style="text-decoration:overline;">2&pi;</span></sub>e<sup>-<sup>(x - &micro;)<sup>2</sup></sup>&frasl;<sub>2&sigma;<sup>2</sup></sub></sup></code><br />';
    const pre = 1 / (Math.sqrt(1) * Math.sqrt(2 * Math.PI));
    const zSq = (x - 0)**2;
    desc += `<code>z = ${pre} * e<sup>-<sup>${zSq}</sup>&frasl;<sub>2&sigma;<sup>2</sup></sub></sup></code><br />`;
    desc += `<code>z = ${pre} * ${e}<sup>-<sup>${zSq}</sup>&frasl;<sub>2</sub></sup></code><br />`;
    const post = e**-(zSq / 2);
    desc += `<code>z = ${pre} * ${post}</code><br />`;
    const result = pre * post;
    workings.push({value: result, desc});
    return {result: result, workings};
  }
}

function normal(x, sd, mean, cumulative, workings) {
  if (!workings) workings = [];
  let runningTotal = 0, res = 0, i;
  if (!!cumulative) {
    for (i=sd; i>=0; i--) {
      res = normal(x, i, mean, false, workings).result;
      if (i > 0) {
        workings.push({value: res, desc: '+<br />'});
      }
      runningTotal += res;
    }
    if (cumulative === 2) {
      return {result: runningTotal, workings};
    }
    workings.push({value: res, desc: '<code>1 - P(x, &micro;)</code><br />'});
    return {result: 1 - runningTotal, workings};
  } else {
    const e = 2.71828;
    const numerator = e - (((x-mean)**2) / (2 * (sd**2)));
    const denominator = sd * Math.sqrt(2*Math.PI);
    const result = numerator / denominator;
    return {result, workings};
  }
}

function variance(arr, sample, workings) {
  if (!workings) workings = [];
  let m = mean(arr);
  workings.push({value: m, desc: 'Get the mean of all values'});

  arr = arr.map((el)=>{
    return (el - m) ** 2
  })
  workings.push({value: arr, desc: 'For each number, minus the mean and then multiply it by itself'});

  let total = sum(arr);
  workings.push({value: total, desc: 'Sum all the resulting values'});

  const result = total / (arr.length - ((!!sample) ? 1 : 0));

  if (sample) {
    workings.push({value: result, desc: 'Now, divide sum total by (number of original values minus 1) for the variance'});
  } else {
    workings.push({value: result, desc: 'Now, divide sum total by the number of original values for the variance'});
  }

  return {result, workings};
}

function standardDeviation(arr, sample) {
  let workings = [];
  let varianceVal = variance(arr, sample, workings);
  const result = Math.sqrt(varianceVal.result);
  workings.push({value: result, desc: 'Find the square root of the variance'});
  return {result, workings};
}

function rmsd(predicted, observed, workings) {
  if (!workings) workings = [];
  let mean = 0;
  let tmp;
  if (predicted.length === 1) {
    predicted = predicted[0];
    for (let i=0; i<observed.length; i++) {
      tmp = (observed[i] - predicted) ** 2;
      mean += tmp;
      workings.push({value: tmp, desc: `(${observed[i]} - ${predicted})<sup>2</sup> = ${tmp}`});
    }
  } else {
    for (let i=0; i<observed.length; i++) {
      tmp = (observed[i] - predicted[i]) ** 2;
      mean += tmp;
      workings.push({value: tmp, desc: `(${observed[i]} - ${predicted[i]})<sup>2</sup> = ${tmp}`});
    }
  }
  mean = mean / observed.length;
  workings.push({value: mean, desc: `The mean of the total is ${mean}`});
  const result = Math.sqrt(mean);
  workings.push({value: result, desc: `The square-root of the mean is ${result}`});
  return {result, workings};
}

function chi(theoretical, actual, alpha, r, workings) {
  if (!workings) workings = [];
  let mean = 0;
  let m = 0;
  let tmp;
    for (let i=0; i<actual.length; i++) {
      tmp = (actual[i] - theoretical[i]) ** 2;
      if (actual[i] >= 5) m++;
      mean += tmp;
      workings.push({value: tmp, desc: `(${actual[i]} - ${theoretical[i]})<sup>2</sup> = ${tmp}`});
    }
  result = mean / actual.length;
  workings.push({value: result, desc: `&chi;<sup>2</sup> is ${result}`});
  const nu = m - r - 1;
  const nuValue = chiTable[nu][alpha];
  workings.push({value: nu, desc: `&nu; = ${m} - ${r} - 1 = ${nu}`});
  workings.push({value: result < nu, desc: `${result} (&chi;<sup>2</sup>) < ${nuValue} (&nu;)? ${result < nuValue}`});
  return {result, workings};
}

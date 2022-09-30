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

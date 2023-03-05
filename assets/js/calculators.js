function conv_update() {
  let indx = document.getElementById('conv-index').value;
  let x = document.getElementById('conv-x-values')
    .value
    .trim()
    .split(/\r?\n/)
    .join(',')
    .split(' ')
    .join(',')
    .split(',')
    .map((item) => parseFloat(item.trim()))
    .filter((item) => !isNaN(item));
  let h = document.getElementById('conv-h-values')
    .value
    .trim()
    .split(/\r?\n/)
    .join(',')
    .split(' ')
    .join(',')
    .split(',')
    .map((item) => parseFloat(item.trim()))
    .filter((item) => !isNaN(item));
  const result = document.getElementById('conv-result');
  if (isNaN(parseInt(indx)) || parseInt(indx) < 0) {
    result.innerHTML = 'Invalid index. Must be an integer >= 0';
    return;
  }
  if (x.length === 0 || h.length === 0) {
    result.innerHTML = 'Numeric values must be supplied for samples and impulse response fields.';
    return;
  }
  if (indx > x.length-1 + h.length-1) {
    result.innerHTML = 'Index must not exceed the sample length + impulse response length - 2.';
    return;
  }

  let calc, workings;
  calc = convolution(x, h, indx);
  workings = calc.workings.map(({value, desc}) => desc).join('<br />');
  result.innerHTML = `CONVOLUTION for index ${indx}:<br />${workings}<br /><code>= ${calc.result}</code>`;
};

function convrs_update() {
  let x = document.getElementById('convrs-x-values')
    .value
    .trim()
    .split(/\r?\n/)
    .join(',')
    .split(' ')
    .join(',')
    .split(',')
    .map((item) => parseFloat(item.trim()))
    .filter((item) => !isNaN(item));
  const result = document.getElementById('convrs-result');
  if (x.length === 0) {
    result.innerHTML = 'Numeric values must be supplied for samples field.';
    return;
  }

  let calc, workings;
  calc = convolution_running_sum(x);
  workings = calc.workings.map(({value, desc}) => desc).join('<br />');
  result.innerHTML = `RUNNING SUM:<br />${workings}<br /><code>= ${calc.result}</code>`;
};
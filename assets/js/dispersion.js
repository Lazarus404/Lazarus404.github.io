function update() {
  const values = document.getElementById('data-values')
    .value
    .split(/\r?\n/)
    .join(',')
    .split(',')
    .map((item) => parseFloat(item.trim()));
  const decSelect = document.getElementById('dec-points');
  const decimalPoints = parseInt(decSelect.options[decSelect.selectedIndex].text.toLowerCase());
  const valueSelect = document.getElementById('value-format');
  const isSample = valueSelect.options[valueSelect.selectedIndex].text.toLowerCase() === 'sample';
  const calcSelect = document.getElementById('calc-format');
  const calcSelectedFormat = calcSelect.options[calcSelect.selectedIndex].text.toLowerCase();
  const result = document.getElementById('result');
  if (values.reduce((acc, value) => isNaN(value) || acc, false)) {
    result.innerHTML = 'Values are either not all numerical or are not delimited by comma or newline.';
    return;
  }
  let calc, workings;
  switch(calcSelectedFormat) {
    case 'variance':
      calc = variance(values, isSample);
      workings = calc.workings.map(({value, desc}) => `${desc}: <code>${value}</code>`).join('<br />');
      console.log(calc.result);
      result.innerHTML = `VARIANCE:<br />Starting with values: <code>${values.join(', ')}</code><br />${workings}<br /><code>= ${calc.result.toFixed(decimalPoints)}</code>`;
      break;
    default:
      calc = standardDeviation(values, isSample);
      workings = calc.workings.map(({value, desc}) => `${desc}: <code>${value}</code>`).join('<br />');
      result.innerHTML = `STANDARD DEVIATION:<br />Starting with values: <code>${values.join(', ')}</code><br />${workings}<br /><code>= ${calc.result.toFixed(decimalPoints)}</code>`;
      break;
  }
};
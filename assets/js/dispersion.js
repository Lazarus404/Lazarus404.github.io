function update() {
  const values = document.getElementById('data-values')
    .value
    .split('/n')
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
  switch(calcSelectedFormat) {
    case 'variance':
      result.innerHTML = `VARIANCE:<br /><code>${values.join(', ')}</code><br /><code>= ${variance(values, isSample).toFixed(decimalPoints)}</code>`;
      break;
    default:
      result.innerHTML = `STANDARD DEVIATION:<br /><code>${values.join(', ')}</code><br /><code>= ${standardDeviation(values, isSample).toFixed(decimalPoints)}</code>`;
      break;
  }
};
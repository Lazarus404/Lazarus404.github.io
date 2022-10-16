function update() {
  let predicted = document.getElementById('data-pred')
    .value
    .trim()
    .split(/\r?\n/)
    .join(',')
    .split(',')
    .map((item) => parseFloat(item.trim()))
    .filter((item) => !isNaN(item));
  let observed = document.getElementById('data-obs')
    .value
    .trim()
    .split(/\r?\n/)
    .join(',')
    .split(',')
    .map((item) => parseFloat(item.trim()))
    .filter((item) => !isNaN(item));
  const result = document.getElementById('result');
  if (predicted.length === 0 || observed.length === 0) {
    result.innerHTML = 'Numeric values must be supplied for predicted and observed fields.';
    return;
  }
  if (predicted.length !== 1 && predicted.length !== observed.length) {
    result.innerHTML = 'Number of values in predicted set do not match the number of observations. Were non-numeric values entered in either field?';
    return;
  }

  let calc, workings;
  calc = rmsd(predicted, observed, workings);
  workings = calc.workings.map(({value, desc}) => desc).join('<br />');
  result.innerHTML = `RMSD:<br />${workings}<br /><code>= ${calc.result}</code>`;
};
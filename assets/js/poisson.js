function update() {
  let cumulative = document.getElementById('cumulative');
  const cumSelect = cumulative.options[cumulative.selectedIndex].value.toLowerCase();
  cumulative = parseInt(cumSelect);
  let x = document.getElementById('data-x').value;
  let micro = document.getElementById('data-micro').value;
  const result = document.getElementById('result');
  if (isNaN(parseInt(x)) || parseInt(x) <= 0) {
    result.innerHTML = 'Invalid number of successes value. Must be an integer > 0';
    return;
  }
  x = parseInt(x);
  if (isNaN(parseFloat(micro)) || parseFloat(micro) <= 0) {
    result.innerHTML = 'Invalid mean successes value. Must be a float > 0';
    return;
  }
  micro = parseFloat(micro);

  let calc, workings;
  calc = poisson(x, micro, cumulative);
  workings = calc.workings.map(({value, desc}) => desc).join('<br />');
  result.innerHTML = `POISSON (${cumulative ? 'CUMULATIVE' : 'NON-CUMULATIVE'}):<br />${workings}<br /><code>= ${calc.result}</code>`;
};
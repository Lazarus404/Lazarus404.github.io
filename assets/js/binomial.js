function update() {
  let cumulative = document.getElementById('cumulative');
  const cumSelect = cumulative.options[cumulative.selectedIndex].value.toLowerCase();
  cumulative = parseInt(cumSelect);
  let size = document.getElementById('data-size').value;
  let num = document.getElementById('data-num').value;
  let prob = document.getElementById('data-prob').value;
  const result = document.getElementById('result');
  if (isNaN(parseInt(size)) || parseInt(size) <= 0) {
    result.innerHTML = 'Invalid number of successes value. Must be an integer > 0';
    return;
  }
  size = parseInt(size);
  if (isNaN(parseInt(num)) || parseInt(num) <= 0) {
    result.innerHTML = 'Invalid number of trials value. Must be an integer > 0';
    return;
  }
  num = parseInt(num);
  if (isNaN(parseFloat(prob)) || parseFloat(prob) <= 0 || parseFloat(prob) >= 1) {
    result.innerHTML = 'Invalid number of trials value. Must be a float value > 0 and < 1';
    return;
  }
  prob = parseFloat(prob);

  let calc, workings;
  calc = binomial(size, num, prob, cumulative);
  workings = calc.workings.map(({value, desc}) => desc).join('<br />');
  result.innerHTML = `BINOMIAL (${cumulative ? 'CUMULATIVE' : 'NON-CUMULATIVE'}):<br />${workings}<br /><code>= ${calc.result}</code>`;
};
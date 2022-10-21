function update() {
  let tolerance = document.getElementById('data-tolerance').value;
  let plus = document.getElementById('data-plus').value;
  let minus = document.getElementById('data-minus').value;
  let sd = document.getElementById('data-sd').value;
  let mean = document.getElementById('data-mean').value;
  const result = document.getElementById('result');
  if (isNaN(parseFloat(tolerance)) || parseFloat(tolerance) <= 0) {
    result.innerHTML = 'Invalid tolerance value. Must be a number > 0';
    return;
  }
  if (isNaN(parseFloat(plus)) || parseFloat(plus) <= 0) {
    result.innerHTML = 'Invalid tolerance-plus value. Must be a number > 0';
    return;
  }
  if (isNaN(parseFloat(minus)) || parseFloat(minus) <= 0) {
    result.innerHTML = 'Invalid tolerance-mius value. Must be a number > 0';
    return;
  }
  if (isNaN(parseFloat(sd)) || parseFloat(sd) <= 0) {
    result.innerHTML = 'Invalid standard deviation value. Must be a number > 0';
    return;
  }
  if (isNaN(parseFloat(mean)) || parseFloat(mean) <= 0) {
    result.innerHTML = 'Invalid mean value. Must be a number > 0';
    return;
  }
  tolerance = parseFloat(tolerance);
  plus = parseFloat(plus);
  minus = parseFloat(minus);
  sd = parseFloat(sd);
  mean = parseFloat(mean);

  let calc, workings;
  calc = process_capability(tolerance, plus, minus, sd, mean);
  workings = calc.workings.map(({value, desc}) => desc).join('<br />');
  result.innerHTML = `PROCESS CAPABILITY:<br />${workings}<br /><code>= ${calc.result}</code>`;
};
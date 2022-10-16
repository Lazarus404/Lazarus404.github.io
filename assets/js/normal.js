function update() {
  let cumulative = document.getElementById('cumulative');
  const cumSelect = cumulative.options[cumulative.selectedIndex].value.toLowerCase();
  cumulative = parseInt(cumSelect) === 1;
  let z = document.getElementById('data-z').value;
  if (isNaN(parseFloat(z))) {
    result.innerHTML = 'Invalid number for z value. Must be an real number.';
    return;
  }
  z = parseFloat(z);

  let calc, workings;
  calc = normalStandardDistance(z, cumulative);
  workings = calc.workings.map(({value, desc}) => desc).join('<br />');
  result.innerHTML = `NORMAL (${cumulative ? 'CUMULATIVE' : 'NON-CUMULATIVE'}):<br />${workings}<br /><code>= ${calc.result}</code>`;
};
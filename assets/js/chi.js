let nu, param, update, addOptions;

window.onload = () => {
  console.log("loaded");
  nu = document.getElementById('data-nu');
  param = document.getElementById('data-param');

  update = () => {
    let theoretical = document.getElementById('data-the')
      .value
      .trim()
      .split(/\r?\n/)
      .join(',')
      .split(',')
      .map((item) => parseFloat(item.trim()))
      .filter((item) => !isNaN(item));
    let actual = document.getElementById('data-act')
      .value
      .trim()
      .split(/\r?\n/)
      .join(',')
      .split(',')
      .map((item) => parseFloat(item.trim()))
      .filter((item) => !isNaN(item));
    const nuSelect = parseFloat(nu.options[nu.selectedIndex].value.toLowerCase());
    const paramSelect = parseInt(param.options[param.selectedIndex].value.toLowerCase());
    const result = document.getElementById('result');
    if (theoretical.length === 0 || actual.length === 0) {
      result.innerHTML = 'Numeric values must be supplied for actual and theoretical fields.';
      return;
    }
    if (theoretical.length !== actual.length) {
      result.innerHTML = 'Number of values in actual set do not match the number of theoretical values. Were non-numeric values entered in either field?';
      return;
    }
    let calc, workings;
    calc = chi(theoretical, actual, nuSelect, paramSelect, workings);
    workings = calc.workings.map(({value, desc}) => desc).join('<br />');
    result.innerHTML = `Chi Goodness-of-Fit:<br />${workings}<br /><code>= ${calc.result}</code>`;
  };

  addOptions = (list, items) => {
    let opt, i;
    for (i=0; i<items.length; i++) {
      opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = items[i];
      if (i === 2) opt.setAttribute('selected', 'selected');
      list.appendChild(opt);
    }
  }

  addOptions(nu, chiTable[0]);
  addOptions(param, [...Array(21).keys()]);
}
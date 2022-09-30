function update() {
  const values = document.getElementById('data-values')
    .value
    .split('/n')
    .join(',')
    .split(',')
    .map((item) => parseFloat(item.trim()));
  const select = document.getElementById('result-format');
  const selectedFormat = select.options[select.selectedIndex].text.toLowerCase();
  const result = document.getElementById('result');
  if (values.reduce((acc, value) => isNaN(value) || acc, false)) {
    result.innerHTML = 'Values are either not all numerical or are not delimited by comma or newline.';
    return;
  }
  switch(selectedFormat) {
    case 'mean':
      result.innerHTML = `MEAN:<br /><code>${values.join(', ')}</code><br /><code><span style="text-decoration:overline">x</span> = ${mean(values)}</code>`;
      break;
    case 'median':
      result.innerHTML = `MEDIAN:<br /><code>${values.join(', ')}</code><br /><code>ã = ${median(values)}</code>`;
      break;
    case 'mode':
      result.innerHTML = `MODE:<br /><code>${values.join(', ')}</code><br /><code>mode = ${mode(values)}</code>`;
      break;
  }
};
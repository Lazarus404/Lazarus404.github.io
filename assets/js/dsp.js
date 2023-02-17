function convolution(x, h, indx, workings) {
  if (!workings) workings = [];
  workings.push({value: '', desc: `y[${indx}] =`});
  let result = [];
  let tally = [];
  for (let i=0; i<x.length; i++) {
    for (let j=0; j<h.length; j++) {
      if (!result[i+j]) result[i+j] = 0;
      if (!tally[i+j]) tally[i+j] = [];
      if (!tally[i+j][j]) tally[i+j][j] = [];
      result[i+j] += x[i] * h[j];
      tally[i+j][j].push(`x[${i}]h[${j}]`);
      tally[i+j][j].push(`(${x[i]} * ${h[j]})`);
      tally[i+j][j].push(`${(x[i] * h[j])}`);
    }
  }
  let desc = [];
  let i = indx;
  for (let j=0; j<tally[i].length; j++) {
    if (!tally[i][j]) continue;
    for (let k=0; k<tally[i][j].length; k++) {
      if (!desc[k]) desc[k] = [];
      desc[k].push(tally[i][j][k]);
    }
  }
  desc = desc.filter(r => !!r).map(r => r.join(' + ')).join('<br />');
  workings.push({value: '', desc});
  return {result: result[indx], workings};
}

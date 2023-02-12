---
layout: page
title: Charts | Basics of Control Charts
description: Presenting data correctly depending on context
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="../normal" class="button small">Normal</a>
<a href="./" class="button special small">Charts</a>
<a href="../histograms.html" class="button small">Histograms</a>
<a href="../hypothesis-testing.html" class="button small">Hypothesis Testing</a>

<hr />

<a href="./" class="special" style="border-bottom: none;"><i class="icon alt fa-home">&nbsp;</i></a>
<a href="p.html" class="button small">p Chart</a>
<a href="pn.html" class="button small">pn Chart</a>
<a href="u.html" class="button small">u Chart</a>
<a href="c.html" class="button small">c Chart</a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>
<a href="out-of-control.html" class="button small">Out-of-Control</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

There are several chart types you can use when plotting your data, with each chart pertaining to specific types of data.

<img src="/assets/images/quality-management/choosing-charts.png" width="1000" />

If your data represents absolute integer values, such as the count of a given attribute, then your data should be represented by a <code>Discrete</code> chart. Alternatively, if your data represents a variable floating point value, such as a measurement, then a <code>Continuous</code> chart should be used.

Variable data includes attributes such as the percentage of humidity (eg. 82.63%) or the length, width or height of a given product.

This section covers the different charts, relevant calculations & formulas and a discussion of the types of data pertaining to them.

## Choosing a Chart

<table>
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Distribution</th>
      <th>Subgroup Size</th>
      <th>Control Chart</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Variable</td>
      <td rowspan="3">Any</td>
      <td>1</td>
      <td>Individuals & Moving R</td>
    </tr>
    <tr>
      <td>2-10</td>
      <td>X-Bar R Chart</td>
    </tr>
    <tr>
      <td>More than 10</td>
      <td>X-Bar S Chart</td>
    </tr>
    <tr>
      <td rowspan="4">Attribute</td>
      <td rowspan="2">Binomial</td>
      <td>Constant</td>
      <td>np Chart</td>
    </tr>
    <tr>
      <td>Varying</td>
      <td>p Chart</td>
    </tr>
    <tr>
      <td rowspan="2">Poisson</td>
      <td>Constant</td>
      <td>c Chart</td>
    </tr>
    <tr>
      <td>Varying</td>
      <td>u Chart</td>
    </tr>
  </tbody>
</table>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

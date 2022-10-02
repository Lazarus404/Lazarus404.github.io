---
layout: page
title: Control Charts | Normal Probability Distributions
description: Choosing your chart and distribution
image: nil
nav-menu: false
show_tile: false
---

<script src="../../assets/js/spc.js"></script>
<script src="../../assets/js/normal.js"></script>

<a href="binomial-probability-distributions.html" class="button small">Binomial Probability Distributions</a>
<a href="poisson-probability-distributions.html" class="button small">Poisson Probability Distributions</a>
<a href="normal-probability-distributions.html" class="button special small">Normal Probability Distributions</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

## Normal Probability Calculator

THIS PAGE IS A WORK IN PROGRESS

This calculator works the same as <code>NORM.S.DIST(z, cumulative)</code> in Excel. Here, <code>Normal Cumulative Distribution</code> is the same as passing <code>TRUE</code>, while <code>Normal Density</code> is the same as passing <code>FALSE</code>.

<table>
  <tr>
    <td colspan="2">
      Type
      <select id="cumulative" onchange="update();">
        <option value="1">Normal Cumulative Distribution (area to left of z)</option>
        <option value="0">Normal Density (height of z)</option>
      </select>
    </td>
    <td colspan="2">
      Z Value
      <input type="text" id="data-z" onchange="update();" />
    </td>
  </tr>
  <tr>
    <td colspan="4" style="max-width: 100px;">
      <button onclick="update();">Update</button>
    </td>
  </tr>
  <tr>
    <td colspan="4">
      <div style="min-height: 50px; max-width: 1400px; padding: 20px; overflow-x: scroll; display: flex; flex-wrap: no-wrap;">
        <div id="result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
    </td>
  </tr>
</table>

----

## Normal Theory

Normal Distribution refers to any form of continuous data. This could be the length, height, time etc.

Common properties include:

- Symmetrically distributed
- Long tails / bell shaped
- Mean / Mode and Median are the same

Important properties of Normal Distribution are:

- About *68%* of the area under the curve falls within *1 standard deviation* of the mean.
- About *95%* of the area under the curve falls within *2 standard deviations* of the mean.
- About *99.73%* of the area under the curve falls within *3 standard deviations* of the mean.

## Normal Tables

When you have a Normal Distribution;

- The total area under the normal curve = 1.
- The probability of any particular value is 0.
- The probability that X is greater than or less than a value = area under the normal curve in that direction.

To create a Standard Normal Distribution from ANY Normal Distribution, you find the <code>z-value</code>. Here, you find how many standard deviations an element is from the mean.

<code>z = (x - &micro;) / &sigma;

- <code>z</code> is the z-score 
- <code>x</code> is the value of the element
- <code>&micro;</code> is the population mean
- <code>&sigma;</code> is the standard deviation



<a href="/quality-management">&#x2190; Back to Quality Management</a>

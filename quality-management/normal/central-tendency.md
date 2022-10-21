---
layout: page
title: Normal | Central Tendency
description: The tendency for the centre of a range of values
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="./" class="button special small">Normal</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="central-limit-theorem.html" class="button small">Central Limit Theorem</a>
<a href="central-tendency.html" class="button special small">Central Tendency</a>
<a href="standard-deviation.html" class="button small">Standard Deviation</a>
<a href="process-capability.html" class="button small">Process Capability</a>
<a href="rmsd.html" class="button small">RMSD</a>
<a href="chi.html" class="button small">Chi</a>
<a href="error-types.html" class="button small">Error Types</a>

<script src="/assets/js/spc.js"></script>
<script src="/assets/js/central-tendancy.js"></script>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

Not to be confused with <code>Central Limit Theorem</code>, is where the center or the middle location of the distribution is the average value of a probability distribution.

When given a collection of values, the Central Tendency is the tendency for values to settle in the middle of the value range.  This observation is typical with data that may deviate from a given value by order of probability, meaning that the central tendency should be the desired value while those falling above or below are "deviated" from that desired value.

Note that the central tendency may not always be the desired value.  For instance, in machining a product, the calibration of the machines may be off, meaning that the most common outcome is some way off the desired outcome, forcing the central tendency to be higher (or lower) than what is desired.

Finding a Central Tendency requires simple math; particularly "mean", "median" or "mode" calculations.

----

## Simple Explanation

Central Tendency gives the central value of the population or sample.

----

## Calculator

<table>
  <tr>
    <td colspan="6">
      Calculation
      <select id="result-format" onchange="update();">
        <option>Mean</option>
        <option>Median</option>
        <option>Mode</option>
      </select>
    </td>
  </tr>
  <tr>
    <td colspan="5">
      <textarea id="data-values" onchange="update();" placeholder="Put values here"></textarea>
    </td>
    <td colspan="1" style="max-width: 100px;">
      <button onclick="update();">Update</button>
    </td>
  </tr>
  <tr>
    <td colspan="6">
      <div style="min-height: 50px; max-width: 1400px; padding: 20px; overflow-x: scroll; display: flex; flex-wrap: no-wrap;">
        <div id="result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
    </td>
  </tr>
</table>

## Mean or Average
#### Symbols
<div><code><span style="text-decoration:overline">x</span></code> (x-bar) means "average"</div>
<div><code>&sigma;</code> is "sigma" and means "standard deviation"</div>
<div><code>&Sigma;</code> is also called "sigma" (confusing) and means "sum"</div><br />
<div><code><span style="text-decoration:overline">x</span> = <sup>&Sigma; x</sup>&frasl;<sub>n</sub></code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where <code>n</code> is number of values</div><br />

----

## Median

Place values in ascending or descending order and take the middle value.
If two middle numbers (even total), then add two nums together and divide by two. 

<code>90, 98, <span style="color: green;">104</span>, 104, 104</code><br />
<code>85, 90, <span style="color: green;">98, 104</span>, 104, 104 = <sup>(98 + 104)</sup>&frasl;<sub>2</sub> = 101</code>

----

## Mode

The number occurring the most number of times.

<code>85, <span style="color: green;">104</span>, 90, 98, <span style="color: green;">104, 104</span></code>

----

## Mode in Histogram

In the below histogram, we can see that the highest peak is the mode, since<br />
it represents the most common value.

<img src="/assets/images/histogram.png" width="500"/>

In a bi-modal histogram, we would say there are "two modes". Hence <br />
why it's called bi-modal (two-modes).

<img src="/assets/images/bi-modal-histogram.png" width="500" />

<a href="/quality-management">&#x2190; Back to Quality Management</a>

---
layout: post
title: Quality Management | Central Tendency
description: The tendency for the centre of a range of values
image: nil
nav-menu: false
show_tile: false
---

<script src="../assets/js/spc.js"></script>
<script src="../assets/js/central-tendancy.js"></script>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

When given a collection of values, the Central Tendency is the tendency for values to setting in the middle of the value range.  This observation is typical with data that may deviate from a given value by order of probability, meaning that the central tendency should be the desired value while those falling above or below are "deviated" from that desired value.

Note that the central tendency may not always be the desired value.  For instance, in machining a product, the calibration of the machines may be off, meaning that the most common outcome is some way off the desired outcome, forcing the central tendency to be higher (or lower) than what is desired.

Finding a Central Tendency requires simple math; particularly "mean", "median" or "mode" calculations.

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
      <div id="result" style="min-height: 50px; padding: 20px;"></div>
    </td>
  </tr>
</table>

## Mean or Average
#### Symbols
<div><code><span style="text-decoration:overline">x</span></code> (x-bar) means "average"</div>
<div><code>&sigma;</code> is "sigma" and means "standard deviation"</div>
<div><code>&Sigma;</code> is also called "sigma" (confusing) and means "sum"</div><br />
<div><code><span style="text-decoration:overline">x</span> = <sup>&Sigma; x</sup>&frasl;<sub>n</sub></code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where n is number of values</div><br />

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

---
layout: post
title: Quality Management | Dispersion / Spread
description: The distribution of values
image: nil
nav-menu: false
show_tile: false
---

<script src="../assets/js/spc.js"></script>
<script src="../assets/js/dispersion.js"></script>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

Standard deviation is a measure of the amount of variation or dispersion of a set of values.

A low standard deviation indicates that the values tend to be close to the mean (also called the expected value) of the set, while a high standard deviation indicates that the values are spread out over a wider range.

----

## Calculator

<table>
  <tr>
    <td colspan="2">
      Sample
      <select id="value-format" onchange="update();">
        <option>Population</option>
        <option>Sample</option>
      </select>
    </td>
    <td colspan="2">
      Calculation
      <select id="calc-format" onchange="update();">
        <option>Standard Deviation</option>
        <option>Variance</option>
      </select>
    </td>
    <td colspan="2">
      Decimal Points
      <select id="dec-points" onchange="update();">
        <option selected>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
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

----

## Range

Highest minus lowest value

<code>104, 98, 90, 85, 104, 104</code><br />
<code>104 - 85 = 19</code>

----

## Standard Deviation

To find the Standard Deviation of <code>104, 98, 90, 104, 104</code>
    
<ol>
  <li>Find the average (mean) = <code>100</code></li>
  <li>How far each item is from mean<br />
    <code>(104 - 100)</code><br />
    <code>(98&nbsp; - 100)</code><br />
    <code>(90&nbsp; - 100)</code><br />
    <code>(104 - 100)</code><br />
    <code>(104 - 100)</code><br />
    <code>4, -2, -10, 4, 4</code>
  </li>
  <li>
    Take the square of the distance from the mean<br />
    <code>(4)<sup><small>2</small></sup>, (-2)<sup><small>2</small></sup>, (-10)<sup><small>2</small></sup>, (4)<sup><small>2</small></sup>, (4)<sup><small>2</small></sup></code><br />
    <code>16, 4, 100, 16, 16</code>
  </li>
  <li>
    Take the mean of these squares<br />
    <code>(16+4+100+16+16)/5 = 30.4</code> (this is the variance)
  </li>
  <li>
    Square root of the variance is the Standard Deviation!
  
    <p>
      <code><span style="white-space: nowrap; font-size:larger">
      &radic;<span style="text-decoration:overline;">&nbsp;30.4&nbsp;</span>
      </span>
      = 5.51</code>
    </p>
    <hr />
    <p>
      <b>Sample</b> Standard Deviation<br />
      <code>s = 
      <span style="white-space: nowrap; font-size:larger">
      &radic;<span style="text-decoration:overline;">&nbsp;(&Sigma;</span>(x - <span style="text-decoration:overline">x</span>)<sup><small>2</small></sup>) / (n - 1)&nbsp;
      </span></code>
    </p>
    <p>
      <b>Population</b> Standard Deviation<br />
      <code>&sigma; = 
      <span style="white-space: nowrap; font-size:larger">
      &radic;<span style="text-decoration:overline;">&nbsp;(&Sigma;</span>(x - <span style="text-decoration:overline">x</span>)<sup><small>2</small></sup>) / N&nbsp;
      </span></code>
    </p>
  </li>
</ol>

----

#### Variance

Variance was already mentioned above in Standard Deviation.  Variance is the expectation of the squared deviation of a random variable from its population mean or sample mean. In other words, variance is the difference between what is expected and what is actually accomplished.

Put in yet another perspective, variance is the square of the Standard Deviation.

There are two ways to determine variance and, therefore, two ways to determine Standard Deviation.  This depends on whether you are working with a "sample" of the total values or the entire set known as the "population".

## Symbols

<code>s</code> = sample
<code>&sigma;</code> = population

----

Variance is <code>s<sup><small>2</small></sup></code> or <code>&sigma;<sup><small>2</small></sup></code>

Therefore, variance for <b>sample</b> is<br />
<code>(&Sigma;(x - <span style="text-decoration:overline">x</span>)<sup><small>2</small></sup>) / (n - 1)</code><br />
and for <b>population</b><br />
<code>(&Sigma;(x - <span style="text-decoration:overline">x</span>)<sup><small>2</small></sup>) / N</code>

The formula equates to the following:

<ol>
  <li>First find the variance by;
    <ol>
      <li>get the mean of all the numbers<code><span style="text-decoration:overline">x</span></code></li>
      <li>for each number, minus the mean and then multiply it by itself (power of 2)<code>&Sigma;</span>(x - <span style="text-decoration:overline">x</span>)<sup><small>2</small></sup></code></li>
      <li>sum all the values</li>
      <li>divide the sum by the number of values<code>(&Sigma;</span>(x - <span style="text-decoration:overline">x</span>)<sup><small>2</small></sup>) / N</code></li>
    </ol>
    If you want the sample, rather than the whole population, then<br />
    minus 1 from the "number of values" in point d.<code>(n - 1)</code>
  </li>
  <li>Secondly, we find the standard deviation by finding the<br />
    square root of the variance.<code>&radic;<span style="text-decoration:overline;">&nbsp;(&Sigma;</span>(x - <span style="text-decoration:overline">x</span>)<sup><small>2</small></sup>) / N</code></li>
</ol>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

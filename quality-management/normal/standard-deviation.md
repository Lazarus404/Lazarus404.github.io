---
layout: page
title: Normal | Standard Deviation
description: The variation of the distribution of values
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="./" class="button special small">Normal</a>
<a href="../charts" class="button small">Charts</a>
<a href="../histograms.html" class="button small">Histograms</a>
<a href="../hypothesis-testing.html" class="button small">Hypothesis Testing</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="central-limit-theorem.html" class="button small">Central Limit Theorem</a>
<a href="central-tendency.html" class="button small">Central Tendency</a>
<a href="standard-deviation.html" class="button special small">Standard Deviation</a>
<a href="process-capability.html" class="button small">Process Capability</a>
<a href="rmsd.html" class="button small">RMSD</a>
<a href="chi.html" class="button small">Chi</a>
<a href="error-types.html" class="button small">Error Types</a>

<script src="/assets/js/spc.js"></script>
<script src="/assets/js/dispersion.js"></script>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

Standard deviation (&sigma;) is a measure of the amount of variation or dispersion of a set of values and is calculated as the square-root of variance. See <a href="#variance">Variance</a>.

A low standard deviation indicates that the values tend to be close to the mean of the set, while a high standard deviation indicates that the values are spread out over a wider range.  

Standard deviation is described as a number of z-values from the mean, from -3 to +3. If the mean is also the desired value, then values outside of this range are considered beyond control limits due to <code>special causes</code>. Any value within the 3-/+ range is considered acceptable and a deviation from the mean by <code>common causes</code>.

Each z-value represents a range of values of the statistic, whether that is the height of a person, weight of a dog or maximum speed of a car.  Thus, the broader the spead of statistical values, the larger the value each z-value represents.

<img src="/assets/images/standard-deviation.png" width="700" />

----

## Simple Explanation

Standard deviation is the amount of variability in a data set from the <code>mean</code> (<code><span style="text-decoration: overline;">x</span></code>). In this circumstance, the mean does not necessarily mean the desired value. Thus, a greater standard deviation denotes less control over the output of the product.

----

## Calculator

To find the size of the z-value.

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
      <div style="min-height: 50px; max-width: 1400px; padding: 20px; overflow-x: scroll; display: flex; flex-wrap: no-wrap;">
        <div id="result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
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

## <span id="variance">Variance</span>

Variance was already mentioned above in Standard Deviation.  Variance is the expectation of the squared deviation of a random variable from its population mean or sample mean. In other words, variance is the difference between what is expected and what is actually accomplished.

Put in yet another perspective, variance is the square of the Standard Deviation.

There are two ways to determine variance and, therefore, two ways to determine Standard Deviation.  This depends on whether you are working with a "sample" of the total values or the entire set known as the "population".

#### Symbols

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

## Errors

Variations, and thus standard deviations, are inevitable occurances even if all values in a given sample or population should be equivelent, since nothing is faultless.  Such deviations, when attributed to product manufacturing, may be deemed as errors.  Typically, errors are classified as two groups.

### Random Errors

A random error is a component of the overall error which may vary in an unpredicatble way.  Such errors may occur due to a number of circumstances, such as humidity, temperature or vibration of the manufacturing equipment. When such errors occur, no action should be taken to compensate. However, produce of invalid qualities (special causes) should be discarded as necessary.

### Systematic Errors

Systematic errors are variations that have a specific underlying cause that result in a shift of the enitre data set.  For instance, if a control chart anticipates the height of screws to be between 5.5 and 5.55cm, but due to debris on the manufacturing device, all screws are 7mm smaller than they should be, resulting in screw heights typically being between 4.8 and 4.85cm.  When these errors occur, if the cause of the shift can be determined, then it should be corrected.

### Outlying Errors

Occasionally, a value may be plotted beyond the 3 standard deviation limit. If this is a rare occurrance, then it may be deemed an outlyer. If the cause of this error is known, such as incorrect data entry, then the value may be removed. However, if the cause is unknown, it must be kept withiin the larger data set, but must be documented.

<a href="/quality-management">&#x2190; Back to Quality Management</a>

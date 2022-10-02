---
layout: page
title: Control Charts | Poisson Probability Distributions
description: Choosing your chart and distribution
image: nil
nav-menu: false
show_tile: false
---

<script src="../../assets/js/spc.js"></script>
<script src="../../assets/js/poisson.js"></script>

<a href="binomial-probability-distributions.html" class="button small">Binomial Probability Distributions</a>
<a href="poisson-probability-distributions.html" class="button special small">Poisson Probability Distributions</a>
<a href="normal-probability-distributions.html" class="button small">Normal Probability Distributions</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

## Poisson Probability Calculator

<table>
  <tr>
    <td colspan="2">
      Cumulative?
      <select id="cumulative" onchange="update();">
        <option value="2">Yes &leq;</option>
        <option value="1">Yes &geq;</option>
        <option value="0">No</option>
      </select>
    </td>
    <td colspan="2">
      Probability of Success (x)
      <input type="text" id="data-x" onchange="update();" />
    </td>
    <td colspan="2">
      Mean Successes (&micro;)
      <input type="text" id="data-micro" onchange="update();" />
    </td>
  </tr>
  <tr>
    <td colspan="6" style="max-width: 100px;">
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

## Poisson Theory

Poisson Distribution poses similarities to Binomial Distribution in that;

- Both are for a discrete distribution
- Both measure the number of successes

However, Poisson Distribution differs in that the possibilities of success are infinite.

Note, here, that "success" doesn't mean "good".  It is merely the subject of interest in the current context. Ergo, "success" could be the number of defected items in the context or the number of missing items in a crate.

If you have a book with 500 pages and you wanted to find the probability of pages with an error, you would use Binomial Distribution, since you would be attempting to find a whole value between 0 and 500. A page either has errors or it doesn't!

Now, if you wanted to find the probability of the number of errors throughout the book, unconstrained by pages, then you would use Poisson Distribution.  The book may have 1 error, 500 errors or, conceiveably, 1 Million errors.  The value is, potentially, infinite.

A poisson experiment has the following properties:

- The experiment results in outcomes that can be classified as successes or failures.
- The average number of successes (&micro;) that occurs in a specified region is unknown.
- Outcomes are random. The occurrance of one outcome does not influence the chance of another outcome of interese.
- The outcomes of interest are rare relative to the possible outcomes. For example, road accidents, queue at the counter, number of defects.

The formula to determine <code>x</code> number of successes with Poisson Distribution is:

<code>P(x, &micro;) = e<sup>-&micro;</sup> &bull; (&micro;<sup>x</sup> / x!)</code>

where:

- <code>e</code> is the base of the natural logarithm system; a constant equal to approximately 2.71828.
- <code>&micro;</code> is the mean number of successes that occur in a specified region.
- <code>x</code> is the actual number of successes that occur in a specified region.
- <code>P(x; &micro;)</code> is the Poisson Distribution that has exactly <code>x</code> successes occurring in a Poisson experiment when the mean number of successes is <code>&micro;</code>.

## Poisson Distribution

Finding the Standard Deviation for Poisson is a little different.  You will need to know how to do this for <code>c</code> and <code>u</code> charts.

#### Mean (&micro;)

Quite simply, the mean is the &micro;. We already know it prior to calculation.

#### Variance (also &micro;)

The variance is also the &micro;.

#### Standard Deviation

<code>&radic;<span style="text-decoration:overline;"> &micro;</span></code>

Thus standard deviation is the square-root of the variance, as with Binomial etc.

<a href="/quality-management">&#x2190; Back to Quality Management</a>

---
layout: page
title: Probability Distributions | Binomial
description: Choosing your distribution
image: nil
nav-menu: false
show_tile: false
---

<script src="../assets/js/spc.js"></script>
<script src="../assets/js/binomial.js"></script>

<a href="binomial.html" class="button special small">Binomial</a>
<a href="poisson.html" class="button small">Poisson</a>
<a href="normal" class="button small">Normal</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

## Binomial Probability Calculator

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
      Number of Successes
      <input type="text" id="data-size" onchange="update();" />
    </td>
    <td colspan="2">
      Number of Trials
      <input type="text" id="data-num" onchange="update();" />
    </td>
    <td colspan="2">
      Probability of Success on a Trial
      <input type="text" id="data-prob" onchange="update();" />
    </td>
  </tr>
  <tr>
    <td colspan="8" style="max-width: 100px;">
      <button onclick="update();">Update</button>
    </td>
  </tr>
  <tr>
    <td colspan="8">
      <div style="min-height: 50px; max-width: 1400px; padding: 20px; overflow-x: scroll; display: flex; flex-wrap: no-wrap;">
        <div id="result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
    </td>
  </tr>
</table>

----

## Binomial Theory

A binomial experiment has the following properties:

- The experiment consists of _n_ repeated trials
- Each trial can result in just two possible outcomes. We call one of those outcomes a success and the other a failure.
- The probability of success, denoted by _p_, is the same on every trial.
- The trials are independent; that is, the outcome of one trial does not affect the outcome of other trials.

Thus, if we equate this to the flipping of a coin, where getting "heads" is a "success", then the probabilities of both success and failure should be <code>1 / 2</code>.

Now, if you flip a coin 100 times, what is the probability that you would get 43 heads?  To answer that, there is a formula.

<code>P(x) = <sup>n!</sup>&frasl;<sub>x!(n-x)!</sub> &bull; p<sup>x</sup> &bull; (1-p)<sup>n-x</sup>

Here, <code>n!</code> means <code>Factorial n</code>. A Factorial is where you recursively multiply a number by decreasing values of itself.  For instance, the Factorial of <code>5</code> is <code>5 x 4 x 3 x 2 x 1</code>.

<code>P</code> means the probability.

<code>n</code> is the number of trials.

<code>x</code> is the number of successes we are interested in.

Calculating will provide you with the probability that success will occur <code>x</code> times over <code>n</code> tries. However, what if you don't want to know the probability of receiving a specific number of successes, but rather a number of successes or less?

To do this, you simply use <code>cumulative</code> calculating, whereby you calculate for all the potential success outcomes and add them together.  Thus, if you want to know the probability of getting 5 heads or less from 10 tries, then perform the calculation with <code>P(5) + P(4) + P(3) + P(2) + P(1) + P(0)</code>.  Note that calculating zero successes must also be carried out, since this is a possibility. 

## Binomial Distribution

Finding the Standard Deviation for Binomials is a little different.  You will need to know how to do this for <code>p</code> and <code>np</code> charts.

#### Mean (&micro;<sub>x</sub>)

<code>n &bull; p</code>

Thus, the mean is probability times the number of trials.

#### Variance (&sigma;<sup>2</sup><sub>x</sub>)

<code>n &bull; p &bull; (1 - p)</code>

Thus, the variance is mean times one minus probability.

#### Standard Deviation (&sigma;<sub>x</sub>)

<code>&radic;<span style="text-decoration:overline;"> n &bull; p &bull; (1 - p)</span></code>

Thus standard deviation is the square-root of the variance.

<a href="/quality-management">&#x2190; Back to Quality Management</a>

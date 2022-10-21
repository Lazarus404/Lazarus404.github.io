---
layout: page
title: Normal | Central Limit Theorem
description: The tendancy for values to approximate a normal distribution
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="./" class="button special small">Normal</a>
<a href="../charts" class="button small">Charts</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="central-limit-theorem.html" class="button special small">Central Limit Theorem</a>
<a href="central-tendency.html" class="button small">Central Tendency</a>
<a href="standard-deviation.html" class="button small">Standard Deviation</a>
<a href="process-capability.html" class="button small">Process Capability</a>
<a href="rmsd.html" class="button small">RMSD</a>
<a href="chi.html" class="button small">Chi</a>
<a href="error-types.html" class="button small">Error Types</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

Not to be confused with <code>Central Tendency</code>, is where the mean of the sample population will be approximately equal to the mean of the whole population.

Central Limit Theorem is the notion that the distribution of a sample variable approximates a Normal Distribution as the sample size becomes larger, assuming that all samples are identical in size, of a finite variance, and regardless of the population's actual distribution shape.  Thus, the data may not start out as a normal distribution, but by repeatedly sampling, the "average of averages" results in a Normal Distribution.

The premise of CLT is:

- For almost all populations, the sampling distribution of the mean can be approximated closely by a normal distribution, provided the sample size is sufficiently large.
- If a variable has a mean of <code>&micro;</code> and a variance of <code>&sigma;<sup>2</sup></code>, as the size <code>n</code> increases, the sample mean approaches a normal distribution with <code>&micro;<sub><span style="text-decoration: overline;">x</span></sub> and variance <code>&sigma;(<sup>2</sup>&frasl;<sub>x</sub>)</code>.

Therefore;

- The "average of averages" is simply that <code>&micro;<sub><span style="text-decoration: overline;">x</span></sub> = &micro;</code>.
- The variance of the sample mean's will be the variance of the population divided by the total sample size <code>&sigma;<sup>2</sup><sub><span style="text-decoration: overline;">x</span></sub> = <code><sup>&sigma;<sup>2</sup><sub>x</sub></sup>&frasl;<sub>n</sub></code>. Or, put another way, <code>&sigma;<sub><span style="text-decoration: overline;">x</span></sub> = <sup>&sigma;<sub>x</sub></sup>&frasl;<sub>&radic;<span style="text-decoration: overline;">n</span></sub></code>. Thus, "the stardard deviation of sample averages / means" is equal to "the standard deviation of the population" devided by "the square-root of <code>n</code>". 

<img src="/assets/images/clt.png" width="1000" />

----

## Simple Explanation

Central Limit Theorem calculates the mean or average of the population or sample.

<a href="/quality-management">&#x2190; Back to Quality Management</a>

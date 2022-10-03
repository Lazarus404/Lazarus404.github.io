---
layout: page
title: Control Charts | Central Limit Theorem
description: Choosing your chart and distribution
image: nil
nav-menu: false
show_tile: false
---

<a href="binomial-probability-distributions.html" class="button small">Binomial Probability Distributions</a>
<a href="poisson-probability-distributions.html" class="button small">Poisson Probability Distributions</a>
<a href="normal-probability-distributions.html" class="button small">Normal Probability Distributions</a>
<a href="central-limit-theorem.html" class="button special small">Central Limit Theorem</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

Central Limit Theorem is the notion that the distribution of a sample variable approximates a Normal Distribution as the sample size becomes larger, assuming that all samples are identical in size, of a finite variance, and regardless of the population's actual distribution shape.  Thus, the data may not start out as a normal distribution, but by repeatedly sampling, the "average of averages" results in a Normal Distribution.

The premise of CLT is:

- For almost all populations, the sampling distribution of the mean can be approximated closely by a normal distribution, provided the sample size is sufficiently large.
- If a variable has a mean of <code>&micro;</code> and a variance of <code>&sigma;<sup>2</sup></code>, as the size <code>n</code> increases, the sample mean approaches a normal distribution with <code>&micro;<sub><span style="text-decoration: overline;">x</span></sub> and variance <code>&sigma;(<sup>2</sup>&frasl;<sub>x</sub>)</code>.

Therefore;

- The "average of averages" is simply that <code>&micro;<sub><span style="text-decoration: overline;">x</span></sub> = &micro;</code>.
- The variance of the sample mean's will be the variance of the population divided by the total sample size <code>&sigma;<sup>2</sup><sub><span style="text-decoration: overline;">x</span></sub> = <code><sup>&sigma;<sup>2</sup><sub>x</sub></sup>&frasl;<sub>n</sub></code>. Or, put another way, <code>&sigma;<sub><span style="text-decoration: overline;">x</span></sub> = <sup>&sigma;<sub>x</sub></sup>&frasl;<sub>&radic;<span style="text-decoration: overline;">n</span></sub></code>.

<img src="/assets/images/clt.png" width="1000" />

<a href="/quality-management">&#x2190; Back to Quality Management</a>

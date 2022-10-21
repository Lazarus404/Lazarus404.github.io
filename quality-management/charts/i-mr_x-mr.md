---
layout: page
title: Charts | I-MR / X-MR Theory
description: Representing individual moving range in a chart
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="../normal" class="button small">Normal</a>
<a href="./" class="button special small">Charts</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button special small">I-MR / X-MR</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

I-MR charts are the same as X-Bar R charts. However, I-MR charts work with a subgroup of 1.  When calculating, though, we do so with a subgroup of 2.  This is because, for each calculation, we compare the sample value with the next sample value.  Thus, with 5 sets of samples, we take the range of 1 & 2 for the calculation of set 1, the range of 2 & 3 for the calculation of set 2 and so on.  This is known as the Moving Range (<code>MR</code>).

## Control Limits

Calculating control limits for continuous charts is a little more difficult than for discrete data such as Poisson or Binomial. Here, we calculate differently for each of the two charts.

#### I Chart

* Control Line (CL) = <span style="text-decoration: overline;">X</span> = <code>&Sigma;<sup><span style="text-decoration: overline;">X</span><sub>i</sub></sup>/<sub>n</sub></code>
* Upper Control Limit (UCL) = <code><span style="text-decoration: overline;">X</span> + 3<sup><span style="text-decoration: overline;">MR</span></sup>/<sub>d<sub>2</sub></sub></code>
* Lower Control Limit (LCL) = <code><span style="text-decoration: overline;">X</span> - 3<sup><span style="text-decoration: overline;">MR</span></sup>/<sub>d<sub>2</sub></sub></code>

#### <span style="text-decoration: overline;">MR</span> Chart

* Control Line (CL) = <span style="text-decoration: overline;">MR</span> = <code>&Sigma;<sup><span style="text-decoration: overline;">MR</span><sub>i</sub></sup>/<sub>n</sub></code>
* Upper Control Limit (UCL) = <code>D<sub>4</sub><span style="text-decoration: overline;">MR</span></code>
* Lower Control Limit (LCL) = <code>D<sub>3</sub><span style="text-decoration: overline;">MR</span></code>

#### Determinine d<sub>2</sub>, D<sub>4</sub> and D<sub>3</sub>

Calculating the necessary values for <code>d<sub>2</sub></code>, <code>D<sub>4</sub></code> and <code>D<sub>3</sub></code> is simply a matter of looking it up in the following table, provided you know the sample size <code>n</code>

<table style="width: 200px;">
  <tr>
    <td>n</td>
    <td>d<sub>2</sub></td>
    <td>D<sub>4</sub></td>
    <td>D<sub>3</sub></td>
  </tr>
  <tr>
    <td>2</td>
    <td>1.128</td>
    <td>3.267</td>
    <td>0</td>
  </tr>
</table>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

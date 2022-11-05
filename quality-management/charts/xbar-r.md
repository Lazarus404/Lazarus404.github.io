---
layout: page
title: Charts | X-Bar R Theory
description: Representing average-range in a chart
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="../normal" class="button small">Normal</a>
<a href="./" class="button special small">Charts</a>
<a href="../hypothesis-testing.html" class="button small">Hypothesis Testing</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="p.html" class="button small">p Chart</a>
<a href="pn.html" class="button small">pn Chart</a>
<a href="u.html" class="button small">u Chart</a>
<a href="c.html" class="button small">c Chart</a>
<a href="xbar-r.html" class="button special small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

X-Bar R charts consist of two charts; a chart for <span style="text-decoration: overline;">X</span> (<code>X-Bar</code>) and a chart for the range (<code>R</code>).

## Control Limits

Calculating control limits for continuous charts is a little more difficult than for discrete data such as Poisson or Binomial. Here, we calculate differently for each of the two charts.

#### <span style="text-decoration: overline;">X</span> Chart

* Control Line (CL) = <span style="text-decoration: overline;">X</span> = <code>&Sigma;<sup><span style="text-decoration: overline;">X</span><sub>i</sub></sup>/<sub>n</sub></code>
* Upper Control Limit (UCL) = <code><span style="text-decoration: overline;">X</span> + A<sub>2</sub><span style="text-decoration: overline;">R</span></code>
* Lower Control Limit (LCL) = <code><span style="text-decoration: overline;">X</span> - A<sub>2</sub><span style="text-decoration: overline;">R</span></code>

#### <span style="text-decoration: overline;">R</span> Chart

* Control Line (CL) = <span style="text-decoration: overline;">R</span> = <code>&Sigma;<sup><span style="text-decoration: overline;">R</span><sub>i</sub></sup>/<sub>n</sub></code>
* Upper Control Limit (UCL) = <code>D<sub>4</sub><span style="text-decoration: overline;">R</span></code>
* Lower Control Limit (LCL) = <code>D<sub>3</sub><span style="text-decoration: overline;">R</span></code>

#### Determinine A<sub>2</sub>, D<sub>4</sub> and D<sub>3</sub>

Calculating the necessary values for <code>A<sub>2</sub></code>, <code>D<sub>4</sub></code> and <code>D<sub>3</sub></code> is simply a matter of looking it up in the following table, provided you know the sample size <code>n</code>

<table style="width: 200px;">
  <tr>
    <td>n</td>
    <td>A<sub>2</sub></td>
    <td>D<sub>4</sub></td>
    <td>D<sub>3</sub></td>
  </tr>
  <tr>
    <td>2</td>
    <td>1.880</td>
    <td>3.267</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1.023</td>
    <td>2.575</td>
    <td>0</td>
  </tr>
  <tr>
    <td>4</td>
    <td>0.729</td>
    <td>2.282</td>
    <td>0</td>
  </tr>
  <tr>
    <td>5</td>
    <td>0.577</td>
    <td>2.115</td>
    <td>0</td>
  </tr>
  <tr>
    <td>6</td>
    <td>0.483</td>
    <td>2.004</td>
    <td>0</td>
  </tr>
  <tr>
    <td>7</td>
    <td>0.419</td>
    <td>1.924</td>
    <td>0.076</td>
  </tr>
  <tr>
    <td>8</td>
    <td>0.373</td>
    <td>1.864</td>
    <td>0.136</td>
  </tr>
  <tr>
    <td>9</td>
    <td>0.337</td>
    <td>1.816</td>
    <td>0.184</td>
  </tr>
  <tr>
    <td>10</td>
    <td>0.308</td>
    <td>1.780</td>
    <td>0.220</td>
  </tr>
  <tr>
    <td>11</td>
    <td>0.285</td>
    <td>1.744</td>
    <td>0.256</td>
  </tr>
  <tr>
    <td>12</td>
    <td>0.266</td>
    <td>1.717</td>
    <td>0.283</td>
  </tr>
</table>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

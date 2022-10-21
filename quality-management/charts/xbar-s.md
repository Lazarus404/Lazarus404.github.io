---
layout: page
title: Charts | X-Bar s Theory
description: Representing average-standard deviation in a chart
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
<a href="p.html" class="button small">p Chart</a>
<a href="pn.html" class="button small">pn Chart</a>
<a href="u.html" class="button small">u Chart</a>
<a href="c.html" class="button small">c Chart</a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button special small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

X-Bar s charts consist of two charts; a chart for <span style="text-decoration: overline;">X</span> (<code>X-Bar</code>) and a chart for the standard deviation (<code>s</code>).

## Control Limits

Calculating control limits for continuous charts is a little more difficult than for discrete data such as Poisson or Binomial. Here, we calculate differently for each of the two charts.

#### <span style="text-decoration: overline;">X</span> Chart

* Control Line (CL) = <span style="text-decoration: overline;">X</span> = <code>&Sigma;<sup><span style="text-decoration: overline;">X</span><sub>i</sub></sup>/<sub>n</sub></code>
* Upper Control Limit (UCL) = <code><span style="text-decoration: overline;">X</span> + A<sub>3</sub><span style="text-decoration: overline;">s</span></code>
* Lower Control Limit (LCL) = <code><span style="text-decoration: overline;">X</span> - A<sub>3</sub><span style="text-decoration: overline;">s</span></code>

#### <span style="text-decoration: overline;">s</span> Chart

* Control Line (CL) = <span style="text-decoration: overline;">s</span> = <code>&Sigma;<sup><span style="text-decoration: overline;">s</span><sub>i</sub></sup>/<sub>n</sub></code>
* Upper Control Limit (UCL) = <code>B<sub>4</sub><span style="text-decoration: overline;">S</span></code>
* Lower Control Limit (LCL) = <code>B<sub>3</sub><span style="text-decoration: overline;">S</span></code>

#### Determinine A<sub>3</sub>, B<sub>4</sub> and B<sub>3</sub>

Calculating the necessary values for <code>A<sub>3</sub></code>, <code>B<sub>4</sub></code> and <code>B<sub>3</sub></code> is simply a matter of looking it up in the following table, provided you know the sample size <code>n</code>

<table style="width: 200px;">
  <tr>
    <td>n</td>
    <td>A<sub>3</sub></td>
    <td>B<sub>4</sub></td>
    <td>B<sub>3</sub></td>
  </tr>
  <tr>
    <td>2</td>
    <td>2.659</td>
    <td>0</td>
    <td>3.267</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1.954</td>
    <td>0</td>
    <td>2.568</td>
  </tr>
  <tr>
    <td>4</td>
    <td>1.628</td>
    <td>0</td>
    <td>2.266</td>
  </tr>
  <tr>
    <td>5</td>
    <td>1.427</td>
    <td>0</td>
    <td>2.089</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1.287</td>
    <td>0.030</td>
    <td>1.970</td>
  </tr>
  <tr>
    <td>7</td>
    <td>1.182</td>
    <td>0.118</td>
    <td>1.882</td>
  </tr>
  <tr>
    <td>8</td>
    <td>1.099</td>
    <td>0.185</td>
    <td>1.815</td>
  </tr>
  <tr>
    <td>9</td>
    <td>1.032</td>
    <td>0.239</td>
    <td>1.761</td>
  </tr>
  <tr>
    <td>10</td>
    <td>0.975</td>
    <td>0.284</td>
    <td>1.716</td>
  </tr>
  <tr>
    <td>11</td>
    <td>0.927</td>
    <td>0.321</td>
    <td>1.679</td>
  </tr>
  <tr>
    <td>12</td>
    <td>0.886</td>
    <td>0.354</td>
    <td>1.646</td>
  </tr>
</table>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

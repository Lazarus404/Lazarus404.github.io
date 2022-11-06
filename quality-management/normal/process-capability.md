---
layout: page
title: Normal | Process Capability
description: Is the data capable?
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
<a href="standard-deviation.html" class="button small">Standard Deviation</a>
<a href="process-capability.html" class="button special small">Process Capability</a>
<a href="rmsd.html" class="button small">RMSD</a>
<a href="chi.html" class="button small">Chi</a>
<a href="error-types.html" class="button small">Error Types</a>

<script src="/assets/js/spc.js"></script>
<script src="/assets/js/process-capability.js"></script>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

The measure of the performance or capability of a model is the percentage of its rejects. We can measure this using Process Capability.

<img src="/assets/images/process-capability.png" width="500" />

Process Capability can be measured as the ratio between the specified tolerance (T) and the process variation (<code>&#xB1;3&sigma;</code>), otherwise known as the Process Capability Index <code>C<sub>p</sub></code>

<code>C<sub>p</sub> = <sup>T</sup>/<sub>V</sub> = <sup>(USL - LSL)</sup>/<sub>6&sigma;</sub></code>

Where;

<code>C<sub>p</sub></code> < 1 -- Unsatisfactory<br />
1 <= <code>C<sub>p</sub></code> <= 1.33 -- Capable<br />
<code>C<sub>p</sub></code> > 1.33 -- Very good

It is possible for a <code>C<sub>p</sub></code> to be > 1, yet still have poor performance, if the <code><span style="text-decoration: overline;">X</span></code> has shifted from the Tolerance middle (<code>T<sub>m</sub></code>).

<img src="/assets/images/process-capability-shift.png" width="500" />

We can account for this using a Process Capability correction <code>C<sub>pk</sub></code>

<code>C<sub>pk</sub> = C<sub>p</sub> * (1 - k)</code>

<code>k = <sup>|T<sub>m</sub> - <span style="text-decoration: overline;">X</span>|</sup>/<sub>(T/2)</sub></code> where <code>T<sub>m</sub> = (USL + LSL) / 2</code>

Above, everything withiin the pipes are considered absolute.  Thus, if <code>T<sub>m</sub> - <span style="text-decoration: overline;">X</span></code> is a negative value, you simply treat it as a positive value.

With <code>C<sub>pk</sub></code> availble; if <code>C<sub>p</sub></code> and <code>C<sub>pk</sub></code> are both > 1, then the performance is good.

If <code>C<sub>p</sub></code> > 1, but <code>C<sub>pk</sub></code> < 1, then the Process Capability is good, but the process setting is incorrect leading to poor performance.

If, however, both <code>C<sub>p</sub></code> and <code>C<sub>pk</sub></code> < 1, then the process has no potential and the performance will be bad.

<code>C<sub>pk</sub></code> can be negative if the average of the process output is shifted more than half the tolerance, or if the <code>average</code> is out of the tolerance.

## Six Sigma Quality

If process variation can be reduced to half of the design tolerance (<code>C<sub>p</sub></code> = 2.0) then 12 &sigma;'s should be able to fit within the original tolerance.

<code>C<sub>p</sub> = <sup>T</sup>/<sub>6&sigma;</sub></code> therefore <code>&sigma; = <sup>T</sup>/<sub>12</sub></code>

If this is achievable, then we must check that the mean <code><span style="text-decoration: overline;">X</span></code> is within <code>&#xB1;1.5&sigma;</code> from tolerance middle <code>T<sub>m</sub></code>.

In some cases, controlling the process to stay centred on the target is less expensive than reducing the `process variation`.

The concept of 6 Sigma Quality is closely related to the process capability indices Cp and Cpk (see <a href="chi.html">Chi</a>).

The number of sigmas that will fit between the process mean and the nearest specification limit is likely to drop over time, compared to an initial short-term study. If the mean of the process drifts away from the centre of the tolerance, the distance between the mean and the nearest specification limit will be reduced and fewer standard deviations will fit between them.

Looking at the table below, if <code>6&sigma;</code> can be achieved with a shift in the mean of exactly 1.5, then the loss calculated at that rate will average 3.4 per million. 

<table>
  <tr>
    <td rowspan="2" width="150" style="text-align: center;">off-centre sigma</td>
    <td colspan="7" style="text-align: center;">Sigma Quality Level</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3.5</td>
    <td>4</td>
    <td>4.5</td>
    <td>5</td>
    <td>5.5</td>
    <td>6</td>
  </tr>
  <tr>
    <td>0</td>
    <td>2700</td>
    <td>465</td>
    <td>63</td>
    <td>7</td>
    <td>0.6</td>
    <td>0.04</td>
    <td>0.002</td>
  </tr>
  <tr>
    <td>0.25</td>
    <td>3557</td>
    <td>665</td>
    <td>99</td>
    <td>12</td>
    <td>1.1</td>
    <td>0.08</td>
    <td>0.005</td>
  </tr>
  <tr>
    <td>0.5</td>
    <td>6442</td>
    <td>1382</td>
    <td>236</td>
    <td>32</td>
    <td style="background-color: green;">3.4</td>
    <td>0.29</td>
    <td>0.02</td>
  </tr>
  <tr>
    <td>0.75</td>
    <td>12313</td>
    <td>2990</td>
    <td>578</td>
    <td>88</td>
    <td>11</td>
    <td>1.0</td>
    <td>0.1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>22782</td>
    <td>6213</td>
    <td>1350</td>
    <td>233</td>
    <td>32</td>
    <td style="background-color: green;">3.4</td>
    <td>0.3</td>
  </tr>
  <tr>
    <td>1.25</td>
    <td>40070</td>
    <td>12225</td>
    <td>2980</td>
    <td>577</td>
    <td>88</td>
    <td>11</td>
    <td>0.1</td>
  </tr>
  <tr>
    <td>1.5</td>
    <td>66811</td>
    <td>22750</td>
    <td>6210</td>
    <td>1350</td>
    <td>233</td>
    <td>32</td>
    <td style="background-color: green;">3.4</td>
  </tr>
  <tr>
    <td>1.75</td>
    <td>105651</td>
    <td>40059</td>
    <td>12224</td>
    <td>2980</td>
    <td>577</td>
    <td>88</td>
    <td>11</td>
  </tr>
  <tr>
    <td>2</td>
    <td>158656</td>
    <td>66807</td>
    <td>22750</td>
    <td>6210</td>
    <td>1350</td>
    <td>233</td>
    <td>32</td>
  </tr>
</table>

----

## Calculator

<table>
  <tr>
    <td colspan="2">
      Tolerance
      <input type="text" id="data-tolerance" />
    </td>
    <td colspan="2">
      Plus
      <input type="text" id="data-plus" />
    </td>
    <td colspan="2">
      Minus
      <input type="text" id="data-minus" />
    </td>
  </tr>
  <tr>
    <td colspan="2">
      Standard Deviation
      <input type="text" id="data-sd" />
    </td>
    <td colspan="2">
      Mean
      <input type="text" id="data-mean" />
    </td>
    <td colspan="2" style="max-width: 100px;">
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


<a href="/quality-management">&#x2190; Back to Quality Management</a>

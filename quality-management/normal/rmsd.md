---
layout: page
title: Normal | Root-Mean-Square Deviation (RMSD/RMSE)
description: Comparison of values with a model
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="./" class="button special small">Normal</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="central-limit-theorem.html" class="button small">Central Limit Theorem</a>
<a href="central-tendency.html" class="button small">Central Tendency</a>
<a href="standard-deviation.html" class="button small">Standard Deviation</a>
<a href="process-capability.html" class="button small">Process Capability</a>
<a href="rmsd.html" class="button special small">RMSD</a>
<a href="chi.html" class="button small">Chi</a>
<a href="error-types.html" class="button small">Error Types</a>

<script src="/assets/js/spc.js"></script>
<script src="/assets/js/rmsd.js"></script>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

RMSD / RMSE is a calculation to easily find the difference between a predicted model and actual observed values.

There are two routes to achieve this.  The more complex (root-mean-square error) requires a prediction and observation of equal length, where;

<code>RMSE = &radic;<span style="border-top: solid 1px white; padding-top: 4px;">&nbsp;&Sigma;(A<sub>i</sub> - B<sub>i</sub>)<sup><small>2</small></sup> / n</span></code>

The simpler (root-mean-square deviation) execution swaps the predicted data set for a singular nominal value;

<code>RMSD = &radic;<span style="border-top: solid 1px white; padding-top: 4px;">&nbsp;&Sigma;(X<sub>i</sub> - X<sup>nom</sup>)<sup><small>2</small></sup> / n</span></code>

----

## Calculator

To use, enter the observed values as a comma-delimited or new-line-delimited list. The Predicted values field may be a list with size equal to that of the observed list (RMSE) or a single nominal value (RMSD).

<table>
  <tr>
    <td colspan="6">
      <textarea id="data-obs" onchange="update();" placeholder="Observed values here"></textarea>
    </td>
  </tr>
  <tr>
    <td colspan="5">
      <textarea id="data-pred" onchange="update();" placeholder="Predicted values here"></textarea>
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

<a href="/quality-management">&#x2190; Back to Quality Management</a>
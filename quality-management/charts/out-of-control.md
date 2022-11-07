---
layout: page
title: Charts | Out-of-Control
description: Determining when data is out-of-control
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="../normal" class="button small">Normal</a>
<a href="./" class="button special small">Charts</a>
<a href="../histograms.html" class="button small">Histograms</a>
<a href="../hypothesis-testing.html" class="button small">Hypothesis Testing</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="p.html" class="button small">p Chart</a>
<a href="pn.html" class="button small">pn Chart</a>
<a href="u.html" class="button small">u Chart</a>
<a href="c.html" class="button small">c Chart</a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>
<a href="out-of-control.html" class="button special small">Out-of-Control</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

## Typical Out-of-Control Conditions / Patterns

- Points outside of limits (freaks)
- Less than 2/3 of all points in the middle 1/3 of control limit zone
- 7 consecutive point all above or below CL
- 8 consecutive points upward or downwards

- If any of the above 4 tests fail, process is out-of-control for `Range`. Investigate for special causes.
- If all 4 tests pass, process is in-control for `Range`. Interpret for control on <code><span style="text-decoration: overline;">X</span></code> chart.
- If all 4 tests pass in <code><span style="text-decoration: overline;">X</span></code> chart <span style="text-decoration: underline;">as well</span>, then the process is in-control.

## When Dealing with Control Charts

- What are the relationships between Control Limits and Specification Limits?  Control Limits should be within the Specification Limits.
- Is it possible to have point within the Control Limits, but outside the Specification Limits?  Yes, because the formula for creating Control Limits to not encompass the Specification Limits.  For instance, the mean could be shifted.

<a href="/quality-management">&#x2190; Back to Quality Management</a>

---
layout: page
title: Charts | c Chart
description: The defects inspected are of constant size
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
<a href="c.html" class="button special small">c Chart</a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

A c chart is used when we're looking a the `number of defects` and the properties of interest are `constant`.  For instance, you may be tallying the number of cracks in products that are otherwise identical.  This is where c charts are useful.

## Control Limits

Since the subgroup size is constant, so the upper and lower control limits (UCL & LCL) are also constant.  Remember, c charts represent a `Poisson` distribution.  Therefore, the <a href="../poisson.html">Poisson calculations apply</a>.

* Control Line (CL) = <code><span style="text-decoration: overline;">c</span> = <sup>total defects for all subgroups (c)</sup>/<sub>total units for all subgroups (n)</sub> = <sup>&Sigma;c</sup>/<sub>&Sigma;n</sub></code>
* Upper Control Limit (UCL) = <code><span style="text-decoration: overline;">c</span> + 3&radic;<span style="text-decoration: overline;"> </span>&nbsp;<span style="text-decoration: overline;">c</span></code>
* Lower Control Limit (LCL) = <code><span style="text-decoration: overline;">c</span> - 3&radic;<span style="text-decoration: overline;"> </span>&nbsp;<span style="text-decoration: overline;">c</span></code>


<a href="/quality-management">&#x2190; Back to Quality Management</a>
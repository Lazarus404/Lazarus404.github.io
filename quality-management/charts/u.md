---
layout: page
title: Charts | u Chart
description: The defects inspected are of variable size
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
<a href="u.html" class="button special small">u Chart</a>
<a href="c.html" class="button small">c Chart</a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

A u chart is used when we're looking a the `number of defects` and the properties of interest are `variable`.  For instance, you may check the number of pin-holes in enamel wire or the unevenness of a material.  This is where u charts are useful.

## Control Limits

Since the subgroup size is NOT constant, so the upper and lower control limits (UCL & LCL) are NOT constant, either.  So, for every sample, there will be a separate upper and lower control limit.  This results in having a `narrower` control limit the larger your sample size is.  Remember, u charts represent a `Poisson` distribution.  Therefore, the <a href="../poisson.html">Poisson calculations apply</a>.

* Control Line (CL) = <code><span style="text-decoration: overline;">u</span> = <sup>total defects for all subgroups (c)</sup>/<sub>total units for all subgroups (n)</sub> = <sup>&Sigma;c</sup>/<sub>&Sigma;n</sub></code>
* Upper Control Limit (UCL) = <code><span style="text-decoration: overline;">u</span> + 3&radic;<span style="text-decoration: overline;"> </span>&nbsp;<sup><span style="text-decoration: overline;">u</span></sup>&frasl;<sub>n</sub></code>
* Lower Control Limit (LCL) = <code><span style="text-decoration: overline;">u</span> - 3&radic;<span style="text-decoration: overline;"> </span>&nbsp;<sup><span style="text-decoration: overline;">u</span></sup>&frasl;<sub>n</sub></code>


<a href="/quality-management">&#x2190; Back to Quality Management</a>
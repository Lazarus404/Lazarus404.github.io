---
layout: page
title: Charts | p Chart
description: Number of defectives when subgroup size is variable
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
<a href="p.html" class="button special small">p Chart</a>
<a href="pn.html" class="button small">pn Chart</a>
<a href="u.html" class="button small">u Chart</a>
<a href="c.html" class="button small">c Chart</a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

A p chart is used when we're looking a the `number of defectives` and the subgroup size is `variable`.  Here, the distribution is `Binomial`, since an item is either defective or it's not.  Two states!  For instance, you may check a sample of your product daily and determine the number of defective items in that sample, but the sample size might not be the same amount each day.  This is where p charts are useful.

## Control Limits

Since the subgroup size is NOT constant, so the upper and lower control limits (UCL & LCL) are NOT constant, either.  So, for every sample, there will be a separate upper and lower control limit.  This results in having a `narrower` control limit the larger your sample size is.  Remember, p charts represent a `Binomial` distribution.  Therefore, the <a href="../binomial.html">Binomial calculations apply</a>.

* Control Line (CL) = <span style="text-decoration: overline;">p</span> = <code><sup>total defectives</sup>/<sub>total inspected</sub> = <sup>&Sigma;pn</sup>/<sub>&Sigma;n</sub></code>
* Upper Control Limit (UCL) = <code><span style="text-decoration: overline;">p</span> + 3&radic;<span style="text-decoration: overline;"> </span>(<sup><span style="text-decoration: overline;">p</span>(1 - <span style="text-decoration: overline;">p</span>)</sup>&frasl;<sub>n</sub>)</code>
* Lower Control Limit (LCL) = <code><span style="text-decoration: overline;">p</span> - 3&radic;<span style="text-decoration: overline;"> </span>(<sup><span style="text-decoration: overline;">p</span>(1 - <span style="text-decoration: overline;">p</span>)</sup>&frasl;<sub>n</sub>)</code>


<a href="/quality-management">&#x2190; Back to Quality Management</a>
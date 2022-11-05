---
layout: page
title: Charts | pn Chart
description: Number of defectives when subgroup size is constant
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
<a href="pn.html" class="button special small">pn Chart</a>
<a href="u.html" class="button small">u Chart</a>
<a href="c.html" class="button small">c Chart</a>
<a href="xbar-r.html" class="button small">X-Bar R</a>
<a href="xbar-s.html" class="button small">X-Bar s</a>
<a href="i-mr_x-mr.html" class="button small">I-MR / X-MR</a>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

A pn chart is used when we're looking a the `number of defectives` and the subgroup size is `constant`.  Here, the distribution is `Binomial`, since an item is either defective or it's not.  Two states!  For instance, you may check a sample of your product daily and determine the number of defective items in that sample and the sample size you check is always the same, everyday.  This is where pn charts are useful.

For a pn chart, the <code>n</code> is representative of the number of items inspected, while the <code>p</code> is representative of the proportion of defectives.  Thus, if the number sampled is <code>100</code> and the proportion of defects is <code>0.02</code>, then <code>pn</code> will be <code>2</code> defective items.

## Control Limits

Since the subgroup size is constant, so the upper and lower control limits (UCL & LCL) are also constant.  Remember, pn charts represent a `Binomial` distribution.  Therefore, the <a href="../binomial.html">Binomial calculations apply</a>.

* Control Line (CL) = <span style="text-decoration: overline;">p</span>n = <code><sup>total defectives</sup>/<sub>total inspected</sub> = <sup>&Sigma;pn</sup>/<sub>&Sigma;n</sub></code>
* Upper Control Limit (UCL) = <code><span style="text-decoration: overline;">p</span>n + 3&radic;<span style="text-decoration: overline;"> </span>&nbsp;<span style="text-decoration: overline;">p</span>n(1 - <span style="text-decoration: overline;">p</span>)</code>
* Lower Control Limit (LCL) = <code><span style="text-decoration: overline;">p</span>n - 3&radic;<span style="text-decoration: overline;"> </span>&nbsp;<span style="text-decoration: overline;">p</span>n(1 - <span style="text-decoration: overline;">p</span>)</code>


<a href="/quality-management">&#x2190; Back to Quality Management</a>
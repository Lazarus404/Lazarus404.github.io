---
layout: page
title: DSP | Filters | Prototypes
description: Digital Signal Processing
image: nil
nav-menu: false
show_tile: false
---

<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
<script>
MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']]
  }
};
</script>

<a href="../calculators.html" class="button small">Calculators</a>
<a href="../theory" class="button small">Theory</a>
<a href="../z-domain" class="button small">Z-Domain</a>
<a href="../filters" class="button special small">Filters</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="biquad.html" class="button small">Biquadratic</a>
<a href="pz-placement.html" class="button small">PZ Placement</a>
<a href="butterworth.html" class="button small">Butterworth</a>
<a href="chebyshev-type-1.html" class="button small">Chebyshev</a>
<a href="prototypes.html" class="button special small">Prototypes</a>
<a href="iir-filter.html" class="button small">IIR Filter</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Butterworth

| n | Prototype |
| 1 | $$\frac{1}{s+1}$$ |
| 2 | $$\frac{1}{(s^{2} + \sqrt{2}s + 1)}$$ |
| 3 | $$\frac{1}{(s^{3} + 2z^{2} + 2s + 1)}$$ |
| 4 | $$\frac{1}{(s^{4} + 2.6131s^{3} + 3.4142s^{2} + 2.6131s + 1)}$$ |
| 5 | $$\frac{1}{(s^{5} + 3.2361s^{4} + 5.2361s^{3} + 5.2361s^{2} + 3.2361s + 1)}$$ |
| 6 | $$\frac{1}{(s^{6} + 3.8637s^{5} + 7.4641s^{4} + 9.1416s^{3} + 7.4641s^{2} + 3.8637s + 1)}$$ |

<details markdown=block>
<summary markdown=span>1st order rules</summary>

In case it shows in the exam, here are the transforms from a low pass to other types of butterworth filter;

#### Low pass analog prototype

$$H(s) = \frac{1}{s+1}$$

Substituting the \\(s\\) for the normalised frequency \\(v\\), we have;

$$H(jv) = \frac{1}{jv + 1}$$

We can ascertain the magnitude gain with;

$$|H(jv)| = \frac{1}{\sqrt{1 + v^{2}}}$$

To convert the analog prototype to lowpass using a cutoff of \\(\omega_{c}\\), we do;

$$H(s) = \frac{1}{\frac{s}{\omega_{c}} + 1} = \frac{\omega_{c}}{s + \omega_{c}}$$

Magnitude response is;

$$|H(j\omega)| = \frac{1}{\sqrt{1 + \left(\frac{\omega}{\omega_{c}}\right)^{2}}}$$

#### High pass analog prototype

$$H(s) = \frac{1}{\frac{\omega_{c}}{s} + 1} = \frac{s}{\omega_{c} + s}$$

Magnitude response is;

$$|H(j\omega)| = \frac{1}{\sqrt{1 + \left(\frac{\omega_{c}}{\omega}\right)^{2}}}$$

#### Band pass analog prototype

where \\(\omega_{0}\\) is the centre frequency \\(\sqrt{\omega_{l}\omega_{h}}\\) and \\(\beta\\) is the bandwidth \\(\omega_{h} - \omega_{l}\\), we do;

$$H(s) = \frac{1}{\frac{s^{2} + \omega_{0}^{2}}{s\beta} + 1} = \frac{s\beta}{s^{2} + \omega_{0}^{2} + s\beta}$$

Magnitude response is;

$$|H(j\omega)| = \frac{1}{\sqrt{1 + \left(\frac{\omega^{2} + \omega_{0}^{2}}{\omega\beta}\right)^{2}}}$$

#### Band stop analog prototype

$$H(s) = \frac{1}{\frac{s\beta}{s^{2} + \omega_{0}^{2}} + 1} = \frac{s^{2} + \omega_{0}^{2}}{s\beta + s^{2} + \omega_{0}^{2}}$$

Magnitude response is;

$$|H(j\omega)| = \frac{1}{\sqrt{1 + \left(\frac{\omega\beta}{\omega^{2} + \omega_{0}^{2}}\right)^{2}}}$$

</details>
<p></p>

### Chebyshev

| n | Prototype |
| 1 | $$\frac{2.8628}{(s + 2.8628)}$$ |
| 2 | $$\frac{1.4314}{(s^{2} + 1.4256s + 1.5162)}$$ |
| 3 | $$\frac{0.7157}{(s^{3} + 1.2529s^{2} + 1.5349s + 0.7157)}$$ |
| 4 | $$\frac{0.3579}{(s^{4} + 1.1974s^{3} + 1.7169s^{2} + 1.0255s + 0.3791)}$$ |
| 5 | $$\frac{0.1789}{(s^{5} + 1.1725s^{4} + 1.9374s^{3} + 1.3096s^{2} + 0.7525s + 0.1789)}$$ |
| 6 | $$\frac{0.0895}{(s^{6} + 1.1592s^{5} + 2.1718s^{4} + 1.5898s^{3} + 1.1719s^{2} + 0.4324s + 0.0948)}$$ |

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

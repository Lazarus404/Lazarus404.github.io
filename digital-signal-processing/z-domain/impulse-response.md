---
layout: page
title: DSP | Z-Domain | Impulse Response
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
<a href="../z-domain" class="button special small">Z-Domain</a>
<a href="../filters" class="button small">Filters</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="z-transform.html" class="button small">Z-Transform</a>
<a href="z-transfer.html" class="button small">Z-Transfer</a>
<a href="impulse-response.html" class="button special small">Impulse Response</a>
<a href="transfer-function.html" class="button small">Transfer Function</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Impulse Response

For the impulse response;

$$h[n] = \begin{cases} \frac{1}{5} & \text{for} & -2 \leq n \leq 2 \\ 0 & \text{elsewhere} \end{cases}$$

Answer the following, giving answers to four decimal places;

### Transfer Function

Complete the following;

$$H(\Omega) = A \times cos(\Omega) + B \times cos(2\Omega) + C \times cos(3\Omega) + D \times cos(4\Omega) + \frac{1}{5}$$

where \\(H(\Omega)\\) is the normalised digital frequency transfer function for the system specified with the above impulse response.

$$H(\Omega) = \sum_{n=-2}^{2} h[n]e^{-j \Omega n}$$

Therefore;

$$\displaylines{
H(\Omega) & = \frac{1}{5}e^{j2\Omega}+\frac{1}{5}e^{j\Omega}+e^{j\Omega}+\frac{1}{5}e^{-j\Omega}+\frac{1}{5}e^{-j2\Omega} \\
& = \frac{1}{5}(e^{j2\Omega}+e^{j\Omega}+1+e^{-j\Omega}+e^{-j2\Omega})
}$$

We can convert this with Euler's formula;

$$\frac{1}{5}(cos(2\Omega)+jsin(2\Omega)+cos(\Omega)+jsin(\Omega)+1+cos(\Omega)-jsin(\Omega)+cos(2\Omega)-jsin(2\Omega))$$

Here, the \\(-jsin()\\) and \\(+jsin()\\) pairs cancel each other out, leaving us with;

$$\displaylines{
H(z) = \frac{1}{5}(cos(2\Omega)+cos(\Omega)+1+cos(\Omega)+cos(2\Omega)) \\
= \frac{1}{5}(2 \times cos(2\Omega)+2 \times cos(\Omega)+1) \\
= \frac{2}{5}cos(2\Omega)+\frac{2}{5}cos(\Omega)+\frac{1}{5}
}$$

Therefore, the answer is;

$$H(\Omega) = 0.4 \times cos(\Omega) + 0.4 \times cos(2\Omega) + 0 \times cos(3\Omega) + 0 \times cos(4\Omega) + \frac{1}{5}$$

### Difference Equation

Determine the difference equation for this filter in terms of an input \\(x[n]\\) and an output \\(y[n]\\);

$$\displaylines{
y[n] = A \times x[n-4] + B \times x[n-3] + C \times x[n-2] + D \times x[n-1] + E \times x[n] \\
 + F \times x[n+1] + G \times x[n+2] + H \times x[n+3] + I \times x[n+4]
}$$

Recall;

$$\displaylines{
H(z) = \frac{1}{5}(e^{j2\Omega}+e^{j\Omega}+1+e^{-j\Omega}+e^{-j2\Omega})
= \frac{1}{5}(z^{2}+z+1+z^{-1}+z^{-2})
}$$

This is equivelent to;

$$\displaylines{
H(z) = \frac{1}{5}\left(\frac{z^{2}+z+1+z^{-1}+z^{-2}}{1}\right)
= \frac{0.2z^{2}+0.2z+0.2+0.2z^{-1}+0.2z^{-2}}{1}
}$$

Transforming to time domain gives;

$$\displaylines{
y[n] = 0 \times x[n-4] + 0 \times x[n-3] + 0.2 \times x[n-2] + 0.2 \times x[n-1] + 0.2 \times x[n] \\
 + 0.2 \times x[n+1] + 0.2 \times x[n+2] + 0 \times x[n+3] + 0 \times x[n+4]
}$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
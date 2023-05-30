---
layout: page
title: DSP | Theory | Math | Z-Transform
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

<a href="../../calculators.html" class="button small">Calculators</a>
<a href="../../theory" class="button special small">Theory</a>
<a href="../../z-domain" class="button small">Z-Domain</a>
<a href="../../filters" class="button small">Filters</a>

<hr />

<a href="../" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="../" class="button small">Quantization & Sampling Theorem</a>
<a href="../math" class="button special small">Math</a>
<a href="../linear-systems.html" class="button small">Linear Systems</a>
<a href="../convolution.html" class="button small">Convolution</a>
<a href="../fourier-transform" class="button small">Fourier Transform</a>

<div></div>

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="z-transform" class="button special small">Z-Transform</a>
<a href="bilinear-transform" class="button small">Bilinear Transform</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Terms

Common terms in z-tramsforms;

##### Causal

Causal is a sequence (denoted in curly braces) where negative values are \\(0\\). Thus;

$$f_{n} = \begin{cases} x & n \geq 0 \\
0 & n < 0 \end{cases}$$

##### Unit Impulse

Denoted by \\(\delta_{n}\\) and defined as;

$$\delta_{n} = \begin{cases} 1 & n = 0 \\
0 & n \neq 0 \end{cases}$$

##### Unit Step

Denoted by \\(u_{n}\\) and defined as;

$$u_{n} = \begin{cases} 1 & n \geq 0 \\
0 & n < 0 \end{cases}$$

### Z-Transform Forms

Understanding the Z-Transform

##### Causal Sequence

For any arbitraty constant \\(a\\), the z-transform of the causal sequence;

$$f_{n} = \begin{cases} 0 & n = -1, -2, -3, ... \\
a^{n} & n = 0, 1, 2, 3, ... \end{cases}$$

is, by definition;

$$F(z) = Z\{f_{n}\} = 1 + az^{-1} + a^{2}z^{-2} + ...$$

which is a geometric series with common ratio \\(az^{-1}\\). Hence, provided \\(\|az^{-1}\| < 1\\), the closed form of the z-transform is;

$$F(z) = \frac{1}{1-az^{-1}} = \frac{z}{z-a}$$

###### Examples:

$$\displaylines{
Z\{2^{n}\} = \frac{1}{1-2z^{-1}} = \frac{z}{z-2} & |z| > 2 \\
Z\{(-1)^{n}\} = \frac{1}{1+z^{-1}} = \frac{z}{z+1} & |z| > 1 \\
Z\{e^{-n}\} = \frac{z}{z-e^{-1}} & |z| > e^{-1} \\
Z\{e^{-\alpha n}\} = \frac{z}{z-e^{-\alpha}} & |z| > e^{-\alpha}
}$$

##### Multiplication of a Sequence by \\(a^{n}\\)

Suppose \\(f_{n}\\) is an arbitrary sequence with z-transform \\(F(z)\\). Multiplying with \\{a_{n}\\} would give;

$$\displaylines{
f_{0} + af_{1}z^{-1} + a^{2}f_{2}z^{-2} + ... \\
= \sum_{n=0}^{\infty} a^{n}f_{n}z^{-n} \\
= \sum_{n=0}^{\infty} f_{n}\left(\frac{z}{a}\right)^{-n}
}$$

That is, multiplying a sequence \\(\{f_{n}\}\\) by the sequence \\(\{a^{n}\}\\) does not change the form of the z-transform \\(F(z)\\). We merely replace \\(z\\) by \\(\frac{z}{a}\\) in that transform.

### Shifting

##### by \\(a^{n}\\)

Delays are essentially the multiplication of \\(z\\) by \\(z^{-1}\\). Thus;

$$\displaylines{
Z\{a^{n-1}\} = \frac{zz^{-1}}{z-a} = \frac{1}{z-a} \\
Z\{a^{n-2}\} = \frac{z^{-1}}{z-a} = \frac{1}{z(z-a)}
}$$

Note the power shift affects the denominator

##### by \\(u_{n}\\)

$$\displaylines{
Z\{u_{n-5}\} = \frac{zz^{-5}}{z-1} = \frac{z^{-4}}{z-1} \\
Z\{u_{n} - u_{n-5}\} = \frac{z}{z-1} - \frac{zz^{-5}}{z-1} = \frac{z-z^{-4}}{z-1} \\
Z\{u_{n} - u_{n-1}\} = \frac{z}{z-1} - \frac{zz^{-1}}{z-1} = \frac{z-1}{z-1} = 1
}$$

Note the sub-shift affects the numerator

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
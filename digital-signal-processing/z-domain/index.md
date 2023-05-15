---
layout: page
title: DSP | Z-Domain
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
<a href="../sampling-theorem.html" class="button small">Quantization & Sampling Theorem</a>
<a href="../linear-systems.html" class="button small">Linear Systems</a>
<a href="../convolution.html" class="button small">Convolution</a>
<a href="../fourier-transform" class="button small">Fourier Transform</a>
<a href="../z-domain" class="button special small">Z-Domain</a>
<a href="../filters" class="button small">Filters</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="z-transform.html" class="button small">Z-Transform</a>
<a href="z-transfer.html" class="button small">Z-Transfer</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

The z-domain is a description of how to build a system out of delay blocks, using the complex value \\(z\\).

$$z = e^{j \omega} = cos(\omega) + j \cdot sin(\omega)$$

    % MATLAB
    e = exp(1);
    w = pi;
    z = e^(1i*w)
    ans = 
        -1.0000 + 0.0000i
    cos(w) + 1i*sin(w)
    ans = 
        -1.0000 + 0.0000i

where the irrational logarithm base constant \\(e = 2.71828\\) and j = \\(\sqrt {-1}\\).

Note that \\(e^{j \omega}\\) is the identity of z (real part = 1). if \\(\omega = \pi/2\\), then the position of the complex value is a quarter way around the circle, counter-clockwise, and is therefore;

    % MATLAB
    e = exp(1);
    w = pi/2;
    z = e^(1i*w)
    ans =
    	-0.0000 + 1.0000i

The magnitude of \\(z\\) can therefore be adjusted, regardless of it's angle, by multiplying it by a real number. Thus, \\(z\\) can also be written;

$$z = r \cdot e^{j \omega} $$

which expands to

$$z = r \cdot cos(\omega) + r \cdot j \cdot sin(\omega)$$

    % MATLAB
    w = pi;
    r = 0.5
    r*cos(w) + r*1i*sin(w)
    ans = 
        -0.5000 + 0.0000i

since \\(z\\) is otherwise simply;

$$z = 1 \cdot e^{j \omega} = e^{j \omega} $$

\\(z\\) can also be represented in rectangular form (real/imaginary part);

$$z = (x,y) = x + jy$$

There is also a polar form (magnitude/angle);

$$z = (r, \theta) = r \cdot \theta = |z|e^{jarg(z)} = r \angle \theta$$

The polar form can be converted to cartesian coordinates;

$$
\displaylines{
  x = cos(\omega) \\
  y = sin(\omega) \\
  r = \sqrt{x^{2}y^{2}} \\
  \omega = atan2(y,x)
}
$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

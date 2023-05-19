---
layout: page
title: DSP | Z-Domain | Transfer Function
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
<a href="z-transfer.html" class="button special small">Z-Transfer</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Converting to Z-Domain

Assuming the following transfer function;

$$h[n] = 1.1 \times \left(\frac{1}{3}\right)^{n}$$

Determine the z-domain transfer function;

$$H(z) = \frac{Az}{Bz - 1}$$

Looking at the table on the <a href="z-transform.html">z-transform</a> page, we have;

$$H(z) = \frac{1.1z}{z - \frac{1}{3}}$$

$$\therefore H(z) = \frac{3.3z}{3z - 1}$$

$$\therefore A = 3.3, B = 3$$

### Magnitude of the Gain

To determine the magnitude of the gain, in dB, at \\(f_{s}/2\\).

Here, for each \\(z\\), we exchange for \\(e^{j \omega}\\);

$$H(e^{j \omega}) = \frac{3.3e^{j \omega}}{3e^{j \omega} - 1}$$

In radians, \\(f_{s}/2 = \pi\\). This can be substituted into the transfer function;

$$\therefore H(e^{j \pi}) = \frac{3.3e^{j \pi}}{3e^{j \pi} - 1}$$

However;

$$e^{j \pi} = cos(\pi) + j \cdot sin(\pi)$$

$$= -1 + j \cdot 0$$

$$= -1$$

As such;

$$H(j \omega) = \frac{3.3 \cdot (-1)}{3 \cdot (-1) - 1}$$

$$= \frac{-3.3}{-4}$$

$$= \frac{3.3}{4}$$

$$= 0.825$$

Converting this to decibels, we have;

$$20 \cdot log_{10}(0.825) = -1.6709$$

### Convert to Time-Domain

If the input sequence to the filter is denoted by \\(x[n]\\) and the output sequence is denoted by \\(y[n]\\), derive the difference equation that specifies \\(y[n]\\) as a function of past outputs and current & past inputs, of the form;

$$y[n] = A \times x[n] + B \times x[n-1] + C \times y[n-1] + D \times y[n-2]$$

If;

$$\frac{3.3z}{3z-1} = \frac{1.1z}{z-\frac{1}{3}}$$

Then, dividing by \\(z\\) throughout;

$$\frac{1.1}{1-\frac{1}{3}z^{-1}}$$

If \\(H(z) = \frac{Y(z)}{X(z)}\\), then;

$$H(z) = \frac{Y(z)}{X(z)} = \frac{1.1}{1-\frac{1}{3}z^{-1}}$$

Multiplying both sides by both denominators, we have;

$$Y(z) \cdot (1-\frac{1}{3}z^{-1}) = 1.1X(z)$$

Then, multiplying through by \\(Y(z)\\), we have;

$$Y(z)-Y(z)\frac{1}{3}z^{-1} = 1.1X(z)$$

Taking the inverse z-transform, we have;

$$y[n]-y[n-1]\frac{1}{3} = 1.1x[n]$$

Rearranging;

$$y[n] = 1.1x[n] + y[n-1]\frac{1}{3}$$

$$\therefore, A = 1.1, B = 0, C = \frac{1}{3}, D = 0$$

### Completing Z-Transform from Transfer Function

If the input to the filter is given by;

$$x[n] = \begin{cases} 
0.8 \text{ for } n \ge 0 \\ 
0 \text{ elsewhere}
\end{cases}$$

Determine the form of Y(z) in the following;

$$Y(z) = \frac{C \times z^{2}}{(z-1)(3z-1)}$$

We could rewrite the transfer function to;

$$0.8u[n]$$

$$= X(z) = \frac{0.8z}{z-1}$$

If \\(H(z)\\) is;

$$\frac{3.3z}{3z-1}$$

Then;

$$Y(z) = \frac{0.8z}{z-1} \cdot \frac{3.3z}{3z-1}$$

$$= \frac{2.64z^{2}}{(z-1)(3z-1)}$$

### Partial Expansion of \\(Y(z)\\)

Determine the partial fraction expansion of \\(Y(z)\\) in the form;

$$\frac{D}{z-1} + \frac{E}{z-\frac{1}{3}}$$

From the \\(Y(z)\\) expression, we could try to find the inverse z-transform, but there may not be any pattern matches from the z-transform tables. As such, if we perform partial expansion, we can get two expressions of \\(Y(z)\\) and, from this, we can take the inverse z-transforms of both terms. This will give us the time domain expression for the step input that was specified.

Thus;

$$D = 0.8$$

$$E = 1.1$$

### Time Difference Equation

Determine the time difference equation for the output sequence, where;

$$y[n] = A \times u[n] + B \times (C)^{n}$$

Thus, we have;

$$A = 0.8, B = 1.1, C = \frac{1}{3}$$

### System Analysis

The following system;

<img src="/assets/images/dsp/filter1.png" />

has the following transfer function;

$$G(z) = \frac{(z+0.54)(z+0.49)}{(z-0.12)(z-0.31)}$$

Answer the following question giving answers to 4 decimal places.

If \\(c_{2} = 0.31\\) then determine \\(d_{0}, d_{1}, d_{2}, c_{1}\\);

$$\frac{G(z)}{z} = \frac{(z+0.54)(z+0.49)}{z(z-0.12)(z-0.31)} = \frac{A}{z} + \frac{B}{(z-0.12)} + \frac{C}{(z-0.31)}$$

Cross-multiply and remove denominator;

$$G(z) = (z+0.54)(z+0.49) = A(z-0.12)(z-0.31)+Bz(z-0.31)+Cz(z-0.12)$$

Determine \\(A - z = 0\\);

$$\displaylines{
= (0+0.54)(0+0.49) \\
= (0-0.12) + (B \times 0(0-0.31) = 0) + (C \times 0(0-0.12) = 0) \\
= 0.54 + 0.49 = A(-0.12)(-0.31) \\
\therefore A = \frac{0.54 \times 0.49}{-0.12 \times -0.31} \\
A = \frac{0.2646}{0.0372} = 7.1129
}$$

Determine \\(B - z = 0.12\\);

$$\displaylines{
= (0.12+0.54)(0.12+0.49) = B 0.12(0.12-0.31) \\
\therefore 0.66 \times 0.61 = B 0.12 \times -0.19 \\
B = \frac{0.66 \times 0.61}{0.12 \times -0.19} = -17.6579
}$$

Determine \\(C - z = 0.31\\);

$$\displaylines{
= (0.31+0.54)(0.31+0.49) = C 0.31(0.31-0.12) \\
\therefore 0.85 \times 0.80 = C 0.31 \times 0.19 \\
C = \frac{0.85 \times 0.80}{0.31 \times 0.19} = 11.5450
}$$

$$G(z) = 7.1129 - \frac{17.6579}{z-0.12} + \frac{11.5450}{z-0.31}$$

$$\displaylines{
d_{0} = 7.1129 \\
d_{1} = -17.6579 \\
d_{2} = 11.5450 \\
c_{1} = 0.12
}$$

For the real world reconstruction filter, it is designed to be an order 8 low pass analogue filter. It is desired to achieve -43dB of attenuation in the stop band. How many whole number of decades is the transition band likely to cover?

To answer this, recall that IIR filters attenuate at a rate of 20dB/decade per order;

$$\displaylines{
8 * 20 = 160\text{dB/decade} \\
\therefore \text{the answer is: 1 decade}
}$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

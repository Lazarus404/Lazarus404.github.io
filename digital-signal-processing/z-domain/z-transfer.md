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
<a href="../theory" class="button small">Theory</a>
<a href="../z-domain" class="button special small">Z-Domain</a>
<a href="../filters" class="button small">Filters</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="z-transform.html" class="button small">Z-Transform</a>
<a href="z-transfer.html" class="button special small">Z-Transfer</a>
<a href="impulse-response.html" class="button small">Impulse Response</a>
<a href="transfer-function.html" class="button small">Transfer Function</a>

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

##### MATLAB

    num = 3.3 * (cos(pi) + 1i * sin(pi))
    denom = 3 * (cos(pi) + 1i * sin(pi)) - 1
    mag = num / denom
    % ans
    %     0.8250 - 0.0000i
    magdB = 20 * log10(mag)
    % ans
    %     -1.6709

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

Thus, taking the fraction from step 1 and the other from step 4, we have;

$$\displaylines{
\frac{D}{z-1} + \frac{E}{z-\frac{1}{3}} \\
\frac{0.8z}{(z-1)} \times \frac{1.1z}{\left(z-\frac{1}{3}\right)} = \frac{0.88z^{2}}{(z-1)\left(z-\frac{1}{3}\right)} \\
= \frac{D\left(z-\frac{1}{3}\right) + E(z-1)}{(z-1)\left(z-\frac{1}{3}\right)}
}$$

To determine D, let \\(z = 1\\);

$$\displaylines{
0.88 \times 1 = D\left(1-\frac{1}{3}\right) + E(0) \\
\therefore D = \frac{0.88}{1-\frac{1}{3}} \\
\therefore D = 1.32
}$$

To determine E, let \\(z = \frac{1}{3}\\);

$$\displaylines{
0.88 \times \frac{1}{3} = D(0) + E\left(\frac{1}{3} - 1\right) \\
\therefore E = \frac{0.88 \times \frac{1}{3}}{\frac{1}{3} - 1} \\
\therefore E = -0.44
}$$

To confirm;

$$1.32 - 0.44 = 0.88$$

Thus;

$$D = 1.32$$
$$E = -0.44$$

##### MATLAB

    z1 = 0.8; z2 = 1.1; p1 = 1; p2 = 1/3
    D = (z1 * z2)/(p1 - p2)
    E = (z1 * z2 * p2)/(p2 - p1)

### Time Difference Equation

Determine the time difference equation for the output sequence, where;

$$y[n] = A \times u[n] + B \times (C)^{n}$$

Thus, using the values from the previous part, we have;

$$A = 1.32, B = -0.44, C = \frac{1}{3}$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

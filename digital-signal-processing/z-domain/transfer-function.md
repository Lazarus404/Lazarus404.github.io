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
<a href="z-transfer.html" class="button small">Z-Transfer</a>
<a href="impulse-response.html" class="button small">Impulse Response</a>
<a href="transfer-function.html" class="button special small">Transfer Function</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Transfer Function

The transfer function for a digital system is given by;

$$H(z) = \frac{0.23z(z-0.46)}{(z-0.59)(z-0.5)}$$

Answer the following, giving answers to 4 decimal places;

### Factors

Determine the factors in the following recursion for the system;

$$h[k] + A \times h[k-1] + B \times h[k-2] = C \times \delta[k] + D \times \delta[k-1]$$

where \\(\delta[k-v]\\) is the unit impulse function.

$$\displaylines{
H(z) = \frac{0.23z^{2} - 0.23 \times 0.46z}{z^{2}-0.5z-0.59z+0.295} \\
= \frac{0.23z^{2} - 0.1058z}{z^{2}-1.09z+0.295}
}$$

Divide through by \\(z^{2}\\);

$$H(z) = \frac{0.23 - 0.1058z^{-1}}{1-1.09z^{-1}+0.295z^{-2}}$$

Results in;

$$h[k] + -1.09 \times h[k-1] + 0.295 \times h[k-2] = 0.23 \times \delta[k] + -0.1058 \times \delta[k-1]$$

##### MATLAB

    z1 = 0.23; z2 = -0.46; p1 = -0.59; p2 = -0.5;
    A = p1 + p2
    B = p1 * p2
    C = z1
    D = z1 * z2

### Difference Equation

If the input sequence to the system is \\(x[n]\\) and its output sequence is \\(y[n]\\), derive the difference equation which specifies the current output in terms of previous outputs and current and previous inputs.

To answer this question, complete the following;

$$y[n] = A \times x[n] + B \times x[n-1] + C \times y[n-1] + D \times y[n-2]$$

Take the function after dividing by \\(z^{2}\\) under the <code>Factors</code> heading;

$$H(z) = \frac{0.23 - 0.1058z^{-1}}{1-1.09z^{-1}+0.295z^{-2}}$$

Cross multiply;

$$y(z) - 1.09 y(z)z^{-1} + 0.295y(z)z^{-2} = 0.23x(z) - 0.1058x(z)z^{-1}$$

Invert and fit to required answer by changing signs that cross;

$$y[n] = 0.23 \times x[n] - 0.1058 \times x[n-1] + 1.09 \times y[n-1] - 0.295 \times y[n-2]$$



### Partial Fraction Expansion

Perform partial fraction expansion with;

$$\frac{A}{z-0.59} + \frac{B}{z-0.5}$$

Thus;

$$H(z) = \frac{0.23z(z-0.46)}{(z-0.59)(z-0.5)} = \frac{A}{z-0.59} + \frac{B}{z-0.5}$$

Times through;

$$H(z) = \frac{0.23(z-0.46)}{(z-0.59)(z-0.5)} = \frac{A(z-0.5) + B(z-0.59)}{(z-0.59)(z-0.5)}$$

Divide through the denominator;

$$H(z) = 0.23(z-0.46) = A(z-0.5) + B(z-0.59)$$

Determine \\(A\\) by making \\(z = 0.59\\);

$$\displaylines{
A = 0.23(0.59-0.46) = A(0.59-0.5) + (B \times 0) \\
A = 0.23(0.13) = A(0.09) + (B \times 0) \\
A = 0.0299 = A(0.09) + (B \times 0) \\
A = \frac{0.0299}{0.09} = 0.332222222 = 0.3322
}$$

Determine \\(B\\) by making \\(z = 0.5\\);

$$\displaylines{
B = 0.23(0.5-0.46) = (A \times 0) + B(0.5-0.59) \\
B = 0.23(0.04) = (A \times 0) + B(-0.09) \\
B = 0.0092 = (A \times 0) + B(-0.09) \\
B = \frac{0.0092}{-0.09} = -0.10222222 = -0.1022
}$$

##### MATLAB

    z1 = 0.23; z2 = -0.46;
    p1 = -0.59; p2 = -0.5;
    A = (z1 * (abs(p1) + z2))/(abs(p1) + p2)
    B = (z1 * (abs(p2) + z2))/(abs(p2) + p1)
    %
    % Note, if the numerator is of the form 0.23z^2, then;
    %
    z1 = 0.23;
    p1 = -0.59; p2 = -0.5;
    A = (z1 * abs(p1))/(abs(p1) + p2)
    B = (z1 * abs(p2))/(abs(p2) + p1)

### Pulse Response

Determine the pulse response of the system in the form;

$$h[k] = A \times (0.59^{k}) + B \times (0.5^{k})$$

Here, we simply populate the values with those determined above;

$$h[k] = 0.3322 \times (0.59^{k}) + -0.1022 \times (0.5^{k})$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
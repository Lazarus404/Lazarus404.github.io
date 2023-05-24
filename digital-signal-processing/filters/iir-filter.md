---
layout: page
title: DSP | Filters | IIR Filter
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
<a href="../z-domain" class="button small">Z-Domain</a>
<a href="../filters" class="button special small">Filters</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="biquad.html" class="button small">Biquadratic</a>
<a href="pz-placement.html" class="button small">PZ Placement</a>
<a href="lp-chebyshev-type-1.html" class="button small">Lowpass Chebyshev</a>
<a href="iir-filter.html" class="button special small">IIR Filter</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### System Analysis 1

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

##### MATLAB

    z1 = 0.54; z2 = 0.49; p1 = 0.12; p2 = 0.31;
    A = (z1 * z2)/(p1 * p2)
    % ans =
    %     7.1129

Determine \\(B - z = 0.12\\);

$$\displaylines{
= (0.12+0.54)(0.12+0.49) = B 0.12(0.12-0.31) \\
\therefore 0.66 \times 0.61 = B 0.12 \times -0.19 \\
B = \frac{0.66 \times 0.61}{0.12 \times -0.19} = -17.6579
}$$

##### MATLAB

    z1 = 0.54; z2 = 0.49; p1 = 0.12; p2 = 0.31;
    B = ((p1 + z1) * (p1 + z2)) / (p1 * (p1 - p2))
    % ans =
    %     -17.6579

Determine \\(C - z = 0.31\\);

$$\displaylines{
= (0.31+0.54)(0.31+0.49) = C 0.31(0.31-0.12) \\
\therefore 0.85 \times 0.80 = C 0.31 \times 0.19 \\
C = \frac{0.85 \times 0.80}{0.31 \times 0.19} = 11.5450
}$$

##### MATLAB

    z1 = 0.54; z2 = 0.49; p1 = 0.12; p2 = 0.31;
    B = ((p2 + z1) * (p2 + z2)) / (p2 * (p2 - p1))
    % ans =
    %     11.5450

$$G(z) = 7.1129 - \frac{17.6579}{z-0.12} + \frac{11.5450}{z-0.31}$$

$$\displaylines{
d_{0} = 7.1129 \\
d_{1} = -17.6579 \\
d_{2} = 11.5450 \\
c_{1} = 0.12
}$$


### Decibels Per-Decade

For the real world reconstruction filter, it is designed to be an order 8 low pass analogue filter. It is desired to achieve -43dB of attenuation in the stop band. How many whole number of decades is the transition band likely to cover?

To answer this, recall that IIR filters attenuate at a rate of 20dB/decade per order;

$$\displaylines{
8 * 20 = 160\text{dB/decade} \\
\therefore \text{the answer is: 1 decade}
}$$

### System Analysis 2

A filter has the following realisation;

<img src="/assets/images/dsp/filter2.png" />

where the values of the multipliers are \\(a_{1} = 0.35\\), \\(a_{2} = -0.72\\), \\(b_{1} = -0.32\\) and \\(b_{2} = 0.571\\).

For the following transfer functions, determine the values of the coefficients;

$$\displaylines{
H_{1}(z) = \frac{z + \gamma_{1}}{z + \gamma_{2}} \\
H_{2}(z) = \frac{z + \gamma_{3}}{z + \gamma_{4}}
}$$

Looking at the inputs on the left and the outputs on the right, inverting the values for inputs, we have;

$$\displaylines{
\gamma_{1} = b_{1} = -0.32 \\
\gamma_{2} = a_{1} = -0.35 \\
\gamma_{3} = b_{2} = 0.571 \\
\gamma_{4} = a_{2} = 0.72
}$$

### Overall Transfer Function

For the overall transfer function;

$$H(z) = \frac{2z^{2} + z\beta_{1} + \beta_{2}}{z^{2} + z\beta_{3} + \beta_{4}}$$

Determine the coefficients;

Since our transfer functions are parallel, we simply add them. Thus;

$$\displaylines{
H(z) = \frac{Y(z)}{X(z)} = \frac{z + \gamma_{1}}{z + \gamma_{2}} + \frac{z + \gamma_{3}}{z + \gamma_{4}} \\
\text{Thus, }\frac{z - 0.32}{z + 0.35} + \frac{z + 0.571}{z - 0.72}
}$$

Obtained the least common multiple, we place the LCM as the denominator of each fraction and in the numerator of each fraction we add the factors that we need to complete;

$$= \frac{(z - 0.32)(z - 0.72)}{(z + 0.35)(z - 0.72)} + \frac{(z + 0.571)(z + 0.35)}{(z - 0.72)(z + 0.35)}$$

Multiplying out the numerators, gives us;

$$\displaylines{
z * z = z^{2} \\
z * -0.72 = -0.72z \\
-0.32 * z = -0.32z \\
-0.32 * -0.72 = 0.2304
}$$

And;

$$\displaylines{
z * z = z^{2} \\
z * 0.35 = 0.35z \\
0.571 * z = 0.571z \\
0.571 * 0.35 = 0.19985
}$$

Which results in;

$$= \frac{z^{2} - 0.72z - 0.32z + 0.2304}{(z + 0.35)(z - 0.72)} + \frac{z^{2} + 0.35z + 0.571z + 0.19985}{(z - 0.72)(z + 0.35)}$$

Then, combine matched \\(z\\)'s;

$$= \frac{z^{2} - 1.04z + 0.2304}{(z + 0.35)(z - 0.72)} + \frac{z^{2} + 0.921z + 0.19985}{(z - 0.72)(z + 0.35)}$$

Add the numerators, keeping the denominator as is;

$$\frac{2z^{2} - 0.1190z + 0.4302}{(z + 0.35)(z - 0.72)}$$

Finally, multiply the values and combine in the denominator;

$$\displaylines{
z * z = z^{2} \\
z * 0.35 = 0.35z \\
-0.72 * z = -0.72z \\
0.35 * -0.72 = -0.252
}$$

Which results in;

$$\frac{2z^{2} - 0.1190z + 0.4303}{z^{2} - 0.37z - 0.252}$$

Therefore;

$$\displaylines{
\beta_{1} = -0.1190 \\
\beta_{2} = 0.4302 \\
\beta_{3} = -0.37 \\
\beta_{4} = -0.252 \\
}$$

##### MATLAB

    z1 = -0.32; p1 = 0.35; z2 = 0.571; p2 = -0.72;
    z1out = z1 + p2 + z2 + p1
    % ans =
    %     -0.1190
    z2out = z1 * p2 + z2 * p1
    % ans =
    %     0.4302
    p1out = p1 + p2
    % ans =
    %     -0.37
    p2out = p1 * p2
    % ans =
    %     -0.252

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
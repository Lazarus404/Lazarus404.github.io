---
layout: page
title: DSP | Filters | Pole-Zero Placement
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
<a href="pz-placement.html" class="button special small">PZ Placement</a>
<a href="butterworth.html" class="button small">Butterworth</a>
<a href="chebyshev-type-1.html" class="button small">Chebyshev</a>
<a href="prototypes.html" class="button small">Prototypes</a>
<a href="iir-filter.html" class="button small">IIR Filter</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### 2nd Order Bandpass Filter Design

You are required to design a 2nd order bandpass filter using the pole-zero placement method. The normalised digital bandpass centre frequency is to be \\(\Omega_{0} = 1.7279\\) Rads, a bandwidth of \\(0.01\\) Rads and complete attenuation at \\(0\\) Rads and \\(3.1416\\) Rads.

Design the filter with the above specification and give your answer in the form described below.

So, for the poles, we have a radius of \\(1-(bandwidth/2)\\) which is \\(1-0.005\\). Therefore, the poles are;

$$(z-0.995e^{j \cdot 1.7279})(z-0.995e^{-j \cdot 1.7279})$$

$$\therefore (z-0.995 \cdot cos(1.7279)+j \cdot 0.995 \cdot sin(1.7279))(z-0.995 \cdot cos(1.7279)-j \cdot sin(1.7279))$$

$$= (z-(-0.1557 + j0.9827))(z-(-0.1557 - j0.9827))$$

The zeros are at 0 and \\(\pi\\);

$$(z-e^{j \cdot 0})(z-e^{j \cdot 3.1416})$$

This simplifies to;

$$(z-1)(z+1)$$

Resulting in;

$$\frac{(z-1)(z+1)}{(z-(-0.1557 + j0.9827))(z-(-0.1557 - j0.9827))}$$

To convert this to standard form, you can use <code>poly</code> in MATLAB, where;

    f0 = 1.7279; bw = 0.01; att1 = 0; att2 = 3.1416;
    z1 = cos(0) + 1i * sin(0)
    z2 = cos(pi) + 1i * sin(pi)
    p1 = (1-(bw/2)) * cos(f0) + 1i * (1-(bw/2)) * sin(f0)
    p2 = (1-(bw/2)) * cos(f0) - 1i * (1-(bw/2)) * sin(f0)
    poly([p1 p2])
    ans =
        1.0000 0.3114 0.9899

Thus, multiplying out the \\(z\\) in the numerator, we have the form;

$$\frac{K(z^{2}-1)}{z^{2} + 0.3114z + 0.9899}$$

### Adjust Form

Convert the above to the following form;

$$H(z) = K \times \frac{z^{2} + \beta_{1}z + \beta_{2}}{z^{2} + \alpha_{1}z + \alpha_{2}}$$

Simply;

$$\displaylines{
\beta_{1} = 0.0000 \\
\beta_{2} = -1.0000 \\
\beta_{3} = 0.3114 \\
\beta_{4} = 0.9899
}$$

### Manual Calculation of Polys

To manually calculate the polynomials from the complex conjugate pair, we start with \\(1\\) and zero'd values for each complex number;

$$C = (1,0,0)$$

Then;

$$C(2) = C(2) - e^{j \cdot 1.7279} \times C(1)$$

for the first iteration and, remembering \\(C(2)\\) has now changed;

$$C(2) = C(2) - e^{j \cdot 1.7279} \times C(1)$$

$$C(3) = C(3) - e^{-j \cdot 1.7279} \times C(2)$$

Therefore, for the first iteration, we have;

$$C_{2} = 0 - (-0.1557 + j0.9827) \times 1 = 0.1557 - j0.9827$$

Then, for the second iteration;

$$C_{2} = (0.1557 - j0.9827) - (-0.1557 + j0.9827) \times 1 = 0.3114 - j1.9654$$

$$C_{3} = 0 - -0.1557 + j0.9827 \times 0.3114 - j1.9654 = 0.9899$$

Thus, the result is the <code>real</code> values of \\(C_{1,2,3}\\).

### Determine the Magnitude of the Gain

This functions similarly to the <a href="biquad.html">Biquad</a> implementation;

$$\frac{K(z^{2}-1)}{z^{2} + 0.3114z + 0.9899}$$

If \\(\Omega = 0.7226\\) Rads, then;

$$|H(z)|^{2} = \frac{|K \times e^{j2 \Omega} + 1|^{2}}{|e^{j2 \Omega} + 0.3114e^{j \Omega} + 0.9899|^{2}} \\

= \frac{K \times (cos(2\Omega) + 1)^{2} + sin(2\Omega)^{2}}{(cos(2\Omega) + 0.3114 cos(\Omega) + 0.9899)^{2} + (sin(2\Omega) + 0.3114sin(\Omega))^{2}}$$

$$\therefore |\frac{H(z)}{K}| = \frac{\sqrt{2.2505}}{\sqrt{3.2545}} = -1.6021dB$$

Now, to determine the value of \\(K\\) so that the peak passband \\(H_{peak} = 1.5\\);

$$1.5 = \frac{K \times \sqrt{(cos(2\Omega) + 1)^{2} + sin(2\Omega)^{2}}}{\sqrt{(cos(2\Omega) + 0.3114 cos(\Omega) + 0.9899)^{2} + (sin(2\Omega) + 0.3114sin(\Omega))^{2}}}$$

$$K = 1.5 \times \frac{\sqrt{(cos(2\Omega) + 0.3114 cos(\Omega) + 0.9899)^{2} + (sin(2\Omega) + 0.3114sin(\Omega))^{2}}}{\sqrt{(cos(2\Omega) + 1)^{2} + sin(2\Omega)^{2}}}$$

$$K = 1.5 \times \frac{\sqrt{3.2545}}{\sqrt{2.2505}}$$

$$\therefore K = 1.8037$$

##### MATLAB

    omega = 0.7226;
    p1 = 0.3114; p2 = 0.9899;
    denom = sqrt((cos(2*omega) + p1 * cos(omega) + p2)^2 + (sin(2*omega) + p1 * sin(omega))^2)
    num = sqrt((cos(2*omega) + 1)^2 + sin(2*omega)^2)
    k = denom / num

### Time Domain

Determine the coefficients for the following equation that relates the time domain input and output for current time and the past times for the designed filter;

$$y[n] = c_{1}x[n] + c_{2}x[n-1] + c_{3}x[n-2] + c_{4}y[n-1] + c_{5}y[n-2]$$

Looking at the transfer function, we first multiply out the brackets in the numerator;

$$\frac{K^{2}-K}{z^{2} + 0.3114z + 0.9899}$$

Next, divide top and bottom by \\(z^{2}\\);

$$\frac{K-K^{-2}}{1 + 0.3114z^{-1} + 0.9899z^{-2}}$$

Notice, the zeros only have values at powers \\(0\\) and \\(-2\\). Thus;

$$y[n] = 1 \times x[n] + 0.3114 \times x[n-1] + 0.9899 \times x[n-2] + 0 \times y[n-1] + -1.8037 \times y[n-2]$$

The filter is to be implemented with the following structure;

<img src="/assets/images/dsp/biquad.png" />

What are the values?

$$a = 0.3114, b = 0.9899, c = 1.8037, d = 0, e = -1.8037$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
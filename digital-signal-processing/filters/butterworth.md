---
layout: page
title: DSP | Filters | Butterworth Filter
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
<a href="butterworth.html" class="button special small">Butterworth</a>
<a href="chebyshev-type-1.html" class="button small">Chebyshev</a>
<a href="iir-filter.html" class="button small">IIR Filter</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Design a Lowpass Butterworth Filter

A low pass Butterworth filter is required to be designed with the following specification;

$$\displaylines{
H_{pass}dB = 3dB \\
H_{stop}dB = 23dB \\
f_{pass} = 1900Hz\\
f_{stop} = 161500Hz\\
f_{s} = 45220Hz}$$

Determine the digital frequencies to 5 significant figures (sig.fig.);

$$\displaylines{
\text{Pass band: }\omega_{dp} = 2 \times \pi \times fpass = 7539.8 \text{ rad/s} \\
\text{Stop band: }\omega_{ds} = 2 \times \pi \times fstop = 75398 \text{ rad/s}
}$$

##### MATLAB

    HpassdB = 3; HstopdB = 23; fpass = 1900; fstop = 16150; fs = 45220;
    omegadp = 2 * pi * fpass
    % ans =
    %     11938
    omegads = 2 * pi * fstop
    % ans =
    %     101473

### Warping the Filter

Apply the warping equation to determine the following frequencies;

$$\displaylines{
\text{Pass band: }\omega_{ap} = 2f_{s} \times tan(\frac{omegadp}{2f_{s}}) = 90440 \times tan(\frac{11938}{90440}) = 12007 \text{ rad/s} \\
\text{Stop band: }\omega_{as} = 2f_{s} \times tan(\frac{omegads}{2f_{s}}) = 90440 \times tan(\frac{101473}{90440}) = 187800 \text{ rad/s}
}$$

##### MATLAB

    omegaap = 2 * fs * tan(omegadp/(2*fs))
    % ans =
    %     12007
    omegaas = 2 * fs * tan(omegads/(2*fs))
    % ans =
    %     187800

### Filter Order

Determine the order of the filter and the actual required order;

$$\displaylines{
\text{Order of the filter: } Order_{e} = \frac{1}{acosh(\frac{max(\omega_{ap},\omega_{as})}{min(\omega_{ap},\omega_{as})})} \times acosh\left(\sqrt{\frac{10^{0.1 \times H_{stop}dB)}-1}{10^{(0.1 \times H_{pass}dB)}-1}}\right) \\
\text{when } V_{s} = \frac{max(\omega_{ap},\omega_{as})}{min(\omega_{ap},\omega_{as})} = 15.6398 \\
\epsilon_{stop} = 10^{0.1 \times H_{stop}dB}-1 = 198.5262 \\
\epsilon_{pass} = 10^{0.1 \times H_{pass}dB}-1 = 0.9953 \\
\therefore Order_{e} = \frac{1}{acosh(V_{s})} \times acosh(\sqrt{\frac{\epsilon_{stop}}{\epsilon_{pass}}}) = 0.9703 \\
\text{Required order of the filter: } Order_{a} = ceil(Order_{e}) = 1
}$$

##### MATLAB

    Vs = max(omegaap,omegaas) / min(omegaap,omegaas)
    % ans =
    %     15.6398
    Estop = 10^(0.1*HstopdB) - 1
    % ans =
    %     198.5262
    Epass = 10^(0.1*HpassdB) - 1
    % ans =
    %     0.9953
    OrderE = (1/acosh(Vs)) * acosh(sqrt(Estop/Epass))
    % ans =
    %     0.9703
    OrderR = ceil(OrderE)
    % ans =
    %     1

### Analogue Prototype

Determine the analogue prototype with the form;

$$H(s) = \frac{b_{1}}{s + b_{0}}$$

Is simply;

$$\displaylines{
b_{1} = \Omega_{ap} = 12007 \\
b_{0} = \Omega_{ap} = 12007
}$$

### Bilinear Transform

Using the Bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z+1)}{z+c{1}}$$

Thus;

$$\displaylines{
s = 2f_{s}\frac{1-z^{-1}}{1+z^{-1}} \\
\therefore H(z) = \frac{b_{1}}{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}+b_{0}} = \frac{12007(z+1)}{90440(z-1)+12007(z+1)}
}$$

Multiply out the brackets of the denominator;

$$H(z) = \frac{b_{1}}{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}+b_{0}} = \frac{12007(z+1)}{57600z-90440+21709z+12007}$$

Group like terms;

$$H(z) = \frac{12007(z+1)}{z(90440+12007)+12007-90440}$$

Divide by numbers with \\(z\\);

$$H(z) = \frac{\left(\frac{12007(z+1)}{90440+12007}\right)}{z+\left(\frac{12007-90440}{90440+12007}\right)}$$

Results in;

$$H(z) = \frac{0.1172(z+1)}{z-0.7656}$$

##### MATLAB

    Y = b1 / ((2*fs)+b1)
    % ans =
    %     0.1172
    X = (b0 - (2*fs)) / ((2*fs)+b0)
    % ans =
    %     -0.7656

### Time Domain

Derive a time domain equation representing the input signal as \\(x[n]\\) and the output as \\(y[n]\\) so that:

$$y[n] = d_{0}x[n] + d_{1}x[n-1] + d_{2}y[n-1]$$

So, with;

$$H(z) = \frac{0.1172(z+1)}{z-0.7656}$$

Multiply out the brackets;

$$H(z) = \frac{0.1172z+0.1172}{z-0.7656} = \frac{Y(z)}{X(z)}$$

Cross multiply the bottom to \\(Y(z)\\);

$$y(z) \times z-0.7656 = x(z) \times 0.1172z+0.1172$$

Multiply out the brackets;

$$z - 0.7656z^{-1} = 0.1172z + 0.1172z^{-1}$$

Invert and arrange to fit answer (invert signs that move);

$$y[n] = 0.1172x[n] + 0.1172x[n-1] + 0.7656y[n-1]$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
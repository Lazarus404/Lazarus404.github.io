---
layout: page
title: DSP | Filters | Lowpass Chebyshev Type 1 Filter
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
<a href="lp-chebyshev-type-1.html" class="button special small">Lowpass Chebyshev</a>
<a href="iir-filter.html" class="button small">IIR Filter</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Design a Lowpass Chebyshev Type 1 Filter

A low pass Chebyshev Type 1 filter is required to be designed with the following specification;

$$\displaylines{
H_{pass}dB = 0.5dB \\
H_{stop}dB = 15dB \\
f_{pass} = 1200Hz\\
f_{stop} = 12000Hz\\
f_{s} = 28800Hz}$$

Determine the digital frequencies to 5 significant figures (sig.fig.);

$$\displaylines{
\text{Pass band: }\omega_{dp} = \frac{fpass}{fs/2} \times \pi = 0.2618 \text{ rad/s} \\
\text{Stop band: }\omega_{ds} = \frac{fstop}{fs/2} \times \pi = 2.6180 \text{ rad/s}
}$$

##### MATLAB

    HpassdB = 0.5; HstopdB = 15; fpass = 1200; fstop = 12000; fs = 28800;
    omegadp = (fpass / (fs/2)) * pi
    % ans =
    %     0.2618
    omegads = (fstop / (fs/2)) * pi
    % ans =
    %     2.6180

### Warping the Filter

Apply the warping equation to determine the following frequencies;

$$\displaylines{
\text{Pass band: }\omega_{ap} = 2f_{s} \times tan(\frac{fpass}{2f_{s}}) = 57600 \times tan(\frac{0.2618}{57600}) = 0.2618 \text{ rad/s} \\
\text{Stop band: }\omega_{as} = 2f_{s} \times tan(\frac{fstop}{2f_{s}}) = 57600 \times tan(\frac{2.6180}{57600}) = 2.6180 \text{ rad/s}
}$$

##### MATLAB

    omegaap = 2 * fs * tan(omegadp/(2*fs))
    % ans =
    %     0.2618
    omegaas = 2 * fs * tan(omegads/(2*fs))
    % ans =
    %     2.6180

### Filter Order

Determine the order of the filter and the actual required order;

$$\displaylines{
\text{Order of the filter: } Order_{e} = \frac{1}{acosh(\frac{max(\omega_{ap},\omega_{as})}{min(\omega_{ap},\omega_{as})})} \times acosh\left(\sqrt{\frac{10^{0.1 \times H_{stop}dB)}-1}{10^{(0.1 \times H_{pass}dB)}-1}}\right) \\
\text{when } V_{s} = \frac{max(\omega_{ap},\omega_{as})}{min(\omega_{ap},\omega_{as})} = 28.3477402704905 \\
\epsilon_{stop} = 10^{0.1 \times H_{stop}dB}-1 = 30.6228 \\
\epsilon_{pass} = 10^{0.1 \times H_{pass}dB}-1 = 0.1220 \\
\therefore Order_{e} = \frac{1}{acosh(V_{s})} \times acosh(\sqrt{\frac{\epsilon_{stop}}{\epsilon_{pass}}}) = 0.826020164 \\
\text{Required order of the filter: } Order_{a} = ceil(Order_{e}) = 1
}$$

##### MATLAB

    Vs = max(omegaap,omegaas) / min(omegaap,omegaas)
    % ans =
    %     28.3477402704905
    Estop = 10^(0.1*HstopdB) - 1
    % ans =
    %     30.6228
    Epass = 10^(0.1*HpassdB) - 1
    % ans =
    %     0.1220
    OrderE = (1/acosh(Vs)) * (acosh(sqrt(Estop/Epass)))
    % ans =
    %     0.826020164
    OrderR = ceil(OrderE)
    % ans =
    %     1

### Analogue Prototype

Determine the analogue prototype with the form;

$$H(s) = \frac{b_{1}}{s + b_{0}}$$

where

$$\displaylines{
\Omega_{fc} = \frac{f_{pass}}{f_{s}/2} \times \pi = 0.2618 \\
A = tan\left(\frac{\Omega_{fc}}{2}\right) = 0.1317 \\
\therefore H(s) = \frac{2f_{c}A}{s + 2f_{c}A} = \frac{7583.2}{s + 7583.2} \\
}$$

##### MATLAB

    Omegafc = (fpass / (fs/2)) * pi
    % ans =
    %     0.2618
    A = tan(Omegafc/2)
    % ans =
    %     0.1317
    b = 2*fpass*A
    % ans =
    %     7583.2 

Therefore;

$$\displaylines{
b_{1} = 7583.2 \\
b_{0} = 7583.2
}$$

### Bilinear Transform

Using the Bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z+1)}{z+c{1}}$$

Thus;

$$\displaylines{
s = 2f_{s}\frac{1-z^{-1}}{1+z^{-1}} \\
\therefore H(z) = \frac{2f_{s}A}{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}+2f_{s}A} = \left(\frac{2f_s}{2f_{s}}\right) \cdot \frac{A(1+z^{1})}{(1-z^{-1})+A(1+z^{-1})} \\
H(z) = \frac{0.1317(1+z^{1})}{(1-z^{-1})+0.1317(1+z^{-1})}
}$$

The z-transform is then;

$$H(z) = \frac{Y(z)}{X(z)} = \frac{A + Az^{-1}}{1 + A + (A - 1)z^{-1}}$$

Rearranging, we have;

$$H(z) = \frac{A}{1+A} \cdot \frac{z+1}{z+\frac{A-1}{1+A}} = \frac{0.1317}{1.1317} \cdot \frac{z+1}{z+0.7673} = \frac{0.1317(z+1)}{z+0.1490}$$


<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
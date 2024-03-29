---
layout: page
title: DSP | Filters | Chebyshev Type 1 Filter
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
<a href="butterworth.html" class="button small">Butterworth</a>
<a href="chebyshev-type-1.html" class="button special small">Chebyshev</a>
<a href="prototypes.html" class="button small">Prototypes</a>
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
\text{Pass band: }\omega_{dp} = 2 \times \pi \times fpass = 7539.8 \text{ rad/s} \\
\text{Stop band: }\omega_{ds} = 2 \times \pi \times fstop = 75398 \text{ rad/s}
}$$

##### MATLAB

    HpassdB = 0.5; HstopdB = 15; fpass = 1200; fstop = 12000; fs = 28800;
    omegadp = 2 * pi * fpass
    % ans =
    %     7539.8
    omegads = 2 * pi * fstop
    % ans =
    %     75398

### Warping the Filter

Apply the warping equation to determine the following frequencies;

$$\displaylines{
\text{Pass band: }\omega_{ap} = 2f_{s} \times tan(\frac{omegadp}{2f_{s}}) = 57600 \times tan(\frac{7539.8}{57600}) = 7.5832 \text{ rad/s} \\
\text{Stop band: }\omega_{as} = 2f_{s} \times tan(\frac{omegads}{2f_{s}}) = 57600 \times tan(\frac{75398}{57600}) = 2.1497 \text{ rad/s}
}$$

##### MATLAB

    omegaap = 2 * fs * tan(omegadp/(2*fs))
    % ans =
    %     7.5832
    omegaas = 2 * fs * tan(omegads/(2*fs))
    % ans =
    %     2.1497

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
    OrderE = (1/acosh(Vs)) * acosh(sqrt(Estop/Epass))
    % ans =
    %     0.826020164
    OrderR = ceil(OrderE)
    % ans =
    %     1

### Analogue Prototype

Determine the analogue prototype with the form;

$$H(s) = \frac{b_{1}}{s + b_{0}}$$

Is simply;

$$\displaylines{
b_{1} = 2.8628 * \Omega_{ap} = 21709 \\
b_{0} = 2.8628 * \Omega_{ap} = 21709
}$$

### Bilinear Transform

<details markdown=block>
<summary markdown=span>Low pass - 1st order</summary>

Using the Bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z+1)}{z+c{1}}$$

Thus;

$$\displaylines{
s = 2f_{s}\frac{1-z^{-1}}{1+z^{-1}} \\
\therefore H(z) = \frac{b_{1}}{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}+b_{0}} = \frac{21709(z+1)}{57600(z-1)+21709(z+1)}
}$$

Multiply out the brackets of the denominator;

$$H(z) = \frac{b_{1}}{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}+b_{0}} = \frac{21709(z+1)}{57600z-57600+21709z+21709}$$

Group like terms;

$$H(z) = \frac{21709(z+1)}{z(57600+21709)+21709-57600}$$

Divide by numbers with \\(z\\);

$$H(z) = \frac{\left(\frac{21709(z+1)}{57600+21709}\right)}{z+\left(\frac{21709-57600}{57600+21709}\right)}$$

Results in;

$$H(z) = \frac{0.2737(z+1)}{z-0.4525}$$

##### MATLAB

    Y = b1 / ((2*fs)+b1)
    % ans =
    %     0.2737
    X = (b0 - (2*fs)) / ((2*fs)+b0)
    % ans =
    %     -0.4525

</details>

<details markdown=block>
<summary markdown=span>High pass - 1st order</summary>

Using the Bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z-1)}{z+c{1}}$$

Thus;

$$\displaylines{
s = 2f_{s}\frac{1-z^{-1}}{1+z^{-1}} \\
\therefore H(z) = \frac{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}}{b_{0}+2f_{s}\frac{1-z^{-1}}{1+z^{-1}}} = \frac{57600(z-1)}{21709(z-1)+57600(z+1)}
}$$

Multiply out the brackets of the denominator;

$$H(z) = \frac{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}}{b_{0}+2f_{s}\frac{1-z^{-1}}{1+z^{-1}}} = \frac{57600(z-1)}{21709z-21709+57600z+57600}$$

Group like terms;

$$H(z) = \frac{57600(z-1)}{z(21709+57600)+57600-21709}$$

Divide by numbers with \\(z\\);

$$H(z) = \frac{\left(\frac{57600(z-1)}{21709+57600}\right)}{z+\left(\frac{57600-21709}{21709+57600}\right)}$$

Results in;

$$H(z) = \frac{0.7262(z-1)}{z+0.4525}$$

##### MATLAB

    Y = (2*fs) / ((2*fs) + b1)
    % ans =
    %     0.7262
    X = ((2*fs) - b0) / (b0 + (2*fs))
    % ans =
    %     0.4525

</details>

<details markdown=block>
<summary markdown=span>Low pass - 2nd order</summary>

Using the bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z-1)^2}{z^{2}+c_{1}z+c_{2}}$$

We can easily attain the form;

$$\frac{\beta_{0}z^2 + \beta_{1}z + \beta_{2}}{\alpha_{0}z^2 \alpha_{1}z + \alpha}$$

Taking the value of \\(\frac{\omega_{ap}}{2f_{s}}\\) as \\(\omega\\), we derive;

$$\displaylines{
\beta_{0} = \beta_{2} = \frac{\omega^2}{1+\sqrt{2}\omega + \omega^2} \\
\beta_{1} = 2\beta_{0} \\
\alpha_{0} = 1 \\
\alpha_{1} = \frac{2(\omega^{2}-1)}{1+\sqrt{2}\omega+\omega^{2}} \\
\alpha_{2} = \frac{\omega^{2}-\sqrt{2}\omega+1}{1+\sqrt{2}\omega+\omega^{2}}
}$$

Resulting in;

$$\displaylines{
\frac{0.0848z^2 + 0.1696z - 0.0848}{z^2 -1.0243z + 0.3636} \\
= \frac{0.0848(z+1)^{2}}{z^2 -1.0243z + 0.3636}
}$$

We then multiply by the Chebyshev prototype values for second order;

$$\displaylines{
\frac{(1.4314 \times 0.0848)(z+1)^{2}}{z^2 + (1.4256 \times -1.0243)z + (1.5162 \times 0.3636)} \\
= \frac{0.1214(z+1)^{2}}{z^2 -1.4602z + 0.5513}
}$$

##### MATLAB

    fs = 28800; omegaap = 21709; fs2 = fs * 2;
    p1 = 1 + ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p3 = 1 - ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p2 = -2 + ((omegaap * sqrt(2))^2 / fs2^2);
    w = omegaap/fs2;
    z1 = ((w^2)/(1 + sqrt(2) * w + w^2)) * 1.4314
    p2 = (p2 / p1) * 1.4256
    p3 = (p3 / p1) * 1.5162
    p1 = 1

</details>

<details markdown=block>
<summary markdown=span>High pass - 2nd order</summary>

Using the bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z-1)^2}{z^{2}+c_{1}z+c_{2}}$$

Taking our prototype, we divide the numerator and denominator by \\(s\\);

$$\displaylines{
H(z) = \frac{1}{\frac{21709}{s}^{2}+\left(\frac{21709}{s}\sqrt{2}\right) + 1} \\
= \frac{s^{2}}{21709^{2}+\left(s21709\sqrt{2}\right)+s^{2}}
}$$

Then, replacing \\(s\\) with \\(2 \times f_{s} \times \frac{(z-1)}{(z+1)}\\) leads to;

$$\frac{\left(57600\frac{(z-1)}{(z+1)}\right)^{2}}{\left(57600\frac{(z-1)}{(z+1)}\right)^{2}+\left(\left(57600\frac{(z-1)}{(z+1)}\right)21709\sqrt{2}\right)+21709^{2}}$$

Multiply the top and bottom by \\((z+1)^{2}\\);

$$\frac{\left(57600(z-1)\right)^{2}}{\left(57600(z-1)\right)^{2}+\left(\left(57600(z-1)(z+1)\right)21709\sqrt{2}\right)+21709(z+1)^{2}}$$

Apply the rule of algebra, factoring common power of \\(z\\). Divide both numerator and denominator by \\(\left(57600\right)^{2}\\);

$$\displaylines{
\frac{\frac{\left(57600(z-1)\right)^{2}}{\left(57600\right)^{2}}}{\frac{\left(57600(z-1)\right)^{2}}{\left(57600\right)^{2}}+\frac{\left(\left(57600(z-1)(z+1)\right)21709\sqrt{2}\right)}{\left(57600\right)^{2}}+\frac{21709(z+1)^{2}}{\left(57600\right)^{2}}} \\
= \frac{(z-1)^{2}}{(z-1)^{2}+\left((z-1)(z+1)0.5330063\right)+0.1420479(z+1)^{2}} \\
= \frac{(z-1)^{2}}{z^{2}-2z+1+z^{2}-1(0.5330063)+z^{2}+2z+1(0.1420479)} \\
= \frac{(z-1)^{2}}{z^{2}-2z+1+0.5330063z^{2}-0.5330063+0.1420479z^{2}+0.0352516z+0.1420479}
}$$

Collect like terms;

$$\frac{(z-1)^{2}}{1.6750542z^2-1.7159091z+0.6090416}$$

Divide top and bottom by \\(1.20538\\);

$$\displaylines{
\frac{\frac{(z-1)^{2}}{1.6750542}}{\frac{1.6750542z^2}{1.6750542}-\frac{1.7159091z}{1.6750542}+\frac{0.6090416}{1.6750542}} \\
= \frac{0.5970(z-1)^{2}}{z^2+1.0243z+0.3636}
}$$

We then multiply by the Chebyshev prototype values for second order;

$$\displaylines{
\frac{(1.4314 \times 0.5970)(z-1)^{2}}{z^2 + (1.4256 \times -1.0243)z + (1.5162 \times 0.3636)} \\
= \frac{0.8545(z-1)^{2}}{z^2 -1.4602z + 0.5513}
}$$

##### MATLAB

    fs = 28800; omegaap = 21709; fs2 = fs * 2;
    p1 = 1 + ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p3 = 1 - ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p2 = -2 + ((omegaap * sqrt(2))^2 / fs2^2);
    z1 = (1 / p1) * 1.4314
    p2 = (p2 / p1) * 1.4256
    p3 = (p3 / p1) * 1.5162
    p1 = 1

</details>
<p></p>

### Time Domain

Derive a time domain equation representing the input signal as \\(x[n]\\) and the output as \\(y[n]\\) so that:

$$y[n] = d_{0}x[n] + d_{1}x[n-1] + d_{2}y[n-1]$$

So, with;

$$H(z) = \frac{0.2737(z+1)}{z-0.4525}$$

Multiply out the brackets;

$$H(z) = \frac{0.2737z+0.2737}{z-0.4525} = \frac{Y(z)}{X(z)}$$

Cross multiply the bottom to \\(Y(z)\\);

$$y(z) \times z-0.4525 = x(z) \times 0.2737z+0.2737$$

Multiply out the brackets;

$$z - 0.4525z^{-1} = 0.2737z + 0.2737z^{-1}$$

Invert and arrange to fit answer (invert signs that move);

$$y[n] = 0.2737x[n] + 0.2737x[n-1] + 0.4525y[n-1]$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
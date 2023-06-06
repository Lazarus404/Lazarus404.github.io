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
<a href="prototypes.html" class="button small">Prototypes</a>
<a href="iir-filter.html" class="button small">IIR Filter</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Design a Butterworth Filter

A (low pass or high pass) Butterworth filter is required to be designed with the following specification;

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
\text{Order of the filter: } Order_{e} = log_{10}\left(\frac{10^{0.1 \times H_{stop}dB}-1}{10^{0.1 \times H_{pass}dB}-1}\right) \times \frac{1}{2 \cdot log_{10}\left(\frac{max(\omega_{ap},\omega_{as})}{min(\omega_{ap},\omega_{as})}\right)} \\
\text{when } V_{s} = \frac{max(\omega_{ap},\omega_{as})}{min(\omega_{ap},\omega_{as})} = 15.6398 \\
\epsilon_{stop} = 10^{0.1 \times H_{stop}dB}-1 = 198.5262 \\
\epsilon_{pass} = 10^{0.1 \times H_{pass}dB}-1 = 0.9953 \\
\therefore Order_{e} = log_{10}\left(\frac{\epsilon_{stop}}{\epsilon_{pass}}\right) \times \frac{1}{2 \cdot log_{10}(Vs)} = 0.9629 \\
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
    OrderE = log10(Estop/Epass)*1/(2*log10(Vs))
    % ans =
    %     0.9629
    OrderR = ceil(OrderE)
    % ans =
    %     1

### Analogue Prototype

<details markdown=block>
<summary markdown=span>1st order</summary>

Determine the analogue prototype with the form;

$$H(s) = \frac{b_{1}}{s + b_{0}}$$

Is simply;

$$\displaylines{
b_{1} = \Omega_{ap} = 12007 \\
b_{0} = \Omega_{ap} = 12007
}$$

##### MATLAB

    b0 = omegaap
    b1 = omegaap

</details>

<details markdown=block>
<summary markdown=span>2nd order</summary>

Determine the analogue prototype with the form;

$$\frac{b_{0}^{2}}{s^{2}+b_{1}s+b_{2}}$$

From the prototype, we have; 

$$\displaylines{
b_{0} = 1 \\
b_{1} = \frac{\Omega_{ap}}{Q} = \frac{\Omega_{ap}}{\left(\frac{1}{\sqrt{2}}\right)} = \Omega_{ap} \times \sqrt{2} = 16981.70 \\
b_{2} = \Omega_{ap}^{2} = 144189053
}$$

##### MATLAB

    b0 = 1
    b1 = omegaap * sqrt(2)
    b2 = omegaap^2

</details>
<p></p>

### Bilinear Transform

<details markdown=block>
<summary markdown=span>Low pass - 1st order</summary>

Using the Bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z+1)}{z+c{1}}$$

Thus;

$$\displaylines{
s = 2f_{s}\frac{1-z^{-1}}{1+z^{-1}} \\
\therefore H(z) = \frac{b_{1}}{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}+b_{0}} = \frac{12007(z+1)}{90440(z-1)+12007(z+1)}
}$$

Multiply out the brackets of the denominator and group like terms;

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

</details>

<details markdown=block>
<summary markdown=span>High pass - 1st order</summary>

Using the Bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z+1)}{z+c{1}}$$

Taking the lowpass analog prototype;

$$H(s) = \frac{1}{s + 1}$$

We apply the prototype transformation to highpass;

$$H(s) = \frac{1}{\frac{\omega_{c}}{s} + 1} = \frac{s}{s + 12007}$$

Thus;

$$\displaylines{
s = 2f_{s}\frac{1-z^{-1}}{1+z^{-1}} \\
\therefore H(z) = \frac{2f_{s}\frac{1-z^{-1}}{1+z^{-1}}}{2f_{s}\frac{1-z^{-1}}{1+z^{-1}} + 12007} = \frac{90440(z-1)}{12007(z+1)+90440(z-1)}
}$$

Multiply out the brackets of the denominator and group like terms;

$$H(z) = \frac{90440(z-1)}{z(12007+90440)+90440-12007}$$

Divide by numbers with \\(z\\);

$$H(z) = \frac{\left(\frac{90440(z-1)}{12007+90440}\right)}{z+\left(\frac{90440-12007}{12007+90440}\right)}$$

Results in;

$$H(z) = \frac{0.8828(z+1)}{z+0.7656}$$

##### MATLAB

    Y = (2*fs) / (b1+(2*fs))
    % ans =
    %     0.8828
    X = ((2*fs) - b0) / (b0+(2*fs))
    % ans =
    %     0.7656

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
\frac{0.0146z^2 + 0.0292z - 0.0146}{z^2 -1.6300z + 0.6885} \\
= \frac{0.0146(z+1)^{2}}{z^2 -1.6300z + 0.6885}
}$$

##### MATLAB

    fs = 45220; omegaap = 12007; fs2 = fs * 2;
    p1 = 1 + ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p3 = 1 - ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p2 = -2 + ((omegaap * sqrt(2))^2 / fs2^2);
    z1 = (omegaap^2)/(1 + sqrt(2) * omegaap + omegaap^2)
    p2 = p2 / p1
    p3 = p3 / p1
    p1 = 1

</details>

<details markdown=block>
<summary markdown=span>High pass - 2nd order</summary>

Using the bilinear transformation, derive the z-domain transfer function and put it in the form;

$$H(z) = \frac{c_{0}(z-1)^2}{z^{2}+c_{1}z+c_{2}}$$

Taking our prototype, we divide the numerator and denominator by \\(s\\);

$$\displaylines{
H(z) = \frac{1}{\frac{12007}{s}^{2}+\left(\frac{12007}{s}\sqrt{2}\right) + 1} \\
= \frac{s^{2}}{12007^{2}+\left(s12007\sqrt{2}\right)+s^{2}}
}$$

Then, replacing \\(s\\) with \\(2 \times f_{s} \times \frac{(z-1)}{(z+1)}\\) leads to;

$$\frac{\left(90440\frac{(z-1)}{(z+1)}\right)^{2}}{\left(90440\frac{(z-1)}{(z+1)}\right)^{2}+\left(\left(90440\frac{(z-1)}{(z+1)}\right)12007\sqrt{2}\right)+12007^{2}}$$

Multiply the top and bottom by \\((z+1)^{2}\\);

$$\frac{\left(90440(z-1)\right)^{2}}{\left(90440(z-1)\right)^{2}+\left(\left(90440(z-1)(z+1)\right)12007\sqrt{2}\right)+12007(z+1)^{2}}$$

Apply the rule of algebra, factoring common power of \\(z\\). Divide both numerator and denominator by \\(\left(90440\right)^{2}\\);

$$\displaylines{
\frac{\frac{\left(90440(z-1)\right)^{2}}{\left(90440\right)^{2}}}{\frac{\left(90440(z-1)\right)^{2}}{\left(90440\right)^{2}}+\frac{\left(\left(90440(z-1)(z+1)\right)12007\sqrt{2}\right)}{\left(90440\right)^{2}}+\frac{12007(z+1)^{2}}{\left(90440\right)^{2}}} \\
= \frac{(z-1)^{2}}{(z-1)^{2}+\left((z-1)(z+1)0.1877539\right)+0.0176258(z+1)^{2}} \\
= \frac{(z-1)^{2}}{z^{2}-2z+1+z^{2}-1(0.1877539)+z^{2}+2z+1(0.0176258)} \\
= \frac{(z-1)^{2}}{z^{2}-2z+1+0.1877539z^{2}-0.1877539+0.0176258z^{2}+0.0352516z+0.0176258}
}$$

Collect like terms;

$$\frac{(z-1)^{2}}{1.20538z^2-1.964748z+0.829872}$$

Divide top and bottom by \\(1.20538\\);

$$\displaylines{
\frac{\frac{(z-1)^{2}}{1.20538}}{\frac{1.20538z^2}{1.20538}-\frac{1.964748z}{1.20538}+\frac{0.829872}{1.20538}} \\
= \frac{0.8296(z-1)^{2}}{z^2-1.6300z+0.6885}
}$$

##### MATLAB

    fs = 45220; omegaap = 12007; fs2 = fs * 2;
    p1 = 1 + ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p3 = 1 - ((omegaap * sqrt(2))/fs2) + (omegaap^2 / fs2^2);
    p2 = -2 + ((omegaap * sqrt(2))^2 / fs2^2);
    z1 = 1 / p1
    p2 = p2 / p1
    p3 = p3 / p1
    p1 = 1

</details>
<p></p>

### Time Domain

<details markdown=block>
<summary markdown=span>Low pass - 1st order</summary>

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

</details>

<details markdown=block>
<summary markdown=span>High pass - 2nd order</summary>

Derive a time domain equation representing the input signal as \\(x[n]\\) and the output as \\(y[n]\\) so that:

$$y[n] = d_{0}x[n] + d_{1}x[n-1] + d_{2}x[n-2] + d_{3}y[n-1] + d_{4}y[n-2]$$

So, with;

$$\frac{0.8296(z-1)^{2}}{z^2-1.6300z+0.6885}$$

Multiply out the brackets;

$$\frac{0.8296z^2-1.6592z+0.8296}{z^2-1.6300z+0.6885}$$

Divide top and bottom by \\(z^2\\);

$$H(z) = \frac{Y(z)}{X(z)} = \frac{0.8296-1.6592z^{-1}+0.8296z^{-2}}{1-1.6300z^{-1}+0.6885z^{-2}}$$

Cross multiply both sides by both denominators

$$Y(z)[1 - 1.6300z^{-1} + 0.68852^{-2}] = X(z)[0.8296 - 1.6592z^{-1} + 0.8296z^{-2}]$$

$$Y(z) = Y(z) z^{-1}1.6300 + Y(z)^{-2}0.6885 = X(z)0.8296-X(z)^{-1}1.6592 + X(z)^{-2}0.8296$$

Therefore;

$$y[n] = 0.8296x[n] - 1.6592x[n-1] + 0.8296x[n-2] + 1.6300y[n-1] - 0.6885y[n-2]$$

</details>
<br />

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
---
layout: page
title: DSP | Theory | Math | Bilinear Transform
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

<a href="../../calculators.html" class="button small">Calculators</a>
<a href="../../theory" class="button special small">Theory</a>
<a href="../../z-domain" class="button small">Z-Domain</a>
<a href="../../filters" class="button small">Filters</a>

<hr />

<a href="../" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="../" class="button small">Quantization & Sampling Theorem</a>
<a href="../math" class="button special small">Math</a>
<a href="../linear-systems.html" class="button small">Linear Systems</a>
<a href="../convolution.html" class="button small">Convolution</a>
<a href="../fourier-transform" class="button small">Fourier Transform</a>

<div></div>

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="z-transform" class="button small">Z-Transform</a>
<a href="bilinear-transform" class="button special small">Bilinear Transform</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### Introduction

The bilinear transformation may be defined by;

$$\displaylines{
s = c\frac{1-z^{-1}}{1+z^{-1}} \\
z^{-1} = \frac{1-s/c}{1+s/c}
}$$

where \\(c\\) is an arbitrary positive constant that we may set to map one analog frequency precisely to one digital frequency. In the case of a lowpass or highpass filter, \\(c\\) is typically used to set the cut-off frequency to be identical in the analog and digital cases.

### Second Order

Given the analog prototype;

$$H_{a}(s) = \frac{1}{(s+a)(s+\bar{a})}$$

where \\(a = e^{j \pi /4}\\), so that;

$$H_{a}(s) = \frac{1}{(s+e^{j \pi /4})(s+e^{-j \pi /4})} = \frac{1}{s^{2} + \sqrt{2}s + 1}$$

To convert this to digital form, we apply the bilinear transform;

$$s = c\frac{1-z^{-1}}{1+z^{-1}}$$

where we set;

$$c = cot(\omega_{c}T/2) \overset{\Delta}{=} \frac{cos(\omega_{c}T/2)}{sin(\omega_{c}T/2)}$$

to obtain a digital cut-off frequency at \\(\omega_{c}\\) radians per second. For example, choosing \\(\omega_{c} T = \pi/2\\) (a cut off at one-fourth the sampling rate), we get;

$$c = \frac{cos(\pi/4)}{sin(\pi/4)} = 1$$

and the digital filter transfer function is;

$$\displaylines{
H_d(z) = H_a\left(\frac{1-z^{-1}}{1+z^{-1}}\right) = \frac{1}{\left(\frac{1-z^{-1}}{1+z^{-1}}\right)^2 + \sqrt{2}\left(\frac{1-z^{-1}}{1+z^{-1}}\right) + 1} \\
 = \frac{(1+z^{-1})^2}{(1-2z^{-1}+z^{-2}) + (\sqrt{2} - \sqrt{2}z^{-2}) + (1+2z^{-1}+z^{-2})} \\
 = \frac{(1+z^{-1})^2}{(2+\sqrt{2}) + (2-\sqrt{2})z^{-2}} \\
 = \frac{1}{2+\sqrt{2}}\frac{(1+z^{-1})^2}{1 + \frac{2-\sqrt{2}}{2+\sqrt{2}}z^{-2}}
}$$

Note that the numerator is \\((1+z^{-1})^2\\), as predicted earlier.

As a check, we can verify that the dc gain is 1;

$$H_d(1) = \frac{2^2}{2+\sqrt{2} + 2-\sqrt{2}} = 1$$

It is also immediately verified that \\(H_d(-1) = 0\\), i.e., that there is a (double) notch at half the sampling rate.
In the analog prototype, the cut-off frequency is \\(\omega_a=1\\) rad/sec, where the amplitude response is \\(G_a(j)=1/\sqrt{2}\\) . Since we mapped the cut-off frequency precisely under the bilinear transform, we expect the digital filter to have precisely this gain. The digital frequency response at one-fourth the sampling rate is;

$$H_d(j) = \frac{(1-j)^2}{2+\sqrt{2} - (2-\sqrt{2})} = -\frac{j}{\sqrt{2}}$$

and \\(20\log_{10}(\left\vert H_d(j)\right\vert)=-3\\) dB as expected.

Note that the phase at cut-off is exactly -90 degrees in the digital filter. This can be verified against the pole-zero diagram in the \\(z\\) plane, which has two zeros at \\(z = -1\\), each contributing +45 degrees, and two poles at \\(z=\pm j\sqrt{\frac{2-\sqrt{2}}{2+\sqrt{2}}}\\), each contributing -90 degrees. Thus, the calculated phase-response at the cut-off frequency agrees with what we expect from the digital pole-zero diagram.

In the \\(s\\) plane, it is not as easy to use the pole-zero diagram to calculate the phase at \\(\omega_a=1\\), we quickly obtain;

$$H_a(j\cdot 1) = \frac{1}{j^2 + \sqrt{2}j + 1} = -\frac{j}{\sqrt{2}}$$

and exact agreement with \\(H_d(e^{j\pi/2})\\) is verified.

###### Example

With the values;

$$\displaylines{
H_{pass}dB = 3db \\
H_{stop}dB = 26db \\
f_{pass} = 12600Hz \\
f_{stop} = 2100Hz \\
f_{s} = 69300Hz
}$$

Determine the analogue prototype using the appropriate prototype transformation and express the result in the form;

$$H(s) = \frac{b_{0}s^{2}}{s^{2} + b_{1}s + b_{2}}$$

So, the analog prototype of a second order lowpass Butterworth filter is;

$$H(s) = \frac{1}{s^{2} + \sqrt{2}s + 1}$$

For a highpass filter, this is further expanded as;

$$H(s) = \frac{1}{\left(\frac{\omega_{c}}{s}\right)^{2} + \sqrt{2}\left(\frac{\omega_{c}}{s}\right) + 1}$$

To design our highpass filter, we first obtain the digital frequency in radians per second;

$$\omega_{d} = 2\pi f = 2\pi(12600) = 25200 \pi \text{ rad/sec, and } T = 1/f_{s} = 1/69300 \text{ sec.}$$

Following the steps of the design procedure, we compute the prewarped analog frequency as;

$$\omega_{a} = \frac{2}{T} tan\left(\frac{\omega_{d}T}{2}\right) = 89072.81$$

After applying the prototype transformation, we have;

$$\displaylines{
A = \omega_{a}^{2} = 7933965481 \\
B = \sqrt{2}\omega_{a} = 12596.80 \\
H(s) = \frac{7933965481}{s^{2} + 12596.80s + 7933965481}
}$$

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>
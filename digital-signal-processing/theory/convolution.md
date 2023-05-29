---
layout: page
title: DSP | Theory | Convolution
description: Digital Signal Processing
image: nil
nav-menu: false
show_tile: false
---

<a href="../calculators.html" class="button small">Calculators</a>
<a href="../theory" class="button special small">Theory</a>
<a href="../z-domain" class="button small">Z-Domain</a>
<a href="../filters" class="button small">Filters</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="./" class="button small">Quantization & Sampling Theorem</a>
<a href="math" class="button small">Math</a>
<a href="linear-systems.html" class="button small">Linear Systems</a>
<a href="convolution.html" class="button special small">Convolution</a>
<a href="fourier-transform" class="button small">Fourier Transform</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

Convolution is the mathematical operation of combining two signals to get a resulting signal. Typically, the two signals in question are the *input signal* and the *impulse response*.

<img src="/assets/images/dsp/convolution.png" />

### Delta Function

The *delta function* is a *normalised impulse response*. Another way of describing it is as the *unit impulse* or the *identity of convolution*, much like 0 is the identity of addition and 1 is the identity of multiplication.

The delta function is denoted as <code>&delta;[n]</code>, pronounced *delta of n*.

The result of the delta function is that the sample of *n* is one, while all other samples are zero.

### Impulse Response

The impulse response is the signal produced as output when the delta function is provided as input to a system. Here, different systems will produce different impulse responses.

The impulse response is denoted as <code>h[n]</code>, pronounced *h of n*.

<img src="/assets/images/dsp/delta-and-impulse.png" />

Any impulse can be represented as a *shifted* and *scaled* delta function. For example, <code>x[n] = -1.5&delta;[n - 8]</code> would result in;

<img src="/assets/images/dsp/delta-shift-scale.png" />

which is essentially the delta function shifted right by 8 samples and multipled by 1.5.

In digital filter design, the impulse response is called the *filter kernel*, *convolution kernel* or simply the *kernel*. In image processing, however, it is termed *point spread function*.

### Convolution Operation

The convolution operation is represented by an asterisk <code>&ast;</code>. Thus, <code>input * impulse_response = output</code>.

##### Output Length

The output signal length will be equal to the input length plus the impulse response length minus 1.

<code>y[n] = x[n] + h[n] - 1</code>

Thus, an input with 8 samples and an impulse response of 6 signals will result in an output of 13 samples.

##### The Operation

The input signal is decomposed into single sample components and each component is *passed through* the system. Each of those samples then contribute to a *scaled* and *shifted* version of the impulse response. The output components are then synthesized (combined) to produce the output signal.

Let's take a simple example.

Input <code>[0, -1, -1.5, 2]  &Sigma;</code>
Impulse Response <code>[1, -0.5]</code>

To convolute, we apply the scale from the impulse response to index *n*, shifted *n* places for each index up to <code>x[n] - (h[n] - 1)</code>

<img src="/assets/images/dsp/output-of-convolution.png" />

The equation, therefore, is;

<img src="/assets/images/dsp/convolution-equation.png" />

where <code>M</code> is the number of samples in <code>h[n]</code> and <code>j</code> is merely an iterator.

With this knowledge, we can therefore identify the convoluted value of a sample using the equation as follows.

To determine <code>y[3]</code>;

    y[3] = x[2]h[n-2] + x[3]h[n-3]
         = x[2]h[3-2] + x[3]h[3-3]
         = x[2]h[1] + x[3]h[0]
         = (-1.5 x -0.5) + (2 x 1)
         = 0.75 + 2
         = 2.75

### Delta Function Revisited

Note that the simplest impulse response is the delta function, so that;

<code>x[n] * &delta;[n] = x[n]</code>

where convoluting any signal with a delta function results in the exact same signal.

##### Delta Function Scaling

If you increate the amplitude of the delta function, then the resulting impulse response is amplified, while a decreased amplitude will attenuate;

<code>x[n] * k&delta;[n] = kx[n]</code>

##### Delta Function Shifting

Shifting the delta function to the right produces a corresponding delay between the input signal and the output signal.

<code>&delta;[n - s]</code>

Shifting the delta function to the left produces a corresponding advance between the input signal and output signal.

<code>&delta;[n + s]</code>

### Properties of Convolution

Convolution exhibits several mathematical properties, including;

##### Commutitive Property

<code>x[n] * y[n] = y[n] * x[n]</code>

##### Associative Property

<code>(x[n] * y[n]) * z[n] = y[n] * (x[n] * z[n])</code>

##### Distributive Property

<code>(x[n] * y[n]) + (x[n] * z[n]) = x[n] * (y[n] + z[n])</code>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

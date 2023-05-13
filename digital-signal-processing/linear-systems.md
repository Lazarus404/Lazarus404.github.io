---
layout: page
title: DSP | Linear Systems
description: Digital Signal Processing
image: nil
nav-menu: false
show_tile: false
---

<a href="calculators.html" class="button small">Calculators</a>
<a href="sampling-theorem.html" class="button small">Quantization & Sampling Theorem</a>
<a href="linear-systems.html" class="button special small">Linear Systems</a>
<a href="convolution.html" class="button small">Convolution</a>
<a href="fourier-transform" class="button small">Fourier Transform</a>
<a href="z-domain" class="button small">Z-Domain</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### What is a system?

A system is a process that produces an output signal in response to an input signal. Thus, a system may itself be a composition of multiple systems.

Systems are described mathematically using a signal naming convention, whereby;

* continuous signals are denoted using parentheses - <code>x(t)</code>
* discrete signals are denoted using square brackets - <code>x[t]</code>
* signals in the time domain are denoted using lowercase letters - <code>x(t)</code>
* signals in the frequency domain are denoted using uppercase letters - <code>X(f)</code>

Thus, a discrete signal in the frequency domain might be <code>Y[f]</code>.

### Properties of Linear Systems

Linear Systems exhibit numerous qualities which make them very easy to work with, including;

##### Homogeneity

Any change in amplitude of an input signal will result in a calculable change in amplitude of the output signal.

Thus, if an input of <code>x[n]</code> results in <code>y[n]</code>, then <code>2x[n]</code> would result in <code>2y[n]</code>.

##### Additivity

Signals can be added together without interacting. Thus;

<code>x<sub>1</sub>[n]</code> -> <code>y<sub>1</sub>[n]</code><br/>
<code>x<sub>2</sub>[n]</code> -> <code>y<sub>2</sub>[n]</code><br/>
<code>x<sub>1</sub>[n] + x<sub>2</sub>[n]</code> -> <code>y<sub>1</sub>[n] + y<sub>2</sub>[n]</code>

##### Shift Invariance

A shift in the input signal causes an identical shift in the output signal, where;

<code>x[n]</code> -> <code>y[n]</code><br />
<code>x[n + s]</code> -> <code>y[n + s]</code>

### Superposition

The response of a linear system to a sum of signals is the sum of the responses to each individual input signal.  Therefore, if an input containing three signals were passed through a linear system, the output would be the same as if each signal were passed in individually, then combined at the output.

##### Impulse Decomposition

Impulse decomposition breaks up an *n* samples signal into *n* component signals, each containing *n* samples. Each of those component signals _contains one point_ from the original signal, with all other values set to zero. The single non-zero point is, therefore, the *impulse*.

The aim of impulse decomposition is to enable the analysis of each sample, one at a time. Since linear systems are predictable, the output can therefore be calculated for any given input.

<img src="/assets/images/dsp/impulse-decomposition.png" />

##### Step Decomposition

Step decomposition breaks up an *n* samples signal similarly to impulse decomposition, but arranges them as steps. This means that all samples proceding the focus sample are set to the same value, while preceding samples are zero as before.

Step decomposition characterizes signals by the difference between adjacent samples.

<img src="/assets/images/dsp/step-decomposition.png" />

### Unit Impulse

The unit impulse function is a fundamental function in DSP. The symbol of a unit impulse function is the Greek delta <code>&delta;</code>. Here, <code>&delta;(n) = 1</code> if <code>n = 0</code>, and 0 everywhere else.

# Questions

This section contains my own answers to questions. They may or may not be correct.

### Impulse Function and Digital Signals

##### (a) Draw three impulse function, <code>&delta;[n - v]</code> for values of <code>v = 0</code>, <code>v = 5</code> and <code>v = -3</code>

<img src="/assets/images/dsp/linear-systems/a.png" />

##### (b) Given a function <code>g(n) = 5</code> draw <code>g(k)&delta;[n - k]</code> for values of <code>-5 < k < 5</code>

<img src="/assets/images/dsp/linear-systems/b.png" />

##### (c) If a continuous sine wave is defined as <code>x(t) = a sin(t2&pi;f)</code> define the digital version using <code>n</code> for the samples and <code>T<sub>s</sub></code> seconds for the sample interval.

<code>x[n] = a sin(n2&pi;(f/f<sub>s</sub>))

##### (d) State the sample frequency of this digitised sine wave (remember to include units).

<code>f<sub>s</sub></code>

##### (e) If the frequency of the sine wave is <code>8000Hz</code>, what is the period (remember to include units)?

<code>1/8000 = 125e-6 = 125&micro;s</code>

### Linear Time Invariant Systems and Digital Convolution

##### (a) What is the Princsple of Superposition and why is it useful?

Superposition is the means by which the sum of unique output signals through a system is equivelent to the sum of an output of the same signals from a system. Thus, if you feed all signals combined, or feed signals individually and combine at the output, the result is the same.

##### (b) Draw the system diagram using time delays, addition and multiplication for a moving average filter <code>y[n] = (x[n] + x[n-1] + x[n-2] + x[n-3] + x[n-4]) / 5</code>

<img src="/assets/images/dsp/linear-systems/2b.png" />

##### (c) Calculate the impulse response of this moving average filter (5 stage) showing all steps.

<code>
x[n] = [1,0,0,0,0], h[n] = 1/5<br />
x[n-1] = [0,1,0,0,0], h[n-1] = 1/5<br />
x[n-2] = [0,0,1,0,0], h[n-2] = 1/5<br />
x[n-3] = [0,0,0,1,0], h[n-3] = 1/5<br />
x[n-4] = [0,0,0,0,1], h[n-4] = 1/5<br />
<br />
h[n] = (1/5) when 0 &leq; n < 5 and 0 everywhere else
</code>

##### (d) Convolve, showing all calculation steps, this moving average filter with a unit step function <code>u[n] = {1 if n &GreaterEqual; 0, 0 if n < 0}</code>

<code>
1/5 = h[0]<br />
2/5 = h[0] + h[1] = (1/5) + (1/5)<br />
3/5 = h[0] + h[1] + h[2] = (1/5) + (1/5) + (1/5)<br />
4/5 = h[0] + h[1] + h[2] + h[3] = (1/5) + (1/5) + (1/5) + (1/5)<br />
1 = h[0] + h[1] + h[2] + h[3] + h[4] = (1/5) + (1/5) + (1/5) + (1/5) + (1/5)<br />
1 = h[0] + h[1] + h[2] + h[3] + h[4] + h[5] = (1/5) + (1/5) + (1/5) + (1/5) + (1/5) + 0<br />
...
</code>

##### (e) <code>y[n] = (1/4) (x[n+1] + x[n] + x[n-1] + x[n-2])</code> and <code>y[n] = (1/4) (x[n] + x[n-1] + x[n-2] + x[n-3])</code> are 4 term non-causal and causal moving average filters respectively. What does non-causal mean? (Explain in 1 sentence).

Non-causal typically refers to a convolution algorithm that is not dependent on future (+) signal values.

##### (f) The equations for these 4 term moving average filters are known as difference equations. Most differene equations for Linear Time Invariant (LTI) systems can be put into the following form. Place the 4 term moving average filters into this more general form.

<img src="/assets/images/dsp/linear-systems/2f.png" />

Non-Causal<br />
<img src="/assets/images/dsp/linear-systems/2f1.png" />

Causal<br />
<img src="/assets/images/dsp/linear-systems/2f2.png" />

##### (g) Convolve a 2 term causal moving average filter y[n] with the following signal.

<code>
f[n] = 2&nbsp;&nbsp;&nbsp;when n = 3,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5 when 0 &leq; n &leq; 2,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.7 when 4 &leq; n &leq; 7,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;everywhere else
</code>

Show all essential working and steps.

Here, no values are given for input indicies less than zero, so we can outline causal only. Maximum value is 7 (+1 for 2 term impulse).

<code>
(n = 0) = (1/2)(0.5 + 0) = 0.25<br />
(n = 1) = (1/2)(0.5 + 0.5) = 0.5<br />
(n = 2) = (1/2)(0.5 + 0.5) = 0.5<br />
(n = 3) = (1/2)(2 + 0.5) = 1.25<br />
(n = 4) = (1/2)(0.7 + 2) = 1.35<br />
(n = 5) = (1/2)(0.7 + 0.7) = 0.7<br />
(n = 6) = (1/2)(0.7 + 0.7) = 0.7<br />
(n = 7) = (1/2)(0.7 + 0.7) = 0.7<br />
(n = 8) = (1/2)(0 + 0.7) = 0.35<br />
(n = 9) = 0<br />
...
</code>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

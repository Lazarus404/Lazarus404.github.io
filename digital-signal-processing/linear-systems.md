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

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

### What is a system?

A system is a process that produces an output signal in response to an input signal. Thus, a system my itself be a composition of multiple systems.

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

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

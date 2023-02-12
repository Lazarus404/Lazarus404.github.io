---
layout: page
title: DSP | DFT
description: Digital Signal Processing
image: nil
nav-menu: false
show_tile: false
---

<a href="../sampling-theorem.html" class="button small">Quantization & Sampling Theorem</a>
<a href="../linear-systems.html" class="button small">Linear Systems</a>
<a href="../convolution.html" class="button small">Convolution</a>
<a href="../fourier-transform" class="button special small">Fourier Transform</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

Fourier Transform is a set of mathematical techniques based on *decomposing signals into sinusoids*. The version of fourier transform used for discrete signals is known as Discrete Fourier Transform (DFT).

Any continuous periodic signal could be represented as the sum of *properly chosen sinusoidal waves*.

### Signal Categories

<table style="width: 1000px;">
  <tr>
    <td style="vertical-align: top;">
      Aperiodic continuous
    </td>
    <td style="vertical-align: top;">
      Fourier Transform
    </td>    
    <td style="vertical-align: top;" rowspan="4">
      <img src="/assets/images/dsp/types-of-signal.png" width="300" />
    </td>
  </tr>
  <tr>
    <td style="vertical-align: top;">
      Periodic continuous
    </td>
    <td style="vertical-align: top;">
      Fourier Series
    </td>
  </tr>
  <tr>
    <td style="vertical-align: top;">
      Aperiodic discrete
    </td>
    <td style="vertical-align: top;">
      Discrete Time Fourier Transform
    </td>
  </tr>
  <tr>
    <td style="vertical-align: top;">
      Periodic discrete
    </td>
    <td style="vertical-align: top;">
      Discrete Fourier Transform
    </td>
  </tr>
</table>

### Composition

Each of the four Fourier Transforms can be further subdivided into *real* and *complex* versions where the *real* version consists of *ordinary numbers* and the *complex* version consists of *complex numbers*.

<img src="/assets/images/dsp/dft-decomposition.png" />

When an *n sample* time domain signal <code>x[]</code> running from 0 to <code>n-1</code> is passed through DFT, two frequency domain signals are produced. Each of these signals are <code>(n/2) + 1</code> samples long, running from 0 to <code>n/2</code>.

* Time domain refers to _samples taken over time_.
* Frequency domain refers to the _amplitudes of the sine and cosine waves_ produced.
* The frequency domain contains the same information as the time domain, but in a different format.
* Remember that *time domain* values are represented with *lowercase letters* and *frequency domain* with *uppercase letters*.

The frequency domain numbers are labelled *real* (ReX) and *imaginary* (ImX). However, they are both still *ordinary numbers*, <stong>not</stong> *complex numbers*. It is therefore better to consider them as simply the sine and cosine representations of the frequency data.

### Horizontal Axis of Frequency Domain

When labelling the horizontal axis for the frequency domain, it can be approached in one of three ways;

* as an index from 0 to <code>n/2</code>.
* as a fraction of the frequency running from 0 to 0.5.
* as a natural frequency from 0 to &pi;.

Note that when labelling as a fraction, it is only necessary to go to 0.5. This is due to the Nyquist Theorem. If the signal is properly sampled, there should be no frequency above 0.5.

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

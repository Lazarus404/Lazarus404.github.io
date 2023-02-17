---
layout: page
title: DSP | Calculators
description: Digital Signal Processing
image: nil
nav-menu: false
show_tile: false
---

<script src="/assets/js/dsp.js"></script>
<script src="/assets/js/calculators.js"></script>

<a href="calculators.html" class="button special small">Calculators</a>
<a href="sampling-theorem.html" class="button small">Quantization & Sampling Theorem</a>
<a href="linear-systems.html" class="button small">Linear Systems</a>
<a href="convolution.html" class="button small">Convolution</a>
<a href="fourier-transform" class="button small">Fourier Transform</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

## Convolution

<a name="convolution" />

<table>
  <tr>
    <td colspan="3">
      <textarea id="conv-x-values" onchange="conv_update();" placeholder="Put sample values here"></textarea>
    </td>
    <td colspan="2">
      <textarea id="conv-h-values" onchange="conv_update();" placeholder="Put impulse response here"></textarea>
    </td>
    <td colspan="1" style="max-width: 100px;">
      <button onclick="conv_update();">Update</button>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <input id="conv-index" onchange="conv_update();" type="text" />
    </td>
  </tr>
  <tr>
    <td colspan="6">
      <div style="min-height: 50px; max-width: 1400px; padding: 20px; overflow-x: scroll; display: flex; flex-wrap: no-wrap;">
        <div id="result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
    </td>
  </tr>
</table>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

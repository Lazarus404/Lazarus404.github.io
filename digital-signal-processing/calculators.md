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
<a href="theory" class="button small">Theory</a>
<a href="z-domain" class="button small">Z-Domain</a>
<a href="filters" class="button small">Filters</a>

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
        <div id="conv-result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
    </td>
  </tr>
</table>

## Running Sum

<a name="convolution_rs" />

<table>
  <tr>
    <td colspan="5">
      <textarea id="convrs-x-values" onchange="convrs_update();" placeholder="Put sample values here"></textarea>
    </td>
    <td colspan="1" style="max-width: 100px;">
      <button onclick="convrs_update();">Update</button>
    </td>
  </tr>
  <tr>
    <td colspan="6">
      <div style="min-height: 50px; max-width: 1400px; padding: 20px; overflow-x: scroll; display: flex; flex-wrap: no-wrap;">
        <div id="convrs-result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
    </td>
  </tr>
</table>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

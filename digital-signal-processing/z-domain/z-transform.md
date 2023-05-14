---
layout: page
title: DSP | Z-Domain | Z-Transform
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
    inlineMath: [['\\(', '\\)'], ['||', '||']]
  }
};
</script>

<a href="../calculators.html" class="button small">Calculators</a>
<a href="../sampling-theorem.html" class="button small">Quantization & Sampling Theorem</a>
<a href="../linear-systems.html" class="button small">Linear Systems</a>
<a href="../convolution.html" class="button small">Convolution</a>
<a href="../fourier-transform" class="button small">Fourier Transform</a>
<a href="../z-domain" class="button special small">Z-Domain</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="z-transform.html" class="button special small">Z-Transform</a>
<a href="z-transfer.html" class="button small">Z-Transfer</a>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

The Z-Transform (ZT) is a mathematical tool which is used to convert the difference equations in time domain into the algebraic equations in <a href="z-domain.html">z-domain</a>.

The Z-Transform may be of two types; unilateral (or one-sided) and bilateral (or two-sided). For discrete signal processing, we typically focus on the unilateral, right-sided transform.

If \\(x(n)\\) is a discrete-time signal or sequence, its uni-lateral Z-Transform is defined as;

$$Z[x(n)] = X(z) = \sum_{n=0}^\infty x(n)z^{-n}$$

You can establish a connection between the discrete-time Fourier Transform and the Z-Transform through the polar form of \\(z\\).

$$X(z)|_{z=re^{j \hat{\omega}}} = X(re^{j \hat{\omega}}) = \sum_{n=0}^\infty x[n](re^{j \hat{\omega}})^{-n}$$

$$= \sum_{n=0}^\infty(x[n]r^{-n})e^{-j \hat{\omega} n} = F\{x[n]r^{-n}\}$$

When \\(r = 1\\), this evaluates \\(X(z)\\) over the unit circle as \\(\omega\\) varies.

<img src="/assets/images/dsp/unit-circle.png" />

### Region of Convergence (ROC)

The set of points in the z-plane, for which the Z-transform of a discrete-time sequence \\(x(n)\\), that is \\(X(z)\\) converges is called the region of convergence (ROC) of the Z-transform \\(X(z)\\).

For any given discrete-time sequence, the Z-transform may or may not converge. If there is no point in the z-plane for which the function \\(X(z)\\) converges, then the sequence \\(x(n)\\) is said to be having no z-transform.

### Z-Transform Theorems

The following table provides common transform theorems which can help quickly convert from the time domain to the z-domain. Transform theorems
can be applied generally to any signal.

<table dir="ltr" width="500" border="1" 
      summary="list of common z-transform theorems">
  <caption>Transform Theorems</caption>
  <thead>
    <tr>
      <th>Property</th>
      <th>x[n]</th>
      <th>X(z)</th>
      <th>ROC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Linearity</td>
      <td>||ax_{1}[n] + bx_{2}[n]||</td>
      <td>||aX_{1}(z) + bX_{2}(z)||</td>
      <td>at least ||R_{x_1} \cap R_{x_2}||</td>
    </tr>
    <tr>
      <td>Delay (time shift)</td>
      <td>||x[n-n_{0}]||</td>
      <td>||z^{-n_{0}} X(z)||</td>
      <td>||R_{x}||, maybe exclude 0 or ||\infty||</td>
    </tr>
    <tr>
      <td>Differentiation</td>
      <td>||nx[n]||</td>
      <td>||-z\frac{dX(z)}{dz}||</td>
      <td>||R_{x}||, maybe exclude 0 or ||\infty||</td>
    </tr>
    <tr>
      <td>Conjugation</td>
      <td>||x^{*}[n]||</td>
      <td>||X^{*}(z^{*})||</td>
      <td>||R_{x}||</td>
    </tr>
    <tr>
      <td>Convolution</td>
      <td>||x_{1}[n]*x_{2}[n]||</td>
      <td>||X_{1}(z)X_{2}(z)||</td>
      <td>at least ||R_{x_1} \cap R_{x_2}||</td>
    </tr>
    <tr>
      <td>First difference</td>
      <td>||x[n]-x[n-1]||</td>
      <td>||(1-z^{-1})X(z)||</td>
      <td>at least ||R_{x} \cap \{|z|>0\}||</td>
    </tr>
    <tr>
      <td>Accumulation</td>
      <td>||\sum_{k=-\infty}^{n} x[k]||</td>
      <td>||\frac{1}{1-z^{-1}} X(z)||</td>
      <td>at least ||R_{x} \cap \{|z|<\infty\}||</td>
    </tr>
    <tr>
      <td>Initial value</td>
      <td>||x[0] = \lim_{z\to\infty}X(z)||</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">||R_{x}|| is the ROC of ||x[n]||, and so on</td>
    </tr>
  </tfoot>
</table>

### Z-Transform Pairs

The following table provides common transform pairs which can help quickly convert from the time domain to the z-domain. Transform pairs involve
a specific signal and corresponding z-transform. The transform pairs in this
section emphasize right-sided signals and causal systems.

<table dir="ltr" width="500" border="1" 
      summary="list of common z-transform pairs">
  <caption>Transform Pairs</caption>
  <thead>
    <tr>
      <th>x[n], ||n \geq 0||</th>
      <th>X(z)</th>
      <th>ROC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>||\delta[n]||</td>
      <td>||1||</td>
      <td>|||z| > 0||</td>
    </tr>
    <tr>
      <td>||au[n]||</td>
      <td>||\frac{az}{z-1}||</td>
      <td>|||z|>1||</td>
    </tr>
    <tr>
      <td>||nu[n]||</td>
      <td>||\frac{z}{(z-1)^{2}}||</td>
      <td>|||z|>1||</td>
    </tr>
    <tr>
      <td>||n^{2}u[n]||</td>
      <td>||\frac{z(z+1)}{(z-1)^{3}}||</td>
      <td>|||z|>1||</td>
    </tr>
    <tr>
      <td>||a^{n}u[n]||</td>
      <td>||\frac{1}{1-az^{-1}} = \frac{z}{z-a}||</td>
      <td>|||z|>|a|||</td>
    </tr>
    <tr>
      <td>||-a^{n}-u[-n]||</td>
      <td>||\frac{1}{1-az^{-1}} = \frac{z}{z-a}||</td>
      <td>|||z|<|a|||</td>
    </tr>
    <tr>
      <td>||(n+1)a^{n}u[n]||</td>
      <td>||\frac{1}{(1-az^{-1})^{2}} = \frac{z}{(z-a)^{2}}||</td>
      <td>|||z|>|a|||</td>
    </tr>
    <tr>
      <td>||na^{n}u[n]||</td>
      <td>||\frac{a}{(1-az^{-1})^{2}} = \frac{az}{(z-a)^{2}}||</td>
      <td>|||z|>|a|||</td>
    </tr>
    <tr>
      <td>||e^{-na}u[n]||</td>
      <td>||\frac{z}{(z-e^{-a})}||</td>
      <td>|||z|>e^{-a}||</td>
    </tr>
    <tr>
      <td>||r^{n}cos(\hat{\omega}_{0}n)u[n]||</td>
      <td>||\frac{1-(r \cdot cos(\hat{\omega}_{0})z^{-1}}{1-(2 \cdot r \cdot cos(\hat{\omega}_{0})z^{-1}+r^{2}z^{-2}}||</td>
      <td>|||z|>r||</td>
    </tr>
    <tr>
      <td>||r^{n}sin(\hat{\omega}_{0}n)u[n]||</td>
      <td>||\frac{1-(r \cdot sin(\hat{\omega}_{0})z^{-1}}{1-(2 \cdot r \cdot cos(\hat{\omega}_{0})z^{-1}+r^{2}z^{-2}}||</td>
      <td>|||z|>r||</td>
    </tr>
    <tr>
      <td>||a^{n}(u[n] - u[n-N])||</td>
      <td>||\frac{1-a^{N}z^{-N}}{1-az^{-1}}||</td>
      <td>|||z|>0||</td>
    </tr>
  </tbody>
</table>

<a href="/digital-signal-processing">&#x2190; Back to Digital Signal Processing</a>

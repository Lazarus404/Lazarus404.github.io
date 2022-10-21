---
layout: page
title: Normal | Chi Goodness-of-Fit
description: Normal comparison function
image: nil
nav-menu: false
show_tile: false
---

<a href="../binomial.html" class="button small">Binomial</a>
<a href="../poisson.html" class="button small">Poisson</a>
<a href="./" class="button special small">Normal</a>
<a href="../charts" class="button small">Charts</a>

<hr />

<a href="./" style="border-bottom: none;"><i class="icon fa-home">&nbsp;</i></a>
<a href="central-limit-theorem.html" class="button small">Central Limit Theorem</a>
<a href="central-tendency.html" class="button small">Central Tendency</a>
<a href="standard-deviation.html" class="button small">Standard Deviation</a>
<a href="process-capability.html" class="button small">Process Capability</a>
<a href="rmsd.html" class="button small">RMSD</a>
<a href="chi.html" class="button special small">Chi</a>
<a href="error-types.html" class="button small">Error Types</a>

<script src="/assets/js/spc.js"></script>
<script src="/assets/js/chi.js"></script>

<a href="/quality-management">&#x2190; Back to Quality Management</a>

A chi-square (&chi;<sup>2</sup>) Goodness-of-Fit test is a type of Pearson’s chi-square test. You can use it to test whether the observed distribution of a categorical variable differs from your expectations. A categorical test represents groupings of data, such as a normal chart class.

The formula for this is <code>&chi;<sup>2</sup> = &Sigma;<sup>(&fnof;<sub>af</sub> - &fnof;<sub>tf</sub>)<sup>2</sup></sup> &frasl; <sub>&fnof;<sub>tf</sub></sub></code>, where <code>af</code> is the actual frequency and <code>tf</code> is the theoretical frequency.

The resulting value <code>&chi;<sup>2</sup></code> can be compared against the table below; <code>&chi;<sup>2</sup>&alpha;,&nu;</code> where;

<code>&alpha;</code> is a predefined level of significance (typically 0.05).<br />
<code>&nu;</code> is the degree of freedom. <code>&nu; = m - r - 1</code><br />
<code>m</code> is the number of classes having a value of 5 or more.<br />
<code>r</code> is the number of parameters of the distribution. For normal distribution, there are 2 parameters; <code>&micro;</code> and <code>&sigma;</code>

If the value of <code>&chi;<sup>2</sup></code> is smaller than the table result, then it may be acceptable. A large valuer suggests a larger difference between <code>&fnof;<sub>af</sub></code> and <code>&fnof;<sub>tf</sub></code>.

<table>
  <th>
    <td colspan="7" style="text-align: center;">&alpha;</td>
  </th>
  <tr>
    <td>&nu;</td>
    <td>0.5</td>
    <td>0.1</td>
    <td>0.05</td>
    <td>0.025</td>
    <td>0.01</td>
    <td>0.005</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0.455</td>
    <td>2.706</td>
    <td>3.841</td>
    <td>5.024</td>
    <td>6.635</td>
    <td>7.879</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1.386</td>
    <td>4.605</td>
    <td>5.991</td>
    <td>7.378</td>
    <td>9.210</td>
    <td>10.597</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2.366</td>
    <td>6.251</td>
    <td>7.815</td>
    <td>9.348</td>
    <td>11.345</td>
    <td>12.838</td>
  </tr>
  <tr>
    <td>4</td>
    <td>3.357</td>
    <td>7.779</td>
    <td>9.488</td>
    <td>11.143</td>
    <td>13.277</td>
    <td>14.860</td>
  </tr>
  <tr>
    <td>5</td>
    <td>4.351</td>
    <td>9.236</td>
    <td>11.070</td>
    <td>12.833</td>
    <td>15.086</td>
    <td>16.750</td>
  </tr>
  <tr>
    <td>6</td>
    <td>5.348</td>
    <td>10.645</td>
    <td>12.592</td>
    <td>14.449</td>
    <td>16.812</td>
    <td>18.548</td>
  </tr>
  <tr>
    <td>7</td>
    <td>6.346</td>
    <td>12.017</td>
    <td>14.067</td>
    <td>16.013</td>
    <td>18.475</td>
    <td>20.278</td>
  </tr>
  <tr>
    <td>8</td>
    <td>7.344</td>
    <td>13.362</td>
    <td>15.507</td>
    <td>17.535</td>
    <td>20.090</td>
    <td>21.955</td>
  </tr>
  <tr>
    <td>9</td>
    <td>8.343</td>
    <td>14.684</td>
    <td>16.919</td>
    <td>19.023</td>
    <td>21.666</td>
    <td>23.589</td>
  </tr>
  <tr>
    <td>10</td>
    <td>9.342</td>
    <td>15.987</td>
    <td>18.307</td>
    <td>20.483</td>
    <td>23.209</td>
    <td>25.188</td>
  </tr>
  <tr>
    <td>11</td>
    <td>10.341</td>
    <td>17.275</td>
    <td>19.675</td>
    <td>21.920</td>
    <td>24.725</td>
    <td>26.757</td>
  </tr>
  <tr>
    <td>12</td>
    <td>11.340</td>
    <td>18.549</td>
    <td>21.026</td>
    <td>23.337</td>
    <td>26.217</td>
    <td>28.300</td>
  </tr>
  <tr>
    <td>13</td>
    <td>12.340</td>
    <td>19.812</td>
    <td>22.362</td>
    <td>24.736</td>
    <td>27.688</td>
    <td>29.819</td>
  </tr>
  <tr>
    <td>14</td>
    <td>13.339</td>
    <td>21.064</td>
    <td>23.685</td>
    <td>26.119</td>
    <td>29.141</td>
    <td>31.319</td>
  </tr>
  <tr>
    <td>15</td>
    <td>14.339</td>
    <td>22.307</td>
    <td>24.996</td>
    <td>27.488</td>
    <td>30.578</td>
    <td>32.801</td>
  </tr>
  <tr>
    <td>16</td>
    <td>15.338</td>
    <td>23.542</td>
    <td>26.296</td>
    <td>28.845</td>
    <td>32.000</td>
    <td>34.267</td>
  </tr>
  <tr>
    <td>17</td>
    <td>16.338</td>
    <td>24.769</td>
    <td>27.587</td>
    <td>30.191</td>
    <td>33.409</td>
    <td>35.718</td>
  </tr>
  <tr>
    <td>18</td>
    <td>17.338</td>
    <td>25.989</td>
    <td>28.869</td>
    <td>31.526</td>
    <td>34.805</td>
    <td>37.156</td>
  </tr>
  <tr>
    <td>19</td>
    <td>18.338</td>
    <td>27.204</td>
    <td>30.144</td>
    <td>32.852</td>
    <td>36.191</td>
    <td>38.582</td>
  </tr>
  <tr>
    <td>20</td>
    <td>19.337</td>
    <td>28.412</td>
    <td>31.410</td>
    <td>34.170</td>
    <td>37.566</td>
    <td>39.997</td>
  </tr>
</table>

----

## Chi Calculator

To use, enter the actual frequencies as a comma-delimited or new-line-delimited list. The theoretical values field may be a list with size equal to that of the actual frequencies list.

<table>
  <tr>
    <td colspan="3">
      Degree of Freedom (&nu;)
      <select id="data-nu"></select>
    </td>
    <td colspan="3">
      Number of Parameters (2 in Normal Distribution)
      <select id="data-param"></select>
    </td>
  </tr>
  <tr>
    <td colspan="6">
      <textarea id="data-act" onchange="update();" placeholder="Actual frequency values here"></textarea>
    </td>
  </tr>
  <tr>
    <td colspan="5">
      <textarea id="data-the" onchange="update();" placeholder="Theoretical frequency values here"></textarea>
    </td>
    <td colspan="1" style="max-width: 100px;">
      <button onclick="update();">Update</button>
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

----

## Chi "Test Normality" Calculator

To use, enter the actual frequencies as a comma-delimited list with each sample group on a new-line.

<table>
  <tr>
    <td colspan="6">
      Degree of Freedom (&nu;)
      <select id="data-test-nu"></select>
    </td>
  </tr>
  <tr>
    <td colspan="5">
      <textarea id="data-test-act" onchange="update();" placeholder="Frequency values here">
18.0, 16.2, 15.3, 12.0, 12.5, 15.5, 13.8, 17.6, 14.8, 15.8
18.7, 17.6, 14.2, 15.8, 13.4, 17.0, 14.6, 17.2, 17.4, 17.0
19.2, 15.2, 16.0, 19.4, 14.0, 17.5, 16.3, 17.0, 22.5, 15.4
16.8, 14.3, 14.6, 130.0,16.4, 11.5, 14.8, 12.9, 16.5, 18.2
15.5, 18.2, 15.9, 18.4, 13.5, 15.4, 12.5, 16.3, 18.2, 14.8
16.1, 15.5, 17.3, 16.6, 18.1, 14.6, 14.9, 18.9, 12.8, 15.1
      </textarea>
    </td>
    <td colspan="1" style="max-width: 100px;">
      <button onclick="updateTest();">Update</button>
    </td>
  </tr>
  <tr>
    <td colspan="6">
      <div style="min-height: 50px; max-width: 1400px; padding: 20px; overflow-x: scroll; display: flex; flex-wrap: no-wrap;">
        <div id="test-result" style="display: inline-block; flex: 0 0 auto;"></div>
      </div>
    </td>
  </tr>
</table>

<a href="/quality-management">&#x2190; Back to Quality Management</a>
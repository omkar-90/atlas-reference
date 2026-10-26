import React from 'react';
import Link from 'next/link';
import {
  Table,
  Grid,
  Sliders,
  Network,
  BarChart3,
  GitBranch,
  Target,
  Cpu,
  Layers,
  LineChart,
  Radio,
  ArrowRight,
  BookOpen,
  GraduationCap
} from 'lucide-react';

export default function HomePage() {
  const prePlots = [
    { href: '/visualizations/design-table', title: 'Design Table', type: 'Matrix / Grid', desc: 'Tabular DoE parameter inspection, missing value handling, and boundary exploration.' },
    { href: '/visualizations/correlation', title: 'Correlation Matrix', type: 'Heatmap', desc: 'Pearson & Spearman rank correlation heatmaps for pairwise linear/monotonic dependencies.' },
    { href: '/visualizations/sensitivity', title: 'Sensitivity Matrix', type: 'Heatmap (%)', desc: 'Global screening sensitivity using Spearman Coefficient of Importance (CoI).' },
    { href: '/visualizations/anthill', title: 'Anthill Plot', type: '2D/3D Scatter', desc: 'Multi-dimensional 2D/3D scatter plots for space-filling coverage, clusters, outliers, and nonlinear trends.' },
    { href: '/visualizations/histogram', title: 'Histogram & Bounds', type: 'Distribution', desc: 'Empirical probability density, mean, median, and ±1σ / ±3σ statistical tolerance bands.' },
    { href: '/visualizations/parallel-coordinates', title: 'Parallel Coordinates', type: 'Polyline', desc: 'High-dimensional geometry mapping multivariate design constraints and trade-offs.' },
    { href: '/visualizations/spider', title: 'Spider / Radar Chart', type: 'Radial Polar', desc: 'Multi-criteria design profile benchmarking and normalized performance envelopes.' },
  ];

  const postPlots = [
    { href: '/post-visualizations/cop-matrix', title: 'CoP Matrix', type: 'Variance (%)', desc: 'Coefficient of Prognosis (CoP) and Sobol variance decomposition for model feature importance.' },
    { href: '/post-visualizations/response-surface', title: 'Response Surface', type: '3D Topography', desc: '3D continuous surrogate prediction landscapes (Kriging, Polynomial Chaos, Neural Models).' },
    { href: '/post-visualizations/residual-plot', title: 'Residual Diagnostics', type: 'Scatter / Error', desc: 'Predicted vs. actual diagnostics, heteroscedasticity, R² goodness-of-fit, and RMSE.' },
    { href: '/post-visualizations/signal-plot', title: 'Signal / Field Plot', type: 'Functional Curve', desc: 'Functional Data Analysis (FDA) for continuous transient curves and spatial field envelopes.' },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ifm-font-color-base)] sm:text-4xl">
          Atlas Plots & Charts Documentation
        </h1>
        <p className="text-base text-[var(--ifm-font-color-base)] opacity-85 leading-[1.65]">
          A clean, technical reference guide for engineering visualizations in Atlas. Every plot is documented with mathematical foundations, interpretation heuristics, and peer-reviewed citations indexed in Scopus, IEEE, ASME, Springer, and Wiley texts.
        </p>
      </div>

      {/* Two Core Hubs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--ifm-background-surface-color)] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[var(--ifm-color-primary)] font-semibold text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Pre-Visualization (DoE)</span>
            </div>
            <p className="text-sm text-[var(--ifm-font-color-base)] opacity-80 mb-4 leading-relaxed">
              Exploratory Data Analysis and Design of Experiments diagnostics. Inspect sample distributions, uncover collinearities, and verify space-filling properties prior to training.
            </p>
          </div>
          <Link
            href="/visualizations/design-table"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--ifm-color-primary)] hover:underline"
          >
            <span>Browse 7 Pre-Visualization Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--ifm-background-surface-color)] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[var(--ifm-color-primary)] font-semibold text-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Post-Visualization (Surrogates)</span>
            </div>
            <p className="text-sm text-[var(--ifm-font-color-base)] opacity-80 mb-4 leading-relaxed">
              Surrogate model diagnostics, global sensitivity decomposition (Sobol & CoP), 3D response landscapes, residual error analysis, and Functional Data Analysis for continuous physical curves.
            </p>
          </div>
          <Link
            href="/post-visualizations/cop-matrix"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--ifm-color-primary)] hover:underline"
          >
            <span>Browse 4 Post-Visualization Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Comparison Reference Table (Section 5) */}
      <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
        <h2 className="text-xl font-semibold text-[var(--ifm-font-color-base)]">
          Visualization Quick Reference
        </h2>
        
        <div className="docs-table-wrapper">
          <table className="docs-table">
            <thead>
              <tr>
                <th>Visualization</th>
                <th>Category</th>
                <th>Type</th>
                <th>Primary Use Case</th>
              </tr>
            </thead>
            <tbody>
              {prePlots.map((plot) => (
                <tr key={plot.href}>
                  <td>
                    <Link href={plot.href} className="text-[var(--ifm-color-primary)] hover:underline font-medium">
                      {plot.title}
                    </Link>
                  </td>
                  <td>Pre-Visualization</td>
                  <td className="font-mono text-xs opacity-75">{plot.type}</td>
                  <td className="text-xs opacity-85">{plot.desc}</td>
                </tr>
              ))}
              {postPlots.map((plot) => (
                <tr key={plot.href}>
                  <td>
                    <Link href={plot.href} className="text-[var(--ifm-color-primary)] hover:underline font-medium">
                      {plot.title}
                    </Link>
                  </td>
                  <td>Post-Visualization</td>
                  <td className="font-mono text-xs opacity-75">{plot.type}</td>
                  <td className="text-xs opacity-85">{plot.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clean Technical Standards Note */}
      <div className="p-4 rounded-lg bg-[var(--ifm-background-surface-color)] border border-[var(--border-color)] text-xs text-[var(--ifm-color-emphasis-700)] leading-relaxed">
        <span className="font-semibold text-[var(--ifm-font-color-base)]">Citation Integrity: </span>
        All mathematical equations and statistical metrics are referenced against primary publications in peer-reviewed literature, including <em>Technometrics</em>, <em>Computer Graphics Forum</em>, <em>Mathematics and Computers in Simulation</em>, and textbooks from John Wiley & Sons, Springer, and Chapman & Hall/CRC.
      </div>
    </div>
  );
}

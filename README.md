# Leetcode Learn Visualizers

Interactive algorithm visualizers for LeetCode study notes.

## Page Requirements

Every algorithm visualizer page must include:

- Step controls for moving through the algorithm state.
- A visible explanation of the main invariant or decision rule.
- A collapsible `Time / Space Complexity` section.
- A direct link from `index.html` with searchable metadata.

## Current Structure

This project is intentionally a static web app for now:

```text
index.html
3781_maximum_score_after_binary_swaps_visualizer.html
812_largest_triangle_area_visualizer.html
shoelace_formula_visualizer.html
```

Deploy the repository root as a static site. No build command is required.

When the number of visualizers grows, move pages into topic folders and extract shared CSS/JS:

```text
problems/
foundations/
assets/
```

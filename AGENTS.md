# Project Architecture Rules

- Keep portfolio-specific facts and section content in a dedicated data module consumed by the portfolio page, so profile claims remain consistent across sections.
- Keep decorative effects scoped to rendered page elements; remove external effect scripts that target elements the active page does not render, to avoid unnecessary runtime errors and loading.

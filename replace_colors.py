import re

with open('src/FawareLanding.css', 'r') as f:
    css = f.read()

# Replace hardcoded colors with variables
css = css.replace('#fafafa', 'var(--bg-color)')
css = css.replace('#fff', 'var(--card-bg)')
css = css.replace('#ffffff', 'var(--card-bg)')
css = css.replace('#111', 'var(--main-dark)')
css = css.replace('#555', 'var(--text-muted)')
css = css.replace('#666', 'var(--text-light)')

# Prepend the root variables
root_vars = """
:root {
  --bg-color: #fafafa;
  --card-bg: #fff;
  --main-dark: #111;
  --text-muted: #555;
  --text-light: #666;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #0a0a0a;
    --card-bg: #111;
    --main-dark: #fafafa;
    --text-muted: #aaa;
    --text-light: #888;
  }
}
"""

with open('src/FawareLanding.css', 'w') as f:
    f.write(root_vars + css)

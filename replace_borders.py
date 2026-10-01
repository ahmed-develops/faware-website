import re

with open('src/FawareLanding.css', 'r') as f:
    css = f.read()

# Replace border and shadow colors
css = re.sub(r'solid var\(--main-dark\)', r'solid var(--border-color)', css)
css = re.sub(r'box-shadow:(.*?)var\(--main-dark\)', r'box-shadow:\1var(--border-color)', css)
css = re.sub(r'border-top:(.*?)var\(--main-dark\)', r'border-top:\1var(--border-color)', css)
css = re.sub(r'border-bottom:(.*?)var\(--main-dark\)', r'border-bottom:\1var(--border-color)', css)

with open('src/FawareLanding.css', 'w') as f:
    f.write(css)

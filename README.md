# biancabqh.github.io

Personal website + blog, served by GitHub Pages at https://biancabqh.github.io

Plain HTML/CSS/JS. No build step.

## Layout

- `index.html` - main page (about + email/github/linkedin links)
- `blog.html` - list of posts
- `posts/` - one html file per post (`template.html` explains the copy-edit-push flow)
- `style.css` - all styling, light/dark via `prefers-color-scheme`
- `bg.js` - empty hook for a future animated background (canvas `#bg` already sits behind the content)

## Add a blog post

1. `cp posts/template.html posts/my-post.html`
2. edit it, then add a line to the list in `blog.html`
3. `git add -A && git commit -m "new post" && git push` - Pages redeploys in about a minute

## Local preview

`python3 -m http.server` in this folder, then open http://localhost:8000

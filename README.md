# snehalgore1.github.io

Personal portfolio of Snehal Gore, AI/ML and software engineer. Live at https://snehalgore1.github.io/

Built with React 19, TypeScript, Vite, Tailwind CSS v4 and Motion. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content

All copy lives in `src/data/portfolio.ts`; components only render it.

| What | Where in `portfolio.ts` |
| --- | --- |
| Hero line, About paragraphs, contact links | `profile` |
| Jobs (visible bullets, "Show more" bullets, metric chips) | `experience` |
| Industry deep dives (AiSnap, oven lens, dryer ETR, stain-care) | `caseStudies` |
| Personal and course projects | `projects` |
| Awards, papers, posters | `recognition` |
| Skills by track | `skills`, `skillTracks` |

Every number should match the master resume. Do not add metrics that are not on it.

## Run locally

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Résumé

`resume/Snehal_Gore_Resume.tex` is the source; compile with `pdflatex` and copy the PDF to `public/Snehal_Gore_Resume.pdf`.

## To do (on hold)

- [ ] GitHub: pin the best 6 repos (distributed object store, MiniTensorRT, agentic RAG, CUDA kernels, MoDE, Efficient-LLM). Each README opens with one line on what it is, one result number, and a diagram or GIF.
- [ ] LinkedIn: headline matching the site ("Software Engineer · AI & ML · USC M.S. CS Dec 2026 · ex-Whirlpool"), Open to Work on, portfolio link in Featured and contact info.

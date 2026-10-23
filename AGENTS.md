# Working context for AI coding agents — ProjectForge AI

This file helps future coding assistants work accurately with this repository. Full reference: [docs/KNOWLEDGE_BASE.md](docs/KNOWLEDGE_BASE.md).

## Verified facts

- ProjectForge AI is a static, mobile-first AI planning and learning MVP built with `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js` and PWA icons.
- It includes 30 **original** project ideas, nine AI skills, checklists, saved projects, notes, manually added inspiration URLs, template-based prompts, Markdown project brief export and JSON workspace backup/restore.
- It does **not** call an LLM. It has no backend, user accounts, payment processing, real AI agent runtime, RAG engine or automatic Pinterest import.
- User data lives in browser `localStorage` under `projectforge-ai-v1`. Avoid breaking data compatibility; explain backup/restore implications.
- The public Pinterest board reported 123 Pins, but only four thumbnail titles could be identified without authentication. Never invent unseen Pins, source URLs, or claim that the 30 original app ideas were copied from Pins.
- Linked learning resources, pricing, licences and live deployment state can change; recheck them.

## Operating rules

1. Inspect the latest repository code before edits; preserve user changes and do not alter unrelated repositories.
2. Keep UX responsive, accessible, keyboard-operable and usable on mobile. Prefer low-cost/simple implementations until requirements justify a backend.
3. Escape or validate untrusted text and external URLs. Never commit secrets, user data or confidential business information to this public repository.
4. Preserve backup/restore functionality and service-worker caching compatibility; increment the cache version after relevant changes.
5. Distinguish implemented functionality, proposals and verified test results. Never imply real LLM inference or live integrations that are not in the code.
6. Before claiming launch success, verify the GitHub Actions status and actual site response. GitHub Pages requires administrator enablement: [GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
7. Attribute Pinterest discoveries only where source metadata is verifiable. Do not reproduce copyrighted images without rights.
8. Update the knowledge base with a dated source note when significant facts or product scope change.

## Primary references

- [Full project knowledge base](docs/KNOWLEDGE_BASE.md)
- [README](README.md)
- [GitHub Pages deployment workflow](.github/workflows/deploy-pages.yml)
- [Original Pinterest board](https://au.pinterest.com/joshuawrightwayz2712/artificial-intelligence/)

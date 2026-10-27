# ProjectForge AI

An original **zero-API-cost**, mobile-first AI project discovery and planning app. It is inspired by **themes** from a publicly shared Pinterest board (not a reproduction of its Pins).

## Current status — 27 October 2026

**Live app:** https://joshuawayzwright.github.io/projectforge-ai/

ProjectForge AI is part of **The Solo Service Provider** development portfolio. The current v4 workspace includes **eight** standalone browser tools:

| Tool | Source |
| --- | --- |
| Prompt Vault | [apps/prompt-vault/](apps/prompt-vault/) |
| Idea Canvas | [apps/idea-canvas/](apps/idea-canvas/) |
| Priority Coach | [apps/priority-coach/](apps/priority-coach/) |
| Study Cards | [apps/study-cards/](apps/study-cards/) |
| Content Planner | [apps/content-planner/](apps/content-planner/) |
| Research Tracker | [apps/reading-tracker/](apps/reading-tracker/) |
| GitHub Live Hub | [apps/github-hub/](apps/github-hub/) |
| Workflow Lab | [apps/workflow-lab/](apps/workflow-lab/) |

GitHub Pages is already configured for this repository. The [latest audited deployment](https://github.com/joshuawayzwright/projectforge-ai/actions/runs/40110906848) succeeded at source commit [`5ef8f14`](https://github.com/joshuawayzwright/projectforge-ai/commit/5ef8f14b42c9dadfe7a1cf85642b6810652d5661). The main app, GitHub Live Hub and Workflow Lab returned HTTP 200 with their expected page titles on 27 October 2026. These reachability checks do not replace complete mobile, accessibility or functional acceptance testing.

The app uses local templates and browser storage. GitHub Live Hub reads public GitHub data; there is no model inference, customer authentication, cloud workspace sync, paid entitlement system or verified app-store publication. Commercial integration remains subject to the [integration roadmap](docs/POWERHOUSE-INTEGRATION.md).

## Features

- Explore **30 original** project ideas across three skill levels; search and filter by category and difficulty.
- Follow a roadmap through nine AI competencies.
- Build checklists, maintain notes, save favourite ideas, and export a GitHub-ready `BUILD_BRIEF.md`.
- Generate structured build/research/review prompts locally, without calling a paid AI service.
- Save Pinterest or other inspiration links manually, with source URLs and notes.
- Export and restore a local JSON workspace backup (with validation and replacement confirmation).
- Work offline after the first load thanks to a service worker.
- Responsive layout optimised for Android and desktop.

## Version 2.0 builds (23 October 2026)

The main planning workspace now includes skill-based search, build stage tracking, a saved-build CSV report and a directory of 24 official AI-tool links. The initial v2 release included three standalone starter apps inside `apps/`:

- **Prompt Vault** (`apps/prompt-vault/`): store/search/copy prompts and JSON import/export.
- **Idea Canvas** (`apps/idea-canvas/`): capture and edit concepts, export Markdown/JSON.
- **Priority Coach** (`apps/priority-coach/`): impact–effort task prioritisation, completion and CSV export.

All data is stored locally in each browser. No AI inference, backend or sync service is implemented. Run `node scripts/verify.mjs` for zero-dependency syntax and static asset checks. For a new fork, a signed-in repository administrator must enable GitHub Pages with GitHub Actions as the publishing source. This repository's Pages deployment is already configured.

## Version 3.0 expansion (24 October 2026)

Three more zero-API-cost interactive apps join the Build Lab (six total):

- **Study Cards** (`apps/study-cards/`): create/edit/deck-search flashcards, reveal answers, choose review intervals, show due cards and backup/restore JSON.
- **Content Planner** (`apps/content-planner/`): schedule original posts for six platforms, edit workflow stage, search, CSV export and JSON backup/restore. This tool does **not** publish posts.
- **Research Tracker** (`apps/reading-tracker/`): manually save verified HTTPS reading links, topics, personal notes and review status, plus Markdown and JSON export/restore. This tool does **not** scrape or summarise external sites.

No user authentication, automatic multi-device sync, AI inference or third-party account access was introduced. Each app has an independent localStorage key. The site uses GitHub Pages and automated source checks.

## Run locally

No Node.js, build tools, environment variables or API keys required.

```sh
python3 -m http.server 8080
```

Open **http://localhost:8080/**. Opening `index.html` directly can render basic UI but service workers require an HTTP(S) origin.

## Deploy

### GitHub Pages — new fork setup

The existing ProjectForge deployment is live at the URL above. Use these steps when publishing a new fork:

1. In **Settings → Pages**, change **Source** to **GitHub Actions**, then save. This one-time action requires a signed-in repository administrator.
2. Run the included **Deploy ProjectForge AI to GitHub Pages** workflow from the Actions tab (or push a change to `main`).
3. After a successful deployment, open the URL GitHub Pages reports. The app uses relative paths and supports project Pages locations.

### Vercel
1. Import the GitHub repository into Vercel.
2. Choose **Other** for the framework and leave the build command empty.
3. Serve the root directory as the output directory.

**Important:** Vercel's free Hobby plan is restricted to personal, non-commercial use. Check the current terms before using this as part of a paid product.

## Data and privacy

The app has no login, analytics, server API or external AI inference calls. Your saved projects, skill progress, inspiration links and notes stay in **your browser's localStorage**. The GitHub repository does not receive your notes and a new device will not automatically sync them. Use **Export workspace backup** before clearing browser data; use **Restore workspace backup** to load the JSON backup on a new device. The restore action replaces the current local workspace after confirmation. Avoid storing sensitive personal information.

External resource links open new tabs. The app does not scrape Pinterest or reproduce Pin images. No AI-generated claims of completed work, coding, or deployment are made.

## Inspiration attribution

The user's publicly shared [Artificial intelligence Pinterest board](https://au.pinterest.com/joshuawrightwayz2712/artificial-intelligence/) reportedly had 123 Pins when reviewed. Public page restrictions prevented inspecting the complete collection. Four visible thumbnail titles were identifiable: "9 AI Skills to Master in 2026", "60 Gen AI project ideas", "5 lessons from your brain (that could really help your computer)", and "15 Benefits of AI in Society". This prototype draws **general themes** from the first two; the project catalog and documentation are original and **should not be presented as the original contents of the Pins**.

## Scope limitations

This is a front-end MVP and requires no back-end service. It is **not** an LLM agent platform, a prompt execution engine, a Pinterest importer, a real workflow executor or a production subscription system. Structured prompts are generated with templates rather than an AI model. Timelines are estimates to help prioritise, not promises.

## Maintainer and contact

**Joshua Wright** — [@joshuawayzwright](https://github.com/joshuawayzwright), Gold Coast, Queensland, Australia.

- **Email:** [superadmin2712@gmail.com](mailto:superadmin2712@gmail.com)
- **Phone:** [0452 272 820](tel:+61452272820)
- **Commercial website:** [The Solo Service Provider](https://thesoloserviceprovider.com.au/)

The Solo Service Provider and WrightWayz operate separately. This project's commercial development does not imply a shared charity service, customer database or payment flow.

## License

MIT; see [LICENSE](LICENSE).

## Automated publishing

The repository includes [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) to publish the static site on every push to `main` and with manual workflow runs. GitHub Pages is already enabled here; inspect the [Actions results](https://github.com/joshuawayzwright/projectforge-ai/actions) after changes. A new fork needs the one-time administrator setup described above before its workflow can publish.

## v4 live connections and workflow tools

- **[GitHub Live Hub](apps/github-hub/)** — Read-only client-side access to GitHub public REST API. Loads public profile and up to 100 public repositories, shows recent activity, filters results, opens repository and published-site links, exports Markdown build briefs. No GitHub login or token is requested. GitHub public API rate limits apply (typically 60 requests per hour per IP); a five-minute session cache reduces calls. Private repositories and write operations are not available.
- **[Workflow Lab](apps/workflow-lab/)** — Six approval-first templates (content, research, community support, lead enquiries, education video, GitHub releases), locally saved review checklists, progress tracking and Markdown/prompt exports. No external automations are executed.
- **Connections hub** in the main navigation explains capabilities and limitations.

**Provider security:** Hosting on static GitHub Pages does not securely protect AI or OAuth secrets. Real model calls, cloud synchronisation and private/write-enabled connections need an authenticated server gateway with secret management, usage caps, authorisation and human review. The existing ChatGPT-connected GitHub plugin is NOT automatically available inside this public website. Never put tokens in a client-side file.

# ProjectForge AI — Project Knowledge Base

**Last consolidated:** 2026-10-23 (Australia/Brisbane)  
**Purpose:** Keep an inspectable, reusable source of truth for the ProjectForge AI app, the Pinterest-inspired ideas, the curated resource workbook, and the implementation/deployment decisions.  
**Scope:** Public project and technical information only. Do not store account passwords, API tokens, private messages, personal clinical information, or unreleased business data in this public repository.

## 1. Source provenance and confidence

| Source | Link or location | What can be established | Confidence |
|---|---|---|---|
| GitHub source repository | [ProjectForge AI](https://github.com/joshuawayzwright/projectforge-ai) | Actual source files, product behaviour designed in code, workflow configuration | High for code state at review |
| Project README | [README](../README.md) | Intended MVP scope, limitations, privacy and deployment setup | High for documented intent, not a substitute for a production smoke test |
| Pinterest board | [Artificial intelligence](https://au.pinterest.com/joshuawrightwayz2712/artificial-intelligence/) | Board title, creator `Josh`, and 123 Pins reported at inspection | High for visible board metadata; low for unseen individual pins |
| Saved Pin previews | Pinterest public thumbnails | Four titles identified from visible thumbnail text, **not** full Pin pages or source links | Partial, no full-text verification |
| Curated workbook | `Josh_AI_Resource_Library_2026.xlsx` (conversation artifact, not bundled with repository) | 24 curated tools, 12 learning links, 24 content ideas, 12 prompt templates, 25 unclassified Pin preview links, 8 categories, 30-day plan | High for what workbook contains; external pricing/functionality is not continuously verified |
| GitHub Actions history | [Workflow runs](https://github.com/joshuawayzwright/projectforge-ai/actions) | Runs from 2026-10-21 failed at `actions/configure-pages@v5` because GitHub Pages was not enabled | High at last check; recheck status later |

**Truth rule:** Never describe the 30 catalogue projects, the 24 tools, the 25 thumbnails, or the course list as the actual text/content of all 123 Pins. They are independently curated or original derivative ideas.

## 2. Verified Pinterest themes

The public board displayed 123 Pins and the name **Artificial intelligence**. Pinterest required login for individual pin detail pages, so a full 123-Pin review was **not** possible in the inspected session. The following four thumbnail titles were identifiable:

1. **9 AI Skills to Master in 2026** — Prompt Engineering, AI Workflow Automation, AI Agents, RAG, Fine-Tuning, Multimodal AI, AI Video Generation, AI Tool Stacking, and LLM Evaluation.
2. **60 Gen AI project ideas** — broad generative AI project inspiration across skill levels; the complete 60-item list was not retrieved.
3. **5 lessons from your brain (that could really help your computer)** — conceptual comparisons between biological learning/brain concepts and computing.
4. **15 Benefits of AI in Society** — social and practical benefits, including potential community-focused applications; complete claims were not verified.

**Future source-work:** If authorized Pinterest access becomes available, build an item-level register with Pin URL, original author, title, description, project relevance, date checked, licence/usage permissions, and whether a claim was independently verified. Avoid saving unrelated users' copyrighted images or reposting them without rights.

## 3. Product definition and architecture

- **Product:** ProjectForge AI — mobile-first AI project discovery, learning, prompt drafting, personal planning, and export utility.
- **Repository:** `joshuawayzwright/projectforge-ai`; public; default branch `main`.
- **Stack:** Static HTML, CSS and vanilla JavaScript, manifest, service worker, icons. No build tool, Node runtime or server required for runtime hosting.
- **Current navigation:** Overview, Project explorer, Skills, Prompt studio, Inspiration vault, My Builds, Project detail views.
- **Functions provided:** 30 original app concepts; filtering and search; 9-skills checklists; project step tracking; saved projects and project notes; manual inspiration links; locally generated build/research/review prompts; Markdown `BUILD_BRIEF.md` export; JSON workspace export and validated restore; installable/offline-capable PWA shell after first load.
- **Data:** Browser `localStorage` under key `projectforge-ai-v1`; object shape `{saved: [], skills: [], completed: {}, pins: [], notes: {}}`. No server-side sync; use backup before clearing site data or moving devices.
- **No paid inference required:** Prompt output comes from JavaScript templates rather than LLM inference. There is no functioning external AI agent, RAG service, Pinterest scraper, payment integration or GitHub API write integration within the app itself.
- **Risks/limitations:** Work is device-local, potentially lost when browser storage is cleared; do not put sensitive client/user material in notes; backup import replaces local state after confirmation; project timelines are illustrative; further browser/e2e and accessibility checks are needed before a production claim.

### Reproducible local run

From the repository root, run `python3 -m http.server 8080` then visit `http://localhost:8080/` on the same machine. Service worker registration requires HTTP(S), not `file://`.

## 4. The nine-skill roadmap

| Skill | What to practise | Curated learning link |
|---|---|---|
| Prompt engineering | Write testable instructions, examples, constraints and output formats. | [Resource](https://platform.openai.com/docs/guides/prompt-engineering) |
| AI workflow automation | Connect triggers, decisions, actions and human approvals. | [Resource](https://docs.n8n.io/) |
| AI agents | Plan multi-step tool use with guardrails, logging and approvals. | [Resource](https://huggingface.co/learn/agents-course/en/unit0/introduction) |
| Retrieval-augmented generation | Ground model answers in your own source documents. | [Resource](https://python.langchain.com/docs/tutorials/rag/) |
| Fine-tuning fundamentals | Understand when adapting a model is worthwhile versus prompts and RAG. | [Resource](https://huggingface.co/learn/llm-course/) |
| Multimodal AI | Design responsible text, image and audio workflows. | [Resource](https://ai.google.dev/gemini-api/docs) |
| AI video generation | Create storyboards, prompts and reviewable short video assets. | [Resource](https://runwayml.com/) |
| AI tool stacking | Combine tools into a maintainable product with clear costs. | [Resource](https://github.com/topics/ai-tools) |
| LLM evaluation | Test accuracy, regressions, safety and costs before shipping. | [Resource](https://platform.openai.com/docs/guides/evals) |

## 5. Original 30-project idea catalogue

The 30 projects below are **original ProjectForge concepts**; they are not copied from or verified as the Pinterest Pin content. Time estimates are rough planning placeholders, not fixed delivery commitments.

| Level | Project | Category | Main outcome | Suggested stack | Example days |
|---|---|---|---|---|---:|
| Beginner | Personal Prompt Vault | Productivity | Save, tag and version your most useful AI prompts. | Vanilla JS · localStorage | 2 |
| Beginner | AI Study Flashcards | Education | Turn study notes into recall cards with spaced review reminders. | React · IndexedDB | 3 |
| Beginner | Startup Idea Canvas | Business | Structure customer problems and product ideas before coding. | Vanilla JS · localStorage | 2 |
| Beginner | Social Content Planner | Marketing | Plan educational posts and reuse caption frameworks. | React · localStorage | 4 |
| Beginner | Task Priority Coach | Productivity | Organise your to-do list by impact, effort and urgency. | Vanilla JS · IndexedDB | 3 |
| Beginner | Research Reading Tracker | Research | Collect links and save concise summaries you write yourself. | Vanilla JS · IndexedDB | 2 |
| Beginner | Invoice Preparation Helper | Business | Generate draft invoice line items with editable totals and exports. | React · client-side only | 4 |
| Beginner | Nonprofit Impact Board | Community | Showcase community initiatives, goals and impact metrics. | React · static JSON | 4 |
| Beginner | AI Terms Explorer | Education | Learn key AI concepts with practical examples. | Vanilla JS · localStorage | 2 |
| Beginner | Developer Portfolio Builder | Development | Build an accessible showcase for apps, GitHub projects and demos. | HTML · CSS · JavaScript | 3 |
| Intermediate | Workflow Blueprint Studio | Automation | Map triggers, steps, approvals and expected outcomes before automating. | React · React Flow | 7 |
| Intermediate | Source-Linked FAQ Assistant | Support | Build a question-and-answer assistant backed by approved documents. | React · server API · RAG | 10 |
| Intermediate | Customer Enquiry Qualifier | Business | Turn enquiries into structured leads with explicit consent. | Next.js · database | 7 |
| Intermediate | Meeting Action Tracker | Productivity | Convert manually supplied notes into assigned follow-up tasks. | React · IndexedDB | 6 |
| Intermediate | Content Repurposing Studio | Marketing | Transform one long-form piece into a repeatable multi-platform content plan. | React · optional AI API | 8 |
| Intermediate | AI YouTube Production Board | Creator | Manage scripts, shot lists, thumbnails and publishing tasks. | React · IndexedDB | 6 |
| Intermediate | Image Prompt Workshop | Design | Create consistent visual prompts using structured style parameters. | Vanilla JS · localStorage | 5 |
| Intermediate | Chat Quality Scorecard | Development | Manually score assistant replies against a reliable evaluation rubric. | React · IndexedDB | 7 |
| Intermediate | Community Grant Planner | Community | Plan eligible project descriptions, milestones and budgets. | React · IndexedDB | 7 |
| Intermediate | AI Career Skills Tracker | Education | Map learning goals to small portfolio projects. | React · localStorage | 6 |
| Advanced | Human-Guided Agent Runbook | Automation | Prototype an agent with inspectable tool steps and manual approvals. | Python · FastAPI · React | 14 |
| Advanced | Private Document Q&A Lab | Research | Prototype trustworthy document Q&A with retrieval and citations. | Python · vector DB · React | 16 |
| Advanced | n8n Template Builder | Automation | Design validated automation templates ready to import into n8n. | React · n8n JSON schema | 15 |
| Advanced | Model Comparison Bench | Development | Evaluate multiple models on the same prompts and criteria. | Next.js · server adapters | 18 |
| Advanced | Accessible Website QA Lab | Community | Check common accessibility risks and organise human review. | Node · Playwright · React | 16 |
| Advanced | AI Audio Workflow Studio | Creator | Orchestrate script, voice, captions and final review tasks. | React · server-side jobs | 18 |
| Advanced | Knowledge Graph Explorer | Education | Visualise connections among concepts and their supporting sources. | React · graph library | 16 |
| Advanced | LLM Test Case Manager | Development | Run repeatable tests with expected outcomes and pass/fail scoring. | Python · FastAPI · React | 20 |
| Advanced | AI for Good Opportunity Matcher | Community | Match real community needs to practical, low-risk AI use cases. | React · database · rules engine | 16 |
| Advanced | Consent-First Support Agent | Support | Draft an opt-in support assistant with clear limits and human escalation. | Next.js · database · server AI | 25 |

Distribution: **10 Beginner**, **10 Intermediate**, **10 Advanced**; 11 categories. Each idea also has three candidate MVP features, related learning skills and a downloadable project brief in the application.

## 6. Curated AI tool directory

These are the names and official-site links **recorded in the workbook**, not tools confirmed present among Pinterest Pins. Re-check current availability, pricing, terms, privacy and commercial usage before adoption.

| Tool | Category | URL |
|---|---|---|
| ChatGPT | AI Assistants | https://chatgpt.com |
| Google Gemini | AI Assistants | https://gemini.google.com |
| Claude | AI Assistants | https://claude.ai |
| Perplexity | AI Assistants | https://www.perplexity.ai |
| Google AI Studio | Coding & Development | https://aistudio.google.com |
| Gemini Notebook (formerly NotebookLM) | Learning & Research | https://notebook.google |
| Canva Magic Studio | Image & Design | https://www.canva.com/magic-studio/ |
| Adobe Firefly | Image & Design | https://firefly.adobe.com |
| Ideogram | Image & Design | https://ideogram.ai |
| Leonardo AI | Image & Design | https://leonardo.ai |
| Runway | Video & Audio | https://app.runwayml.com |
| CapCut | Video & Audio | https://www.capcut.com |
| Descript | Video & Audio | https://www.descript.com |
| ElevenLabs | Video & Audio | https://elevenlabs.io |
| Suno | Video & Audio | https://suno.com |
| n8n | Automation & Agents | https://n8n.io |
| Make | Automation & Agents | https://www.make.com |
| Zapier | Automation & Agents | https://zapier.com |
| GitHub Copilot | Coding & Development | https://github.com/features/copilot |
| Hugging Face | Coding & Development | https://huggingface.co |
| Google Colab | Coding & Development | https://colab.research.google.com |
| Ollama | Coding & Development | https://ollama.com |
| Gamma | Business & Content | https://gamma.app |
| YouTube Studio | Business & Content | https://studio.youtube.com |

## 7. Curated learning materials

| Course or guide | Publisher | Level | Link |
|---|---|---|---|
| AI Fundamentals | OpenAI Academy | Beginner | https://openai.com/academy/ai-fundamentals/ |
| OpenAI Academy Courses | OpenAI Academy | Beginner–Advanced | https://academy.openai.com/en/public/content |
| Prompting Guide | OpenAI Academy | Beginner | https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting |
| AI Fluency | Microsoft Learn | Beginner | https://learn.microsoft.com/en-us/training/paths/ai-fluency/ |
| Google AI Studio Quickstart | Google for Developers | Intermediate | https://ai.google.dev/gemini-api/docs/ai-studio-quickstart |
| Machine Learning Crash Course | Google for Developers | Intermediate | https://developers.google.com/machine-learning/crash-course/ |
| AI Agents Course | Hugging Face | Intermediate | https://huggingface.co/learn/agents-course/en/unit0/introduction |
| GitHub Copilot Documentation | GitHub Docs | Beginner–Intermediate | https://docs.github.com/en/copilot |
| Getting Started with Generative Video | Runway | Beginner | https://help.runwayml.com/hc/en-us/articles/37425232841875-Getting-Started-with-Generative-Video |
| n8n Quickstarts and AI Examples | n8n Docs | Intermediate | https://docs.n8n.io/ |
| YouTube Shorts Tips | YouTube Help | Beginner | https://support.google.com/youtube/answer/12934772?hl=en |
| Gemini Notebook Overview | Google Workspace | Beginner | https://workspace.google.com/intl/en/products/gemini-notebook/ |

## 8. Content concepts sourced from the curated workbook

These are unproduced **content ideas** for educational videos or social posts, not confirmed published content:

- **ChatGPT vs Gemini vs Claude: same task, different results** — AI Assistants; Comparison. Hook: Show the exact same prompt on three tools
- **How to write a prompt that actually works** — Prompt Engineering; Tutorial. Hook: Weak prompt → improved prompt → measurable result
- **What is a large language model?** — Learning & Research; Explainer. Hook: Explain tokens and probability without hype
- **5 ways AI can be confidently wrong** — Learning & Research; Myth-buster. Hook: Demonstrate a hallucination and verification
- **Design an AI YouTube thumbnail in Canva** — Image & Design; Screen demo. Hook: Show before/after with original assets
- **Make a 30-second AI explainer video** — Video & Audio; Tutorial. Hook: Script → narration → captions → review
- **Turn five articles into study notes** — Learning & Research; Tutorial. Hook: Use Gemini Notebook with source citations
- **What an AI agent can actually do** — Automation & Agents; Explainer. Hook: Compare chatbot and tool-enabled agent
- **Build your first automation with n8n** — Automation & Agents; Screen demo. Hook: Form → sheet → manual approval
- **Make an AI-powered webpage prototype** — Coding & Development; Build-along. Hook: Plan → code → test → explain
- **7 AI mistakes beginners make** — AI Assistants; List video. Hook: Bad examples and corrected workflows
- **Can AI voices sound natural?** — Video & Audio; Comparison. Hook: Compare two samples with permissions
- **Create a one-week content plan with AI** — Business & Content; Tutorial. Hook: Theme → calendar → scripts → final edits
- **5 prompts that save a business owner time** — Prompt Engineering; Tutorial. Hook: Specific tasks with inputs and outputs
- **AI image generation: prompt to final artwork** — Image & Design; Screen demo. Hook: Show iterations and style changes
- **Free AI courses worth your time** — Learning & Research; Resource roundup. Hook: Compare OpenAI, Microsoft and Hugging Face
- **Create an original music sting with Suno** — Video & Audio; Demo. Hook: Show prompt and generated short intro
- **What is an API? AI apps explained** — Coding & Development; Explainer. Hook: Teach requests and responses with a tiny example
- **Create a useful LinkedIn carousel about AI** — Business & Content; Tutorial. Hook: Research → write → design → verify
- **AI privacy: what not to paste into a chatbot** — Learning & Research; Explainer. Hook: Safe and unsafe examples
- **Perplexity vs general AI chat: research test** — AI Assistants; Comparison. Hook: Check whether answers link to usable sources
- **How I organise AI tools without paying for everything** — Business & Content; Walkthrough. Hook: Build a simple tool-selection decision map
- **Automation vs agent: which should you use?** — Automation & Agents; Explainer. Hook: Show fixed trigger and adaptive workflow
- **Run a model locally: what hardware matters** — Coding & Development; Explainer. Hook: Explain RAM, compatibility and privacy

## 9. Prompt-library subjects

The workbook holds 12 copy-ready prompts (with placeholders that require user input); the following is an index of their use cases. Do not claim that a generated prompt has executed an action.

- **Explain a concept** — Learning & Research (ID `P01`)
- **Improve a prompt** — Prompt Engineering (ID `P02`)
- **Compare tools fairly** — AI Assistants (ID `P03`)
- **60-second script** — Business & Content (ID `P04`)
- **8-minute tutorial** — Business & Content (ID `P05`)
- **Fact-check content** — Learning & Research (ID `P06`)
- **Thumbnail concept** — Image & Design (ID `P07`)
- **AI image briefing** — Image & Design (ID `P08`)
- **Automation plan** — Automation & Agents (ID `P09`)
- **Build a mini app** — Coding & Development (ID `P10`)
- **Repurpose a lesson** — Business & Content (ID `P11`)
- **Organise Pins** — Prompt Engineering (ID `P12`)

## 10. Deployment and release status

The account/setup observations below are historical. The [27 October 2026 audit](#update-2026-10-27--github-documentation-and-contact-audit) records the current successful GitHub Pages deployment; do not treat the older Pages blocker as current.

**Historical status as verified 2026-10-23:**

- GitHub repository is present and readable; GitHub source edits landed on `main` during 2026-10-21.
- GitHub Actions `.github/workflows/deploy-pages.yml` is committed. It uses checkout, configure-pages, upload-pages-artifact, and deploy-pages, triggered on `main` push or manual dispatch.
- Three recent runs on 2026-10-21 failed at **Configure GitHub Pages** with `Get Pages site failed ... Not Found`. This indicates repository Pages provisioning/source setup had not been completed at that time.
- [GitHub Pages settings](https://github.com/joshuawayzwright/projectforge-ai/settings/pages): initial signed-in administrative action required: choose **GitHub Actions** as the Pages source. That action was not available to the connected assistant GitHub write tools.
- The intended public URL is `https://joshuawayzwright.github.io/projectforge-ai/`; it returned `404` on the prior checks. Do **not** call it live until a new 200 response and functional smoke test are confirmed.
- A Vercel deployment attempt on 2026-10-21 was denied by an account-level restriction. Do not represent Vercel as an active deployment; account-owner action is required before use. Account billing details are intentionally excluded from this public repository.
- Note: if the repository has been subsequently configured, this status section must be updated after actually checking the URL and workflow outcome.

### Recommended release checklist

1. Enable GitHub Pages with Actions source in repo settings; avoid Vercel while account is blocked.
2. Rerun deployment; verify workflow conclusion is `success`.
3. Check response 200 at the expected GitHub Pages URL; verify CSS, JS, SVG, PNG icons and PWA manifest load without 404s.
4. Test Overview, search/filters, saving projects, checklists, notes, prompt copy, build brief download, backup export/restore (including invalid input), and Pin URL validation on Android and desktop.
5. Verify offline behaviour after one fully online visit; test update process and browser storage recovery.
6. Add automated tests or at least a repeatable smoke-test checklist, accessibility and basic security review before expanding functionality.

## 11. Future product expansion — prioritized hypotheses, not shipped features

| Priority | Candidate feature | Value | Dependency/constraint |
|---|---|---|---|
| 1 | Verified Pin import/research register | Replaces loosely tagged inspiration with exact source provenance | Authorized Pinterest access, rights and metadata validation |
| 2 | Search and filter by skills | Find projects aligned with current abilities | Client-side filtering, no API |
| 3 | GitHub export integration | Create repositories/issues after explicit approval | OAuth, server-side secret handling and permissions |
| 4 | Multi-device sync | Avoid localStorage loss and support collaboration | Auth, encrypted/controlled backend and privacy policy |
| 5 | Optional AI-generated plans | Tailored roadmaps beyond templates | Secure backend API keys, spend caps, safety evaluation |
| 6 | Automations and reusable workflows | Turn planning into real scheduled executions | Appropriate integration permissions, audit trail, approvals |
| 7 | Education and creator workflows | Use ideas for technical tutorials and original reels | Rights review, content production pipeline |

## 12. Maintainability and operating rules

- Prefer links to original sources; when a Pin or source is inaccessible, label it unverified rather than inventing details.
- For each code modification: inspect the current `main` branch, preserve changes, run syntax/basic tests, commit with a specific message and check the action/build outcome.
- Respect the user's existing sites and repositories. Do not edit `wrightwayz-website` or `ai-download-center` as part of ProjectForge work without a request.
- Keep the first release low-cost and mobile-friendly; report what is tested vs merely planned.
- Do not insert private or confidential account details into this public repository. Track payment/setup blockers at a high level only.
- Update this knowledge file when the project structure, feature scope, source evidence or hosting state actually changes; add dates and source URLs.

---

**Revision log:** 2026-10-23: Initial consolidated technical/source knowledge base built from the ProjectForge v1.1 source bundle, workbook, documented public Pinterest preview findings, GitHub repository metadata, GitHub Actions records and GitHub Pages documentation.

## 13. Build updates — 2026-10-23

**Shipped to source control (not necessarily publicly deployed):**

- ProjectForge v2 added required-skill filtering, project build-stage tracking and a saved-project CSV status export.
- Added curated AI resources directory (24 outbound provider URLs; this does not verify current prices or commercial licences).
- Added three independently functional static browser apps in `apps/`: **Prompt Vault** (prompt library with backup/import), **Idea Canvas** (editable idea briefs with Markdown/JSON export), and **Priority Coach** (impact–effort ranking, completion tracking and CSV).
- Each app persists locally on its browser origin with its own storage key. They do **not** send data to a backend, call AI models or sync across devices.
- Main app backward-compatible workspace restore now accepts the optional `stages` object and continues accepting v1 backups.
- Updated service worker cache to `projectforge-v2.0`, including starter app assets.
- Added `scripts/verify.mjs` for zero-dependency syntax and asset checks and integrated it into the deployment workflow.
- Local Chromium **DOM-injection** tests covered main navigation on mobile/desktop, skill filtering, saved stages, resources listing, and starter-app create/export actions. Local URL navigation was blocked by this execution environment, so these tests do **not** establish real HTTP delivery, installability, caching or production performance.
- Pages and deployment remain separate requirements. GitHub Actions cannot provision Pages with its default token and GitHub Pages must first be enabled by an authenticated repo administrator; then verify a successful run and HTTP 200 on the public URL.

**Next candidates, not built:** authorized Pin metadata import, multi-device sync, GitHub OAuth issue/repo creation, secure model inference with spend limits, full automated end-to-end browser tests and content publishing integrations.


## 13. Version 3.0 — six working starter apps (2026-10-24)

GitHub Pages was enabled by the repository administrator on 2026-10-24; a previously failed deployment rerun succeeded and the published main app plus original three routes returned content.

Added three browser-only starter applications, all without AI API calls, user accounts, automatic syncing or external social posting:

- **Study Cards** at `apps/study-cards/`: editable study decks, reveal/grade intervals (Again, Good, Easy), due-date review, search and JSON backup/restore. The review scheduler is a simple interval heuristic, not validated learning research software.
- **Content Planner** at `apps/content-planner/`: locally scheduled social content, six platform choices, draft stages, editing, search, spreadsheet-ready CSV export and JSON backup/restore. It does not publish to social services.
- **Research Tracker** at `apps/reading-tracker/`: manually saved HTTPS links and notes, reading status, search, Markdown reading log, JSON backup/restore. It does not scrape pages or verify external content for the user.

The main ProjectForge `#starters` directory now lists **six** static apps. Updated `sw.js` to cache the additional routes/assets under `projectforge-v3.0`, updated `scripts/verify.mjs` to cover all 21 core assets and JavaScript syntax, and updated the README. The six app workspace data sets are independent browser localStorage records; the main ProjectForge workspace backup does not currently bundle each starter's data. Users should back up within each individual app.

- Primary live URL: https://joshuawayzwright.github.io/projectforge-ai/
- Deployment workflow: https://github.com/joshuawayzwright/projectforge-ai/actions
- New app links: https://joshuawayzwright.github.io/projectforge-ai/apps/study-cards/ ; https://joshuawayzwright.github.io/projectforge-ai/apps/content-planner/ ; https://joshuawayzwright.github.io/projectforge-ai/apps/reading-tracker/

Release verification: Node.js syntax and static references passed locally and in GitHub Actions. On 2026-10-24 an isolated browser interaction smoke test passed 4/4 checks: six starter links present; Study Cards saved and revealed a flashcard; Content Planner saved a dated Facebook draft without publishing; Research Tracker saved an HTTPS source. The browser test observed no page-level JavaScript errors or unhandled promise rejections. It was not a substitute for full multi-device QA.

## Update: 2026-10-24 — ProjectForge AI v4 connected release

- Commit: [v4 release](https://github.com/joshuawayzwright/projectforge-ai/commit/752cbac8d054c4fb266e055add36a56d68fa03ef).
- The platform now includes **eight** starter apps. v4 added [GitHub Live Hub](https://joshuawayzwright.github.io/projectforge-ai/apps/github-hub/) and [Workflow Lab](https://joshuawayzwright.github.io/projectforge-ai/apps/workflow-lab/); existing six apps remain intact.
- GitHub Live Hub performs real read-only client-side public GitHub REST API requests, displaying only public repositories, activity and links. No account login, private data or write actions; unauthenticated rate limits apply.
- Workflow Lab stores approval-first process plans locally, includes six templates, review checks, Markdown export and prompt copy; it does **not** execute automated external tasks.
- Main menu includes a Connections hub and the service worker cache is version v4.0.
- GitHub Actions [release run](https://github.com/joshuawayzwright/projectforge-ai/actions/runs/40049397043) completed successfully. Live URLs for all eight apps were fetched and verified to load. Separate browser checks verified a live GitHub profile with `projectforge-ai`, a generated six-step workflow with first step marked complete, and both Connections links.
- A real paid AI model or private account integration is **not** yet connected: GitHub Pages is static hosting and must not embed secret API keys. Such integrations need a secure backend, authentication, budget limits, permissions and clear user approval.

## Update: 2026-10-27 — GitHub documentation and contact audit

- Audited source: [`5ef8f14b42c9dadfe7a1cf85642b6810652d5661`](https://github.com/joshuawayzwright/projectforge-ai/commit/5ef8f14b42c9dadfe7a1cf85642b6810652d5661). The repository contains eight standalone tools: Prompt Vault, Idea Canvas, Priority Coach, Study Cards, Content Planner, Research Tracker, GitHub Live Hub and Workflow Lab. The [v4 release record](RELEASE_V4.md) and each `apps/` directory support this count.
- The [GitHub Pages deployment run 40110906848](https://github.com/joshuawayzwright/projectforge-ai/actions/runs/40110906848) completed successfully for that source commit. Actual read-only HTTP checks on 27 October returned **200** and the expected page titles for the [main app](https://joshuawayzwright.github.io/projectforge-ai/), [GitHub Live Hub](https://joshuawayzwright.github.io/projectforge-ai/apps/github-hub/) and [Workflow Lab](https://joshuawayzwright.github.io/projectforge-ai/apps/workflow-lab/). These checks establish current reachability; they are not a new full functional, mobile, accessibility or offline test.
- The owner requested current GitHub information and correct public contact details on 27 October. The current public maintainer details are **Joshua Wright**, **superadmin2712@gmail.com**, **0452 272 820**, Gold Coast, Queensland, Australia. These are contact destinations; this audit did not send email or place a call.
- Updated the README with the live URL, eight-tool index, evidence and contacts. Reframed initial Pages enablement instructions as setup for a new fork, and corrected the integration document's old six-tool count. Earlier dated release notes remain historical evidence.
- Product boundaries remain unchanged: local browser workspaces and template generation, plus read-only public GitHub access. No model-backed inference, private GitHub access, account sync, paid entitlements or app-store publication was introduced. The Solo Service Provider commercial portfolio remains separate from WrightWayz operations.
- This refresh changes documentation only. Runtime files, workspace storage keys, service-worker cache, licence, hosting settings and payment configuration were not changed. No additional runtime tests were needed for these documentation edits.

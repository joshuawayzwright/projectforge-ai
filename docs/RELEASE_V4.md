# ProjectForge AI v4 — Connected Lab

Scope: Two new static tools, eight total independent starter apps. No API keys or paid model use.

## Added
- Live read-only GitHub public profile/repository integration using browser requests to the official GitHub REST API, with search and template brief downloads. Public data only; no private repos or edits.
- Workflow Lab with six human-approved automation plan templates, local persistence and Markdown export. No workflow execution.
- Main Connections view and quick navigation.
- Offline cache updated to v4.0 and source verifier expanded to 25 required assets.

## Security and reliability
- User-provided text and API-sourced content are escaped before HTML insertion.
- Only HTTPS external links are rendered.
- GitHub public API has unauthenticated rate limits, and GitHub API access requires Internet; no account tokens are stored.
- Workflow blueprints are device-local until user exports them.
- Static Pages cannot safely store LLM API keys. A private, authenticated server is needed before enabling real inference or private sync.

## Checks before production claim
- Run node scripts/verify.mjs and browser smoke tests.
- Commit to main; inspect GitHub Actions success.
- Confirm all new public Pages URLs respond and render expected content.
- Load real GitHub API data in the user's browser; report any CORS/rate-limit errors explicitly.

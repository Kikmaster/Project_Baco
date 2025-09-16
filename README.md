# Project_Baco — Super Analysis Space

This repository contains a small static site to explore real-time stock and crypto charts, live news, and quick prediction tools.

Pages:
- `index.html` — home
- `charts.html` — basic real-time charts
- `super.html` — Super Analysis Space (chart picker, recommendations, news, quick predictions)

How to run locally

1. From the project root, run a simple HTTP server (Python 3):

```bash
python3 -m http.server 8000
```

2. Open http://localhost:8000/super.html in your browser.

Notes and configuration

- TradingView widgets are embedded and work best when served over HTTP/HTTPS. They may not render when opening the file via `file://`.
- The forecasting tool supports:
	- Pasting CSV with header `date,close` (ISO date format preferred)
	- Fetching historical daily prices from Alpha Vantage (requires an API key). Paste your API key in the input box.
- News fetching uses a demo endpoint; you may need to replace with a valid News API key or integrate a backend proxy to avoid CORS limits.

Next steps you might want:
- Add server-side proxies for News/Alpha Vantage to keep API keys secret and avoid CORS.
- Improve forecasting with ARIMA/Prophet (requires Python or server-side compute).
- Add user accounts and saved analyses (requires backend).
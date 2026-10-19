const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const APP_VERSION = process.env.APP_VERSION || '2.1.0';

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevOps with Docker — Exercise 3.1 & 3.2</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #f8fafc;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }
    .container {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 1rem;
      padding: 2.5rem;
      max-width: 600px;
      width: 100%;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
      text-align: center;
    }
    .icon { font-size: 3.5rem; margin-bottom: 1rem; }
    h1 {
      font-size: 1.85rem;
      color: #38bdf8;
      margin-bottom: 0.75rem;
      font-weight: 700;
    }
    p {
      color: #94a3b8;
      font-size: 1.05rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    .badge {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: #0284c7;
      color: #ffffff;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
    }
    .features {
      background: #0f172a;
      border-radius: 0.5rem;
      padding: 1.25rem;
      text-align: left;
      margin-bottom: 1.5rem;
      border: 1px solid #334155;
    }
    .features li {
      list-style: none;
      padding: 0.4rem 0;
      color: #cbd5e1;
      font-size: 0.95rem;
    }
    .features li strong { color: #38bdf8; }
    .author {
      font-size: 0.9rem;
      color: #64748b;
      border-top: 1px solid #334155;
      padding-top: 1.25rem;
    }
    .author a { color: #38bdf8; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🐳</div>
    <h1>DevOps with Docker — Fall 2026</h1>
    <p>Automated Deployment Pipeline with GitHub Actions, Docker Hub & Watchtower</p>
    <div class="badge">Release Version: ${APP_VERSION} (Auto-Deployed)</div>
    
    <div class="features">
      <li>✔ <strong>Exercise 3.1:</strong> Continuous Image Delivery to Docker Hub via GitHub Actions</li>
      <li>✔ <strong>Watchtower:</strong> Automated local container reload on image update (60s poll interval)</li>
      <li>✔ <strong>Exercise 3.2:</strong> Continuous Deployment pipeline to Cloud container environment</li>
      <li>✔ <strong>Security:</strong> Non-root execution (`node:20-alpine`) with minimal attack surface</li>
    </div>

    <div class="author">
      Author: <strong>Sergio Andrés Ipuz Saavedra</strong> (<a href="https://github.com/Sais-gallego">@Sais-gallego</a>)<br>
      University of Helsinki · MOOC.fi
    </div>
  </div>
</body>
</html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    version: APP_VERSION,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[DevOps with Docker] Express app listening on port ${PORT} (Version ${APP_VERSION})`);
});

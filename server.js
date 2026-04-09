
const express = require('express');
const app = express();
const port = 3000;

const announcements = [
    'Team standup — every day at 9:00am',
    'Sprint review — Friday at 3:00pm',
    'Deployment freeze starts Dec 20',
    'New joiners onboarding — Room 204',
    'Updated VPN policy — check your email',
];

app.get('/', (req, res) => {
    const items = announcements.map(a => `<li>${a}</li>`).join('');
    res.send(`
    <!DOCTYPE html><html><head><title>QuickBoard</title>
    <style>
      body { font-family: Arial, sans-serif; max-width: 700px; margin: 60px auto; }
      h1   { border-bottom: 2px solid #222; padding-bottom: 8px; }
      li   { padding: 10px 0; border-bottom: 1px solid #ddd; }
      .pod { margin-top: 32px; font-size: 0.85rem; color: #888; }
    </style></head>
    <body>
      <h1>QuickBoard</h1>
      <ul>${items}</ul>
      <p class='pod'>Served by pod: <strong>${process.env.HOSTNAME}</strong></p>
    </body></html>
  `);
});

app.listen(port, () => console.log(`QuickBoard running on port ${port}`));

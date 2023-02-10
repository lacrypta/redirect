<p align="center">
<img src="public/logo.png" width="60%" title="La Crypta Redirect">
</p>

Setup in a couple of minutes a link tracking system with **Google Analytics**.

### Features

- [x] Vite
- [x] Custom Title
- [x] Analytics
- [x] Netlify Button
- [x] Vercel Button
- [x] Subdomains

---

## Fast Easy Way _(No updates)_

- Create a **Google Analytics** account
- Setup on **Netlify** or **Vercel** _(Auto deploy button below)_
- Set the proper environment variables
- Edit subdomains file in your repo _(Optional)_

#### Auto Deploy on Netlify or Vercel

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lacrypta/redirect)

or

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flacrypta%2Fredirect&env=VITE_TITLE,VITE_DESTINATION,VITE_GOOGLE_ANALYTICS&envDescription=HTML%20Title%20while%20loading%20and%20Destination%20URL&project-name=redirect&repository-name=redirect)

## Best Way (Fork)

- For this repo
- Edit local [src/config/subdomains.json](src/config/subdomains.json)
- Import it into **Vercel** or **Netlify**.

---

### Environment variables

```bash
VITE_TITLE="La Crypta - Redirecting..."
VITE_DESTINATION="http://lacrypta.com.ar"
VITE_GOOGLE_ANALYTICS="G-0000000000"
```

Deploy it and assign a subdomain.

### Config Subdomains (optional)

Edit local [src/config/subdomains.json](src/config/subdomains.json)
Those links are being redirected by this tool.

> **Demo:** https://twitter.lacrypta.com.ar

```json
{
  "twitter": "https://twitter.com/LaCryptaOficial",
  "instagram": "https://www.instagram.com/lacryptaok/",
  "discord": "https://discord.com/invite/SN8JNhMgvY",
  "github": "https://github.com/lacrypta"
}
```

Then add those subdomains on your **Netlify** or **Vercel** Dashboard.

If the subdomain is not found in the config it automatically fallback to the url provided in **VITE_DESTINATION**.

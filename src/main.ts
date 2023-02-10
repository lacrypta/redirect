declare var gtag: any;

// Import subdomain config
import subdomains from "./config/subdomains.json";

// Get current subdomain
const subdomain = window.location.host.split(".")[0];

// Match subdomain with config
const match = subdomains[subdomain as keyof typeof subdomains];
const href = match ? match : import.meta.env.VITE_DESTINATION;

// Tracks event
gtag("event", "redirect", {
  subdomain: match ? subdomain : false,
  destination: href,
});

// Redirects
window.location.href = href;

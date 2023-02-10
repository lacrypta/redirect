import subdomains from "./config/subdomains.json";

// Get current subdomain
const subdomain = window.location.host.split(".")[0];

// Match subdomain with config
const match = subdomains[subdomain as keyof typeof subdomains];
if (match) {
  window.location.href = match;
} else {
  window.location.href = import.meta.env.VITE_DESTINATION;
}

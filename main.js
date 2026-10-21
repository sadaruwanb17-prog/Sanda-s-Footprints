/* ====== EDIT THESE ====== */
const SITE = {
  name: "Sanda's Footprints",
  pinterest: "https://www.pinterest.com/YOUR_USERNAME/",   // your Pinterest link
  email: "hello@example.com"                               // your email
};
/* ======================== */

const links = [
  ["index.html", "Home"], ["destinations.html", "Destinations"],
  ["itineraries.html", "Itineraries"], ["about.html", "About me"]
];
const here = location.pathname.split("/").pop() || "index.html";

const header = document.getElementById("site-header");
if (header) {
  header.className = "site-header";
  header.innerHTML = `<div class="wrap">
    <a class="logo" href="index.html"><i></i>${SITE.name}</a>
    <nav class="main-nav" id="nav" aria-label="Main"><ul>
      ${links.map(([h, t]) => `<li><a href="${h}" class="${h === here ? "active" : ""}">${t}</a></li>`).join("")}
    </ul></nav>
    <a class="btn" href="${SITE.pinterest}" target="_blank" rel="noopener">Follow on Pinterest</a>
    <button class="menu-btn" id="menu" aria-label="Open menu">☰</button></div>`;
  document.getElementById("menu").onclick = () => document.getElementById("nav").classList.toggle("open");
}

const footer = document.getElementById("site-footer");
if (footer) {
  footer.className = "site-footer";
  footer.innerHTML = `<div class="wrap"><b>${SITE.name}</b>
    <ul><li><a href="destinations.html">Destinations</a></li><li><a href="itineraries.html">Itineraries</a></li>
    <li><a href="about.html">About me</a></li><li><a href="contact.html">Contact</a></li><li><a href="privacy.html">Privacy</a></li></ul>
    <span>© ${new Date().getFullYear()} ${SITE.name}</span></div>`;
}

document.querySelectorAll("[data-pin]").forEach(a => { a.href = SITE.pinterest; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll("[data-email]").forEach(a => { a.href = "mailto:" + SITE.email; a.textContent = SITE.email; });

# Group-1-Frontend-Capstone
Group 1 capstone development project 
# 🪐 Planet: Planet Information App

A responsive web app that lets you search for a planet by name and see its key facts, with a light/dark theme toggle and a comparison table of the planets in our solar system.

Built by **Group 1** of the **TSAcademy Hajimeh cohort** as a Frontend Capstone project.

**🔗 Live site:**  https://group-1-frontend-capstone-5jho.vercel.app/
**📦 Repository:** https://github.com/festusola/Group-1-Frontend-Capstone

 Table of Contents

1. [Project Summary]
2. [Features and How They Work]
3. [Tech Stack]
4. [Project Structure]
5. [Getting Started]
6. [Responsive Design]
7. [Team and Contributions]
8. [Git Workflow]
9. [Learning Objectives Covered]
10. [Possible Improvements]
11. [Credits]


## Project Summary

Planet is a single-page app built with plain **HTML, CSS and JavaScript**. A user types a planet name into the search bar and the app loads the planet's data from a JSON file using the **Fetch API**, then displays it in a hero card (image, name, type, description and key facts). If the planet isn't found, a clear error message is shown instead.

Below the search area, a **"Planetary Facts at a Glance"** table compares the major planets, grouped into Terrestrial, Jovian (Gas Giants and Ice Giants) and Dwarf planets.

The whole site supports **light and dark mode** and adapts to mobile, tablet and desktop screens, following the Figma mockup provided for the project.



## Features and How They Work

### 1. Header and Logo
- The header holds the **Planet logo** (links back to `index.html`) and the **theme toggle button**.
- In dark mode the logo is inverted to white so it stays visible.

### 2. Planet Search (`script.js`)
The search bar is a `<form id="planet-search-form">`. When the form is submitted:

1. `event.preventDefault()` stops the page from reloading.
2. The input is cleaned with `.trim().toLowerCase()`. If it's empty, nothing happens.
3. The **Search button is disabled** while the search runs, so users can't spam it.
4. The app fetches `./test.json` with `fetch()` and checks `response.ok`. If the file can't be loaded, an error is thrown and caught.
5. The planet is found with `planets.find()` by comparing lowercase names, so `Mars`, `mars` and `MARS` all work.
6. A `finally` block re-enables the Search button whatever the outcome.

> Search matches the **full planet name** (for example `earth`, not `ear`).

### 3. Planet Display (Hero Card)
When a planet is found, the card is updated by writing the data into the page:

| Element | What it shows |
| --- | --- |
| `#planet-image` | Planet image (`src` and `alt` come from the data) |
| `#planet` | Planet name |
| `.planet-type` | Planet type, e.g. *Terrestrial* |
| `#planet-description` | Short description |
| `#planet-gravity` | Gravity |
| `#planet-mass` | Mass |
| `#planet-period` | Orbital period |
| `#planet-temperature` | Temperature |
| `#planet-moons` | Number of moons |
| `#planet-diameter` | Diameter |
| `#planet-distance` | Distance from the sun |

The card is shown again and the error box is hidden every time a search succeeds, so switching between a good and a bad search always swaps cleanly.

### 4. Error / "No Results" State
If no planet matches, two things appear together:

- A **"No results found!"** box with a helpful message: *"We couldn't find any planet matching your search. Please double-check the name and try again."*
- A small red **"No results"** label inside the search bar, next to the button.

At the same time, the planet card is hidden. Both messages clear on the next search.

### 5. Loading Protection
Disabling the Search button while a request is running gives users feedback that something is happening and prevents duplicate requests.

### 6. Dark / Light Mode Toggle
- Clicking the toggle switches a `data-theme="dark"` or `data-theme="light"` attribute on the `<html>` element.
- The CSS uses **CSS variables** (`--bg`, `--card`, `--text`, `--muted`, `--accent` and others) that change when `data-theme="dark"` is set.
- The button label switches between **DARK 🌙** and **LIGHT ☀️**, the icon is swapped, and the `aria-label` is updated for screen readers.
- Dark mode restyles the page background, search bar, hero card, stats box, no-results box, icons and the logo. The table keeps its light look with a dark header row, as in the design.
- The site **always starts in light mode** on page load.

### 7. Planetary Facts Table
- A semantic HTML `<table>` with `<thead>`, `<tbody>`, `<colgroup>` and `scope` attributes for accessibility.
- Rows are grouped: **Terrestrial Planets** (Mercury, Venus, Earth, Mars), **Jovian Planets** split into **Gas Giants** (Jupiter, Saturn) and **Ice Giants** (Uranus, Neptune), and **Dwarf Planets** (Pluto).
- Columns: Name, Mass (10²⁴ kg) and Diameter (km).
- Rows highlight on hover on desktop screens.
- The table sits in a scrollable wrapper (`.table-wrap`) so it never breaks the layout on small screens.

### 8. Footer
- An **About** section introducing the team, with links to each member's GitHub profile.
- Credits for the design (Amaka N), the group, and TSAcademy.

---

## Tech Stack

| Technology | Use |
| --- | --- |
| **HTML5** | Semantic page structure, accessible labels and roles |
| **CSS3** | Layout (Flexbox and Grid), CSS variables, theming, media queries |
| **JavaScript (ES6+)** | Search logic, DOM updates, async/await, theme toggle |
| **Fetch API** | Loading planet data from `test.json` |
| **Google Fonts** | *Space Mono* typeface |
| **Git and GitHub** | Version control, branches, pull requests |
| **GitHub Pages** (or similar) | Deployment |

---


## Getting Started

### Run locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/festusola/Group-1-Frontend-Capstone.git
   cd Group-1-Frontend-Capstone
   ```
2. **Serve the folder with a local server.** The app uses `fetch()` to load `test.json`, which doesn't work when opening `index.html` directly from your files (`file://`).
   - **VS Code:** install the *Live Server* extension, right-click `index.html` and choose **Open with Live Server**.
   - **Or with Python:**
     ```bash
     python -m http.server 5500
     ```
     then open `http://127.0.0.1:5500`.
3. **Try it:** search for a planet name (for example `earth` or `mars`), then try a wrong name to see the error state, and click the theme toggle.

### Deploy

The site is plain static files, so it can be hosted on **GitHub Pages**:
**Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.**
Make sure file names match exactly, since hosting is case-sensitive (for example `earth.png`, not `Earth.png`).

---

## Responsive Design

The layout adapts to screen size using media queries:

| Screen | Behaviour |
| --- | --- |
| **Mobile** (up to 480px) | Single column. Planet image sits beside the name and type. Stats stack vertically. Footer stacks. |
| **Small tablet** (481px to 700px) | Reduced padding and image size, adjusted stat widths. |
| **Tablet** (640px and up) | Larger table text and padding. |
| **Desktop** (1024px and up) | Full hero layout with image beside the information, wider table columns and row hover effect. |

Both light and dark modes work at every screen size.

---

## Team and Contributions



### What Each Member Did

| Member | GitHub | Contribution |
| --- | --- | --- |
| **Festus** (Group Leader) | [@festusola](https://github.com/festusola) | Led the project and did the largest share of the work. Corrected and restructured the HTML, built the hero section, fixed the API fetch and the planet display function, worked on the light/dark toggle, handled responsiveness, and carried out integration and review. |
| **Otitonioluwa** (Assistant Group Leader) | [@Otitonioluwa](https://github.com/Otitonioluwa) | Wrote the final CSS of the hero section and corrected the width of the whole page. Helped merge pull requests made by the group leader. |
| **Favour Ben** | [@Fbenstudio](https://github.com/Fbenstudio) | Built the header and the search bar, worked on part of the footer, and implemented the error/loading message and search functionality. |
| **Rebecca** | [@Rebecca-Samuel](https://github.com/Rebecca-Samuel) | Built the table section and its functionality. |
| **Chibuzo** | [@chibuzo900-glitch](https://github.com/chibuzo900-glitch) | Built the table section and its functionality. |
| **Ebuka** | n/a | Worked on part of the footer. |
| **Lydia** | n/a | Wrote the HTML for the hero section. |
| **Tunde** | [@Tunde99](https://github.com/Tunde99) | Contributed ideas for dark mode and responsiveness. |


---

## Git Workflow

The team followed the workflow required by the course:

1. Work is done on **separate branches**.
2. All contributions are submitted through **Pull Requests**.
3. The person who opens a PR **does not review and merge their own PR**.
4. A PR must be **reviewed before being merged** into `main`.
5. GitHub features (issues, projects) can be used to manage tasks.

Tips used during development:
- Pull the latest `main` into your branch before opening a PR (`git merge main`) to avoid conflicts.
- After a PR is merged, run `git pull origin main` to keep your local copy current.

---

## Learning Objectives Covered

1. HTML, CSS and JS fundamentals
2. Fetch API and working with external data
3. Functions and logic
4. Research and documentation
5. Responsive web design
6. Git collaboration and pull request workflows
7. Deploying the application to a hosting platform
8. Developing an application that has a semblance to the design provided

---

## Possible Improvements

- Add **partial and fuzzy search** (for example, typing `ear` suggests Earth).
- Add data and images for **all planets**, not just the ones in `test.json`.
- Remember the user's **theme choice** with `localStorage`.
- Add a visible **loading spinner** while data is fetched.
- Fill the comparison table from the same JSON data instead of hardcoding the values.
- Add a mobile navigation menu if more pages are added.

---

## Credits

- **Design:** [Amaka N](https://amakandukwu.com)
- **Built by:** Group 1, TSAcademy Hajimeh cohort
- **Data source for planetary facts:** NASA
- **Academy:** [TSAcademy](https://tsacademyonline.com)

&copy; 2026. All rights reserved.


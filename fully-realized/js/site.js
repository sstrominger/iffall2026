
/* SHARED NAVIGATION AND SITE SEARCH */

document.addEventListener("DOMContentLoaded", function () {

    // Pages inside /pages/ use ../ to reach the root.
    const root = document.documentElement.dataset.root || "";

    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");

    // SHARED HEADER

    if (header) {
        header.innerHTML = `
            <header class="site-header">
                <div class="header-container">

                    <div class="branding">
                        <a class="site-title"
                           href="${root}index.html">
                            Marilyn Monroe
                        </a>

                        <p class="site-tagline">
                            A Life in Film & Beyond
                        </p>
                    </div>

                    <form class="search-bar" role="search">
                        <input type="search"
                               name="q"
                               aria-label="Search the microsite"
                               placeholder="Search Marilyn Monroe..."
                               required>

                        <button type="submit">Search</button>
                    </form>

                </div>
            </header>

            <nav class="main-nav" aria-label="Main navigation">
                <ul class="nav-list">

                    <li>
                        <a href="${root}index.html">Home</a>
                    </li>

                    <li class="dropdown">
                        <a href="${root}pages/her-life.html">
                            Her Life
                        </a>

                        <button class="dropdown-toggle"
                                type="button"
                                aria-label="Open Her Life menu"
                                aria-expanded="false">
                        </button>

                        <ul class="dropdown-menu">
                            <li>
                                <a href="${root}pages/her-life.html#childhood">
                                    Childhood & Early Years
                                </a>
                            </li>
                            <li>
                                <a href="${root}pages/her-life.html#relationships">
                                    Family & Relationships
                                </a>
                            </li>
                            <li>
                                <a href="${root}pages/her-life.html#challenges">
                                    Personal Challenges
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="${root}pages/career.html">
                            Career
                        </a>

                        <button class="dropdown-toggle"
                                type="button"
                                aria-label="Open Career menu"
                                aria-expanded="false">
                            &#8964;
                        </button>

                        <ul class="dropdown-menu">
                            <li>
                                <a href="${root}pages/career.html#modeling">
                                    Modeling Career
                                </a>
                            </li>
                            <li>
                                <a href="${root}pages/career.html#films">
                                    Hollywood Films
                                </a>
                            </li>
                            <li>
                                <a href="${root}pages/career.html#independence">
                                    Creative Independence
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="${root}pages/public-image.html">
                            Public Image
                        </a>

                        <button class="dropdown-toggle"
                                type="button"
                                aria-label="Open Public Image menu"
                                aria-expanded="false">
                            &#8964;
                        </button>

                        <ul class="dropdown-menu">
                            <li>
                                <a href="${root}pages/public-image.html#style">
                                    Beauty & Style
                                </a>
                            </li>
                            <li>
                                <a href="${root}pages/public-image.html#media">
                                    Fame & Media
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="${root}pages/legacy.html">
                            Legacy
                        </a>

                        <button class="dropdown-toggle"
                                type="button"
                                aria-label="Open Legacy menu"
                                aria-expanded="false">
                            &#8964;
                        </button>

                        <ul class="dropdown-menu">
                            <li>
                                <a href="${root}pages/legacy.html#film">
                                    Film Legacy
                                </a>
                            </li>
                            <li>
                                <a href="${root}pages/legacy.html#culture">
                                    Cultural Impact
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        `;
    }


    // SHARED FOOTER

    if (footer) {
        footer.innerHTML = `
            <footer class="site-footer">

                <div class="footer-container">

                    <div class="footer-brand">
                        <h2>Marilyn Monroe</h2>

                        <p><em>A Life in Film & Beyond</em></p>

                        <p class="footer-small">
                            Born Norma Jeane Mortenson
                        </p>

                        <a class="back-to-top" href="#top">
                            Back to Top &uarr;
                        </a>
                    </div>

                    <div class="footer-links">
                        <h3>Explore Her Story</h3>

                        <a href="${root}pages/her-life.html">
                            Her Life
                        </a>
                        <a href="${root}pages/career.html">
                            Hollywood Career
                        </a>
                        <a href="${root}pages/public-image.html">
                            Public Image
                        </a>
                        <a href="${root}pages/legacy.html">
                            Legacy
                        </a>
                        <a href="${root}index.html#timeline">
                            A Life in Focus
                        </a>
                    </div>

                    <div class="footer-sources">
                        <h3>Sources & Credits</h3>

                        <a href="https://en.wikipedia.org/wiki/Marilyn_Monroe"
                           target="_blank" rel="noopener noreferrer">
                            Wikipedia Biography
                        </a>

                        <a href="https://commons.wikimedia.org/"
                           target="_blank" rel="noopener noreferrer">
                            Wikimedia Commons Photographs
                        </a>

                        <p class="footer-small">
                            Student Design Project | 2026
                        </p>
                    </div>

                </div>

            </footer>
        `;
    }


    // DROPDOWN BUTTONS

    document.querySelectorAll(".dropdown-toggle").forEach(
        function (button) {

            button.addEventListener("click", function () {

                const dropdown = button.parentElement;
                const isOpen = dropdown.classList.contains("open");

                document.querySelectorAll(".dropdown").forEach(
                    function (item) {
                        item.classList.remove("open");

                        const toggle = item.querySelector(
                            ".dropdown-toggle"
                        );

                        if (toggle) {
                            toggle.setAttribute(
                                "aria-expanded", "false"
                            );
                        }
                    }
                );

                if (!isOpen) {
                    dropdown.classList.add("open");
                    button.setAttribute("aria-expanded", "true");
                }

            });
        }
    );

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(
                function (item) {
                    item.classList.remove("open");
                    const toggle = item.querySelector(".dropdown-toggle");
                    if (toggle) {
                        toggle.setAttribute("aria-expanded", "false");
                    }
                }
            );
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            document.querySelectorAll(".dropdown").forEach(
                function (item) {
                    item.classList.remove("open");
                    const toggle = item.querySelector(".dropdown-toggle");
                    if (toggle) {
                        toggle.setAttribute("aria-expanded", "false");
                    }
                }
            );
        }
    });


    // SEARCH INDEX: ALL SITE PAGES AND MAIN SECTIONS

    const searchPages = [
        {
            title: "Her Life",
            description: "Childhood, family, relationships and personal life.",
            keywords: "early life norma jeane biography childhood family",
            url: "pages/her-life.html"
        },
        {
            title: "Childhood and Early Years",
            description: "Marilyn Monroe's childhood and early experiences.",
            keywords: "1926 norma jeane foster homes los angeles",
            url: "pages/her-life.html#childhood"
        },
        {
            title: "Family and Relationships",
            description: "Marilyn's personal relationships and family life.",
            keywords: "marriage joe dimaggio arthur miller family",
            url: "pages/her-life.html#relationships"
        },
        {
            title: "Personal Challenges",
            description: "The pressures Marilyn faced behind the spotlight.",
            keywords: "struggles mental health fame privacy challenges",
            url: "pages/her-life.html#challenges"
        },
        {
            title: "Hollywood Career",
            description: "Marilyn's modeling and acting career.",
            keywords: "actress career hollywood movie star",
            url: "pages/career.html"
        },
        {
            title: "Modeling Career",
            description: "Her beginnings as a model in the 1940s.",
            keywords: "model photographs 1940s norma jeane",
            url: "pages/career.html#modeling"
        },
        {
            title: "Hollywood Films",
            description: "Marilyn's most memorable film performances.",
            keywords: "filmography movies gentlemen prefer blondes seven year itch some like it hot",
            url: "pages/career.html#films"
        },
        {
            title: "Creative Independence",
            description: "Marilyn's ambition and work beyond studio expectations.",
            keywords: "production company acting study independence",
            url: "pages/career.html#independence"
        },
        {
            title: "Public Image",
            description: "Marilyn's style, glamour and public persona.",
            keywords: "beauty femininity fashion appearance icon",
            url: "pages/public-image.html"
        },
        {
            title: "Beauty and Style",
            description: "The fashion and imagery associated with Marilyn.",
            keywords: "style clothing photographs glamour femininity",
            url: "pages/public-image.html#style"
        },
        {
            title: "Fame and the Media",
            description: "Public attention and the construction of celebrity.",
            keywords: "press publicity fame celebrity magazines media",
            url: "pages/public-image.html#media"
        },
        {
            title: "Legacy",
            description: "Marilyn's influence after her lifetime.",
            keywords: "cultural legacy influence history",
            url: "pages/legacy.html"
        },
        {
            title: "Film Legacy",
            description: "Her continuing importance to cinema.",
            keywords: "acting cinema films performances",
            url: "pages/legacy.html#film"
        },
        {
            title: "Cultural Impact",
            description: "Her influence on fashion, art and popular culture.",
            keywords: "culture icon fashion pop art image",
            url: "pages/legacy.html#culture"
        },
        {
            title: "A Life in Focus",
            description: "Timeline of important moments in Marilyn's life.",
            keywords: "timeline 1926 1940s 1950s 1962 birth death",
            url: "index.html#timeline"
        }
    ];


    // CONNECT ALL SEARCH FORMS

    document.querySelectorAll(".search-bar").forEach(
        function (form) {

            form.addEventListener("submit", function (event) {

                event.preventDefault();

                const input = form.querySelector("input");
                const query = input.value.trim();

                if (query) {
                    window.location.href =
                        root + "search.html?q=" +
                        encodeURIComponent(query);
                }

            });
        }
    );


    // DISPLAY SEARCH RESULTS

    const resultsContainer =
        document.getElementById("search-results");

    if (resultsContainer) {

        const params = new URLSearchParams(window.location.search);
        const query = params.get("q") || "";
        const title = document.getElementById("results-title");
        const list = document.getElementById("results-list");

        const normalize = function (text) {
            return text.toLowerCase().trim();
        };

        const terms = normalize(query).split(/\s+/).filter(Boolean);

        title.textContent = query
            ? 'Results for "' + query + '"'
            : "Search the Site";

        const matches = searchPages.filter(function (page) {

            const searchableText = normalize(
                page.title + " " +
                page.description + " " +
                page.keywords
            );

            return terms.length > 0 &&
                terms.every(function (term) {
                    return searchableText.includes(term);
                });
        });

        const summary = document.createElement("p");
        summary.textContent = query
            ? matches.length + " matching sections found."
            : "Enter a search term in the navigation bar.";

        list.appendChild(summary);

        matches.forEach(function (page) {

            const article = document.createElement("article");
            article.className = "result-card";

            const heading = document.createElement("h2");
            const link = document.createElement("a");

            link.href = root + page.url;
            link.textContent = page.title;

            heading.appendChild(link);

            const description = document.createElement("p");
            description.textContent = page.description;

            article.appendChild(heading);
            article.appendChild(description);
            list.appendChild(article);

        });

        if (query && matches.length === 0) {
            const message = document.createElement("p");
            message.textContent =
                "No results found. Try childhood, career, films, style or legacy.";
            list.appendChild(message);
        }
    }

    // Restore correct anchor position after shared elements load.
    if (window.location.hash) {
        const targetId = decodeURIComponent(
            window.location.hash.slice(1)
        );

        const target = document.getElementById(targetId);

        if (target) {
            requestAnimationFrame(function () {
                target.scrollIntoView();
            });
        }
    }

});

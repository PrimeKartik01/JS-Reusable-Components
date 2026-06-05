export function initNavbar({
    containerId,
    data
}) {

    const container =
        document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = `
    
    <nav
        id="main-navbar"
        class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    >

        <div
            class="max-w-7xl mx-auto px-6 lg:px-8"
        >

            <div
                class="flex items-center justify-between h-20"
            >

                <!-- Logo -->
                <a href="index.html">

                    <img
                        src="${data.logo}"
                        alt="Logo"
                        class="h-12 object-contain"
                    >

                </a>

                <!-- Desktop Menu -->
                <div
                    class="hidden lg:flex items-center gap-10"
                >

                    ${data.links.map(link => `
                        <a
                            href="${link.href}"
                            class="text-white uppercase tracking-wider text-sm hover:text-[#d4af37] transition"
                        >
                            ${link.label}
                        </a>
                    `).join("")}

                </div>

                <!-- Desktop CTA -->
                <a
                    href="${data.ctaLink}"
                    class="hidden lg:inline-flex items-center px-6 py-3 bg-[#d4af37] text-black font-medium rounded-full hover:scale-105 transition"
                >
                    ${data.ctaText}
                </a>

                <!-- Mobile Toggle -->
                <button
                    id="mobile-menu-btn"
                    class="lg:hidden text-white text-3xl"
                >
                    ☰
                </button>

            </div>

        </div>

    </nav>

    <!-- Overlay -->
    <div
        id="mobile-overlay"
        class="fixed inset-0 bg-black/50 opacity-0 invisible transition-all duration-300 z-[60]"
    ></div>

    <!-- Mobile Drawer -->
    <div
        id="mobile-menu"
        class="fixed top-0 right-0 h-screen w-[280px] bg-black backdrop-blur-xl translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-[70] lg:hidden"
    >
            <div class="p-6">

            <div class="flex justify-end">

                <button
                    id="close-menu"
                    class="text-white text-3xl"
                >
                    ×
                </button>

            </div>

            <div
                class="flex flex-col gap-8 mt-10"
            >

                ${data.links.map(link => `
                    <a
                        href="${link.href}"
                        class="text-white uppercase tracking-wider text-sm hover:text-[#d4af37] transition"
                    >
                        ${link.label}
                    </a>
                `).join("")}

                <a
                    href="${data.ctaLink}"
                    class="mt-4 px-5 py-3 bg-[#d4af37] text-black rounded-full text-center font-medium"
                >
                    ${data.ctaText}
                </a>

            </div>

        </div>

    </div>
    `;

    const navbar =
        document.getElementById("main-navbar");

    const mobileBtn =
        document.getElementById("mobile-menu-btn");

    const mobileMenu =
        document.getElementById("mobile-menu");

    const mobileOverlay =
        document.getElementById("mobile-overlay");

    const closeMenu =
        document.getElementById("close-menu");

    function openMenu() {

        document.body.style.overflow = "hidden";

        mobileMenu.classList.remove(
            "translate-x-full"
        );

        mobileOverlay.classList.remove(
            "opacity-0",
            "invisible"
        );

    }

    function closeMobileMenu() {

        document.body.style.overflow = "";

        mobileMenu.classList.add(
            "translate-x-full"
        );

        mobileOverlay.classList.add(
            "opacity-0",
            "invisible"
        );

    }

    mobileBtn.addEventListener(
        "click",
        openMenu
    );

    closeMenu.addEventListener(
        "click",
        closeMobileMenu
    );

    mobileOverlay.addEventListener(
        "click",
        closeMobileMenu
    );

    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add(
                "bg-black/20",
                "backdrop-blur-xl",
                "shadow-lg"
            );

        } else {

            navbar.classList.remove(
                "bg-black/20",
                "backdrop-blur-xl",
                "shadow-lg"
            );

        }

    });

}
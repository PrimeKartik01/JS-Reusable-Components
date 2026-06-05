export function initHeroSlider({
    containerId,
    slides,
    interval = 6000
}) {

    const container = document.getElementById(containerId);

    if (!container || !slides?.length) return;

    // Preload images
    slides.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
    });

    container.classList.add("bg-black");

    container.innerHTML = slides.map((slide, index) => `
        <div
            class="
                hero-slide
                absolute inset-0
                w-full h-full
                bg-black
                transition-opacity
                duration-[1500ms]
                ease-in-out
                ${index === 0 ? "opacity-100" : "opacity-0"}
            "
        >

            <img
                src="${slide.image}"
                alt="${slide.title}"
                class="
                    hero-image
                    absolute inset-0
                    w-full h-full
                    object-cover
                "
            >

            <div class="absolute inset-0 bg-black/50"></div>

            <div
                class="
                    relative z-10
                    h-full
                    flex
                    items-center
                    justify-center
                "
            >
                <div class="text-center text-white px-6">

                    <h1
                        class="
                            text-5xl
                            md:text-7xl
                            font-bold
                            mb-4
                            slide-up
                        "
                    >
                        ${slide.title}
                    </h1>

                    <p
                        class="
                            text-lg
                            md:text-2xl
                            slide-up-subtitle
                        "
                    >
                        ${slide.subtitle}
                    </p>

                </div>
            </div>

        </div>
    `).join("");

    const slideElements =
        container.querySelectorAll(".hero-slide");

    let current = 0;

    // First slide animation start
    const firstImg =
        slideElements[0].querySelector(".hero-image");

    firstImg.style.animation =
        `heroZoom ${interval}ms ease-out forwards`;

    setInterval(() => {

        const next =
            (current + 1) % slideElements.length;

        // Fade current out
        slideElements[current]
            .classList.remove("opacity-100");

        slideElements[current]
            .classList.add("opacity-0");

        // Fade next in
        slideElements[next]
            .classList.remove("opacity-0");

        slideElements[next]
            .classList.add("opacity-100");

        // Restart zoom animation
        const nextImg =
            slideElements[next].querySelector(".hero-image");

        nextImg.style.animation = "none";

        // Force browser reflow
        void nextImg.offsetWidth;

        nextImg.style.animation =
            `heroZoom ${interval}ms ease-out forwards`;

        current = next;

    }, interval);

}
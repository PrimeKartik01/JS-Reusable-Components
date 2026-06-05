export function initProjectSpotlight({
    containerId,
    slides,
    interval = 5000
}) {

    const container =
        document.getElementById(containerId);

    if (!container || !slides?.length) return;

    let current = 0;

    container.innerHTML = `
        <div
            class="
                max-w-7xl
                mx-auto
                px-6
            "
        >

            <div
                class="
                    relative
                    h-[550px]
                    flex
                    items-center
                    justify-center
                "
            >

                <button
                    id="spotlight-prev"
                    class="
                        absolute
                        left-0
                        z-20
                        text-white
                        text-5xl
                        hover:scale-110
                        transition
                    "
                >
                    ‹
                </button>

                <div
                    id="spotlight-track"
                    class="
                        relative
                        w-full
                        h-full
                    "
                ></div>

                <button
                    id="spotlight-next"
                    class="
                        absolute
                        right-0
                        z-20
                        text-white
                        text-5xl
                        hover:scale-110
                        transition
                    "
                >
                    ›
                </button>

            </div>

        </div>
    `;

    const track =
        document.getElementById("spotlight-track");

    const cards = [];

    slides.forEach(slide => {

        const card =
            document.createElement("div");

        card.className = `
            spotlight-card
            absolute
            top-1/2
            left-1/2
        `;

        card.innerHTML = `
            <div
                class="
                    relative
                    overflow-hidden
                    rounded-3xl
                    shadow-2xl
                "
            >

                <img
                    src="${slide.image}"
                    alt="${slide.title}"
                    class="
                        spotlight-image
                        w-full
                        h-[450px]
                        object-cover
                    "
                >

                <div
                    class="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        to-transparent
                    "
                ></div>

                <div
                    class="
                        absolute
                        bottom-0
                        left-0
                        p-8
                        text-white
                    "
                >

                    <h3
                        class="
                            text-3xl
                            font-bold
                        "
                    >
                        ${slide.title}
                    </h3>

                    <p
                        class="
                            text-white/80
                            mt-2
                        "
                    >
                        ${slide.location}
                    </p>

                </div>

            </div>
        `;

        track.appendChild(card);

        cards.push(card);

    });

    function updateSlides() {

        cards.forEach((card, index) => {

            card.classList.remove(
                "active",
                "prev",
                "next",
                "hidden"
            );

            if (index === current) {

                card.classList.add(
                    "active"
                );

            }

            else if (
                index ===
                (current - 1 + slides.length)
                % slides.length
            ) {

                card.classList.add(
                    "prev"
                );

            }

            else if (
                index ===
                (current + 1)
                % slides.length
            ) {

                card.classList.add(
                    "next"
                );

            }

            else {

                card.classList.add(
                    "hidden"
                );

            }

        });

    }

    function nextSlide() {

        current =
            (current + 1)
            % slides.length;

        updateSlides();

    }

    function prevSlide() {

        current =
            (current - 1 + slides.length)
            % slides.length;

        updateSlides();

    }

    updateSlides();

    document
        .getElementById("spotlight-next")
        .addEventListener(
            "click",
            nextSlide
        );

    document
        .getElementById("spotlight-prev")
        .addEventListener(
            "click",
            prevSlide
        );

    setInterval(
        nextSlide,
        interval
    );

}
export function initForm({
    containerId,
    data,
    onSubmit
}) {

    const container =
        document.getElementById(containerId);

    if (!container) return;

    const normalFields =
        data.fields.filter(
            field =>
                field.type !== "textarea"
        );

    const textareas =
        data.fields.filter(
            field =>
                field.type === "textarea"
        );

    container.innerHTML = `

        <div
            class="
                w-full
                mx-auto
                overflow-hidden
                bg-white
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                grid
                lg:grid-cols-2
            "
        >

            <!-- FORM -->

            <div
                class="
                    p-6
                    md:p-10
                    lg:p-14
                "
            >

                <span
                    class="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        bg-amber-100
                        text-amber-700
                        text-sm
                        font-semibold
                        mb-5
                    "
                >
                    ${data.badge}
                </span>

                <h2
                    class="
                        text-3xl
                        lg:text-4xl
                        font-bold
                        text-slate-900
                        mb-3
                    "
                >
                    ${data.title}
                </h2>

                <p
                    class="
                        text-slate-500
                        mb-8
                        leading-relaxed
                    "
                >
                    ${data.subtitle}
                </p>

                <form
                    id="${containerId}-form"
                    class="space-y-5"
                >

                    <div
                        class="
                            grid
                            md:grid-cols-2
                            gap-5
                        "
                    >

                        ${normalFields
            .map(field => {

                if (
                    field.type ===
                    "select"
                ) {

                    return `
                                    
                                        <div>

                                            <label
                                                class="
                                                    block
                                                    mb-2
                                                    text-sm
                                                    font-semibold
                                                    text-slate-700
                                                "
                                            >
                                                ${field.label}
                                            </label>

                                            <select
                                                name="${field.name}"
                                                class="
                                                    w-full
                                                    h-14
                                                    px-5
                                                    rounded-2xl
                                                    bg-slate-50
                                                    border
                                                    border-slate-200
                                                    outline-none
                                                    transition-all
                                                    duration-300
                                                    focus:bg-white
                                                    focus:border-amber-500
                                                    focus:ring-4
                                                    focus:ring-amber-100
                                                "
                                            >

                                                <option value="">
                                                    Select Budget
                                                </option>

                                                ${field.options
                            .map(
                                option => `
                                                        
                                                        <option value="${option}">
                                                            ${option}
                                                        </option>
                                                    
                                                    `
                            )
                            .join("")}

                                            </select>

                                        </div>
                                    
                                    `;
                }

                return `
                                
                                    <div>

                                        <label
                                            class="
                                                block
                                                mb-2
                                                text-sm
                                                font-semibold
                                                text-slate-700
                                            "
                                        >
                                            ${field.label}
                                        </label>

                                        <input
                                            type="${field.type}"
                                            name="${field.name}"
                                            placeholder="${field.placeholder}"
                                            class="
                                                w-full
                                                h-14
                                                px-5
                                                rounded-2xl
                                                bg-slate-50
                                                border
                                                border-slate-200
                                                outline-none
                                                transition-all
                                                duration-300
                                                focus:bg-white
                                                focus:border-amber-500
                                                focus:ring-4
                                                focus:ring-amber-100
                                            "
                                        >

                                    </div>
                                
                                `;
            })
            .join("")}

                    </div>

                    ${textareas
            .map(
                field => `
                            
                            <div>

                                <label
                                    class="
                                        block
                                        mb-2
                                        text-sm
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    ${field.label}
                                </label>

                                <textarea
                                    name="${field.name}"
                                    rows="5"
                                    placeholder="${field.placeholder}"
                                    class="
                                        w-full
                                        px-5
                                        py-4
                                        rounded-2xl
                                        bg-slate-50
                                        border
                                        border-slate-200
                                        outline-none
                                        resize-none
                                        transition-all
                                        duration-300
                                        focus:bg-white
                                        focus:border-amber-500
                                        focus:ring-4
                                        focus:ring-amber-100
                                    "
                                ></textarea>

                            </div>
                        
                        `
            )
            .join("")}

                    <button
                        type="submit"
                        class="
                            w-full
                            h-14
                            rounded-2xl
                            bg-gradient-to-r
                            from-amber-500
                            to-amber-600
                            text-white
                            font-semibold
                            text-lg
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-xl
                            hover:shadow-amber-500/30
                        "
                    >
                        ${data.submitText}
                    </button>

                </form>

            </div>

            <!-- IMAGE -->

            <div
                class="
                    relative
                    hidden
                    lg:block
                "
            >

                <img
                    src="${data.image}"
                    alt="Luxury Property"
                    class="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                    "
                >

                <div
                    class="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/30
                        to-transparent
                    "
                ></div>

                <div
                    class="
                        absolute
                        top-8
                        right-8
                        bg-white/10
                        backdrop-blur-lg
                        rounded-3xl
                        p-6
                        text-white
                    "
                >

                    <div
                        class="
                            text-4xl
                            font-bold
                        "
                    >
                        500+
                    </div>

                    <div
                        class="
                            text-sm
                            text-white/80
                        "
                    >
                        Happy Families
                    </div>

                </div>

                <div
                    class="
                        absolute
                        bottom-0
                        left-0
                        p-10
                        text-white
                    "
                >

                    <p
                        class="
                            uppercase
                            tracking-[4px]
                            text-amber-300
                            text-sm
                            mb-3
                        "
                    >
                        Luxury Living
                    </p>

                    <h3
                        class="
                            text-5xl
                            font-bold
                            leading-tight
                        "
                    >
                        Find Your
                        Dream Home
                    </h3>

                    <p
                        class="
                            mt-4
                            text-white/80
                            max-w-md
                        "
                    >
                        Discover premium residences
                        with modern amenities and
                        world-class infrastructure.
                    </p>

                </div>

            </div>

        </div>

    `;

    const form =
        document.getElementById(
            `${containerId}-form`
        );

    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();
            const formData = new FormData(form);

            const values =Object.fromEntries(formData.entries());

            try {
                
                const response =
                    await fetch(
                        "submit-lead.php",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                "application/json"
                            },

                            body:
                                JSON.stringify(values)
                        }
                    );

                const result = await response.json();
                console.log(result);

            } catch (error) { console.error(error); }
        }
    );
}
document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       TYPING ANIMATION
    ========================= */

    const words = [
        "Front-End Web Developer",
        "Aspiring App Developer",
        "Content Creator",
        "Remote Freelancer"
    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    const typing =
        document.getElementById("typing");


    function typeText() {

        if (!typing) {
            return;
        }


        const current =
            words[wordIndex];


        if (!deleting) {

            typing.textContent =
                current.substring(
                    0,
                    charIndex
                );

            charIndex++;


            if (
                charIndex >
                current.length
            ) {

                deleting = true;

                setTimeout(
                    typeText,
                    1500
                );

                return;
            }

        }

        else {

            typing.textContent =
                current.substring(
                    0,
                    charIndex
                );

            charIndex--;


            if (charIndex < 0) {

                deleting = false;

                charIndex = 0;

                wordIndex =
                    (wordIndex + 1)
                    % words.length;
            }
        }


        setTimeout(
            typeText,
            deleting ? 60 : 120
        );

    }


    typeText();



    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.getElementById(
            "menu-toggle"
        );

    const navLinks =
        document.getElementById(
            "nav-links"
        );


    if (
        menuToggle &&
        navLinks
    ) {

        menuToggle.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle(
                    "active"
                );

            }
        );


        /* Close menu after clicking link */

        const links =
            navLinks.querySelectorAll("a");


        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

    }



    /* =========================
       SCROLL ANIMATION
    ========================= */

    const hiddenElements =
        document.querySelectorAll(
            ".hidden"
        );


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    hiddenElements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );


});

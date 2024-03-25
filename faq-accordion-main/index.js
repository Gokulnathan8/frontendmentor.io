var accordionbtns = document.querySelectorAll(".faq-accordion-display-btn");

accordionbtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var accordionContent = this.parentElement.nextElementSibling;
        var plusIcon = this.querySelector("#icon-plus");
        var minusIcon = this.querySelector("#icon-minus");

        var allAccordionContents = document.querySelectorAll(".faq-accordion-content");
        allAccordionContents.forEach(function(content) {
            content.style.display = "none";
        });

        var allPlusIcons = document.querySelectorAll("#icon-plus");
        var allMinusIcons = document.querySelectorAll("#icon-minus");
        allPlusIcons.forEach(function(icon) {
            icon.style.display = "block";
        });
        allMinusIcons.forEach(function(icon) {
            icon.style.display = "none";
        });

        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
            this.classList.remove("active");
        } else {
            accordionContent.style.display = "block";
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
            this.classList.add("active");
        }
    });
});

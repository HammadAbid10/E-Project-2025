// Add tooltips to the tags
document.addEventListener("DOMContentLoaded", function () {
    const tags = document.querySelectorAll(".tags a");
    
    tags.forEach(tag => {
        tag.addEventListener("mouseover", function () {
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = `Explore more about ${tag.textContent}`;
            document.body.appendChild(tooltip);

            // Position tooltip near the tag
            const rect = tag.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
        });

        tag.addEventListener("mouseout", function () {
            const tooltip = document.querySelector(".tooltip");
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

// Add hover effect to gallery images
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease-in-out";
    });

    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});

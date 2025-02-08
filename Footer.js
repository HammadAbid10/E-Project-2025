document.addEventListener("DOMContentLoaded", function () {
    const tags = document.querySelectorAll(".tags a");

    tags.forEach(tag => {
        tag.addEventListener("mouseover", function () {
            let tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = `Explore more about ${tag.textContent}`;
            document.body.appendChild(tooltip);

            let rect = tag.getBoundingClientRect();
            tooltip.style.position = "absolute";
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - 30}px`;
            tooltip.style.padding = "5px 10px";
            tooltip.style.backgroundColor = "#000";
            tooltip.style.color = "#fff";
            tooltip.style.borderRadius = "5px";
            tooltip.style.fontSize = "12px";
            tooltip.style.pointerEvents = "none";

            tag.addEventListener("mouseout", function () {
                tooltip.remove();
            });
        });
    });

    // Gallery Image Hover Effect
    document.querySelectorAll(".gallery img").forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.1)";
        });
        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
        });
    });
});

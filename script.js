// Select the controls
const flexContainer = document.querySelector(".flex-container");
const flexDirectionSelect = document.getElementById("flexDirection");
const justifyContentSelect = document.getElementById("justifyContent");
const alignItemsSelect = document.getElementById("alignItems");
const gapRange = document.getElementById("gap");
const gapValue = document.getElementById("gapValue");

// Add event listeners to update flexbox properties
flexDirectionSelect.addEventListener("change", function () {
    flexContainer.style.flexDirection = this.value;
});

justifyContentSelect.addEventListener("change", function () {
    flexContainer.style.justifyContent = this.value;
});

alignItemsSelect.addEventListener("change", function () {
    flexContainer.style.alignItems = this.value;
});

gapRange.addEventListener("input", function () {
    flexContainer.style.gap = `${this.value}px`;
    gapValue.textContent = `${this.value}px`;
});

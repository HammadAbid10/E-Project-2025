const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let parks = ["Ayubia National Park", "Broghil Valley National Park", "Kirthar National Park", "Chitral Gol National Park", "Chinji National Park", "Deosai National Park", "Hingol National Park", "Margalla Hills National Park", "Kala Chitta National Park", "Khunjerab National Park"]

function addPark(selectedPark) {
    options.innerHTML = "";
    parks.forEach(park => {
        let isSelected = park == selectedPark ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${park}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}

addPark();

function updateName(selectedLi) {
    searchInp.value = "";
    addPark(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();
    arr = parks.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Oops! Park not found</p>`;
});

selectBtn.addEventListener("click" , () => {
    wrapper.classList.toggle("active");
});
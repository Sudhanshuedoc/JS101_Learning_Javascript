let root = document.getElementById("root");
let timer;

function debounce(callback, delay) {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        callback();
    }, delay);
}

async function main() {
    try{
        let searches = document.getElementById("search-term").value;
        const response = await fetch(`http://www.omdbapi.com/?apikey=4ace5611&s=${searches}`);
        const data = await response.json();
        displayData(data?.Search); 
    }
    catch{
        root.innerHTML = "Sorry Movie not found"
    }

}

function displayData(movieList) {
    root.innerHTML = "";
    for (let i = 0; i < movieList.length; i++) {
        let movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        let posterElement = document.createElement("img");
        posterElement.src = movieList[i].Poster; // Fix the property name to "Poster" instead of "poster"
        let para = document.createElement("p")
        para.textContent = movieList[i].Title;
        movieCard.append(posterElement,para);
        root.append(movieCard);
    }
}

// Assuming you want to trigger the search on input change using debounce
document.getElementById("search-term").addEventListener("input", () => {
    debounce(main, 1000); // Adjust the delay as needed
});

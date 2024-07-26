const fetchmovieData = async () => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=movies&apikey=ee62d61b`);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
// const movie = prompt("Search a movie...");
fetchmovieData();
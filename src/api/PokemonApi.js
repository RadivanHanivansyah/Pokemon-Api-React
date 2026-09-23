import axios from "axios"

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMyNDgzOTk3ZjBjZTczYjA1MDA5Njg1NDIxODM3YiIsIm5iZiI6MTc4MzYwNjA2Mi41MjksInN1YiI6IjZhNGZhYjJlNmMzNTUzYjY2Zjg2Y2E5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QsDQTkUMrABvwJB1dlS_2HPZBjqWZxX0_mNsXLkJrSA",
    },
};

const response = axios.get(
    "https://api.themoviedb.org/3/tv/airing_today",
    options
);

console.log( response.data )






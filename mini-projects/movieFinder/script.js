
const input = document.querySelector('input')
const button = document.querySelector('button')
const movie = document.getElementById('movie-container')

const searchMovie = async () => {

    const movieName = input.value.trim()

    if (!movieName) {
        alert('Please enter a movie name')
        return
    }

    movie.innerHTML = `
        <div class="loading">
            Loading movies...
        </div>
    `

    try {

        const response = await fetch(
            `https://www.omdbapi.com/?apikey=cfaf4395&s=${movieName}`
        )

        const movieData = await response.json()

        if (movieData.Response === "False") {

            movie.innerHTML = `
                <div class="error">
                    No movies found.
                </div>
            `

            return
        }

        movie.innerHTML = movieData.Search.map(film => {

            return `
                <div class="movie-card">

                    <img
                        src="${film.Poster !== "N/A"
                            ? film.Poster
                            : 'https://via.placeholder.com/300x450?text=No+Poster'
                        }"
                        alt="${film.Title}"
                    >

                    <div class="movie-content">

                        <h3>${film.Title}</h3>

                        <div class="movie-meta">

                            <span>${film.Year}</span>

                            <span>
                                ${film.Type.toUpperCase()}
                            </span>

                        </div>

                    </div>

                </div>
            `

        }).join('')

    }

    catch (error) {

        movie.innerHTML = `
            <div class="error">
                Something went wrong.
            </div>
        `

        console.log(error)
    }
}

button.addEventListener('click', searchMovie)

input.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {
        searchMovie()
    }

})


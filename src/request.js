const API_KEY = '1117b8a9044545527e2e73ee34a6b87b';




/*
- originais da netflix
-recomendados (trending)
-em alta (top rated)
-ação
-comédia
-terror
-romance
-documentários
*/

const requests = {

           
    fetchNetflixOriginals: `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
            
    fetchTrending: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
           

    fetchTopRated: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
           
    fetchActionMovies: `/discover/movie?with_genres=28&language=pt-BRapi_key=${API_KEY}`,
    fetchComedyMovies: `/discover/movie?with_genres=35&language=pt-BRapi_key=${API_KEY}`,
           
    fetchHorrorMovies: `/discover/movie?with_genres=27&language=pt-BRapi_key=${API_KEY}`,
            
    fetchRomanceMovies: `/discover/movie?with_genres=10749&language=pt-BRapi_key=${API_KEY}`,
            
    fetchDocumentaries: `/discover/movie?with_genres=99&language=pt-BRapi_key=${API_KEY}`,
};
export default requests;


            
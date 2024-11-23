const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const SearchVideos = async  (param) => {
    const response = await fetch( `${BASE_URL}/${param}`, {
    method: "GET",
    headers: {
        'x-rapidapi-key': '894383e4b5msh89209cad94ed8ecp17b6d3jsne84eb37858a0',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
    }
    })

    const result = await response.json();
    return result;
}
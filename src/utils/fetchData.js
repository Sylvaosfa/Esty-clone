const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

const options ={
    method: "GET",
    headers: {
        'x-rapidapi-key': '894383e4b5msh89209cad94ed8ecp17b6d3jsne84eb37858a0',
        'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
    }
}
export const SearchVideos = async  (param) => {
    const response = await fetch( `${BASE_URL}/${param}`, options)

    const result = await response.json();
    return result;
}

//lets implement the "trending now" endpoint

export const trendingvideos = async () => {
    const response = await fetch (`${BASE_URL}/trending/lang=en&country=us&sectiion=Now`,options)
    const result = await response.json();
    console.log(result)
    return result;
}

export const getSubtitle = async () => {
    const response = await fetch (`${BASE_URL}/video/subtitles?video_id= ${video_id}`,options)
    const result = await response.json();
    return result;
}
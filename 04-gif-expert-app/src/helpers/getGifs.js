
const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=kxjhjPQCp5ByXjj8hIlj0P8YkqRKHxz4`;
    const answer = await fetch(url);
    const { data } = await answer.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}

export default getGifs;
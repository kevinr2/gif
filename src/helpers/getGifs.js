export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8J0sbT78GeJnzUPd9oy8ADSFxDY05y3a&q=${category}&limit=10`
    const resp = await fetch( url );
    const {data}= await resp.json()
    

    const gifts = data.map( img =>({
        id: img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }))
    console.log(gifts)
    return gifts;
}
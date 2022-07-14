 export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b14cd6f764msh37d90ff1de030f4p185bc2jsn6222e5dc972f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}
document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter(){
    fetch("https://api.gameofthronesquotes.xyz/v1/random")
    .then(response => response.json())
    .then(data => {
        console.log(data.sentence)
        console.log(data.character.name)
        document.querySelector('h1').innerText = data.sentence
        document.querySelector('h2').innerText = `- ${data.character.name}`

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=Jv8PiLArEPerxk8Y2TYrC84d58ufqFqT&q=${data.character.name}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then(response => response.json())
        .then(dataTwo => {
        console.log(dataTwo.data[1].images.fixed_height.url)
        // console.log(dataTwo.data[0])
        document.querySelector('img').src = dataTwo.data[1].images.fixed_height.url
        })
        
        .catch(err => {
         console.log(`error ${err}`)
        })

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

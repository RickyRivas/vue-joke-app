export default {
    callJoke() {
        fetch('https://v2.jokeapi.dev/joke/Any').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }
}
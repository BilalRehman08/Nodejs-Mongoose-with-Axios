
function send() {
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const post = document.getElementById("post")

    const obj = {
        title: title,
        description: description
    }
    console.log(obj)

    axios.post(`http://localhost:5000/add`, obj)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}


function read() {
    axios.get(`http://localhost:5000/read`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

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
            alert("Created Successfully")
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}


function singupp() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const obj = {
        name: name,
        email: email,
        password: password
    }
    console.log(obj)


    axios.post(`http://localhost:5000/signup`, obj)
        .then(function (response) {
            console.log(response);
            alert("Signup Successfully")
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}


function usersss() {
    axios.get(`http://localhost:5000/users`)
        .then(function (response) {
            // console.log(response);
            const data = response
            var p = document.getElementById("post")
            for (var i in data.data) {
                var a = document.createElement("li")
                a.innerHTML = `<div class="card" style="width: 18rem;">
               
                <div class="card-body">
                <h5 class="card-title">Name: ${data.data[i].name}</h5>
                <h5 class="card-title">Email: ${data.data[i].email}</h5>
                  <p class="card-text">Password: ${data.data[i].password}</p>
                  
                </div>
              </div>`
                p.appendChild(a)
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}





function read() {
    axios.get(`http://localhost:5000/read`)
        .then(function (response) {
            // console.log(response);
            const data = response
            var p = document.getElementById("post")
            for (var i in data.data) {
                var a = document.createElement("li")
                a.innerHTML = `<div class="card" style="width: 18rem;">
               
                <div class="card-body">
                  <h5 class="card-title">${data.data[i].title}</h5>
                  <p class="card-text">${data.data[i].description}</p>
                  
                </div>
              </div>`
                p.appendChild(a)
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

// var abc = [1, 2, 4, 5, 6];
// var p = document.getElementById("post")
// var a = document.createElement("li")
// a.innerHTML = 
// p.appendChild(a)
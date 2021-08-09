var currentusername = ''
var currentuseremail = ''
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



    var realdata = {}

    axios.get(`http://localhost:5000/users`)
        .then(function (response) {
            // console.log(response);
            realdata = response
            var flag = true
            for (var i in realdata.data) {
                if (obj.email === realdata.data[i].email) {
                    alert("Already Exists")
                    flag = false
                }
            }
            if (flag) {
                if ((obj.name === "") || (obj.email === "") || (obj.password === "")) {
                    alert("Fields can't be empty")
                } else {
                    axios.post(`http://localhost:5000/signup`, obj)
                        .then(function (response) {

                            console.log(response);
                            alert("Signup Successfully")
                            setTimeout(() => {
                                location.href = "login.html";
                            }, 1000);
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                }
            }

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })


}


function loginnn() {

    axios.get(`http://localhost:5000/users`)
        .then(function (response) {
            // console.log(response);

            const email = document.getElementById("email").value
            const password = document.getElementById("password").value

            const obj = {

                email: email,
                password: password
            }
            realdata = response
            var flag = true
            for (var i in realdata.data) {
                if ((obj.email === realdata.data[i].email) && (obj.password === realdata.data[i].password)) {
                    currentusername = realdata.data[i].name
                    currentuseremail = realdata.data[i].email

                    alert("Login Successful")
                    setTimeout(() => {
                        location.href = "home.html";
                    }, 1000);
                    flag = false
                }
            }
            if (flag) {
                alert("Wrong Credentials")

            }

        })
        .catch(function (error) {
            // handle error
            if ((obj.email === "") || (obj.password === "")) {
                alert("Fields can't be empty")
            }
            else { console.log(error); }
        })

}




function usersss() {
    // var cu = document.getElementById("currentuser")
    // var namee = document.createElement("h3")
    // var emaill = document.createElement("h3")
    // namee.innerHTML = currentusername
    // emaill.innerHTML = currentuseremail
    // cu.appendChild(namee)
    // cu.appendChild(emaill)
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

function logout() {
    location.href = "login.html";
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
                <img class="card-img-top" src="https://image.freepik.com/free-photo/panorama-aurora-borealis-with-milky-way-galaxy-snow-mountain-coastline_49071-212.jpg" alt="Card image cap">
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
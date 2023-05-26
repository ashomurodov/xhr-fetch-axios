const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");

// http request function
const sendHTTPRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject("Something went wrong");
      } else {
        resolve(xhr.response);
      }
    };

    xhr.send(JSON.stringify(data));
  });
};

// & GET DATA
const getData = () => {
  sendHTTPRequest("GET", "https://reqres.in/api/users")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
};

// & POST DATA
const postData = () => {
  sendHTTPRequest("POST", "https://reqres.in/api/register", {
    email: "ee.holt@reqres.in",
    password: "pistol",
  })
    .then((responseData) => console.log(responseData))
    .catch((error) => {
      console.log(error);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);

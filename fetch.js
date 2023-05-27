const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");

const fetchHTTPRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((response) => {
    if (response.statusCode <= 400) {
      return response.json();
    } else {
      return response.json().then((errorRes) => {
        const error = new Error("Something went wrong");
        error.data = errorRes;
        throw error;
      });
    }
  });
};

const getData = () => {
  fetchHTTPRequest("GET", "https://reqres.in/api/users").then((response) => {
    console.log(response);
  });
};

const postData = () => {
  fetchHTTPRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    // password: "pistol",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error, error.data);
    });
};

getBtn.addEventListener("click", getData);

postBtn.addEventListener("click", postData);

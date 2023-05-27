const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");

const fetchHTTPRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((response) => response.json());
};

const getData = () => {
  fetchHTTPRequest("GET", "https://reqres.in/api/users").then((response) => {
    console.log(response);
  });
};

const postData = () => {
  fetchHTTPRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  }).then((response) => {
    console.log(response);
  });
};

getBtn.addEventListener("click", getData);

postBtn.addEventListener("click", postData);

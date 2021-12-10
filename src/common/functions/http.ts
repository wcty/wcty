// const host = process.env.NODE_ENV === "production" ? "https://admin.weee.city" : "http://localhost:4000";
const host = "https://admin.weee.city";

function post(path:string, body:any) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

function get(path:string) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
    method: "GET",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

export const http = {
  post: post,
  get: get
};
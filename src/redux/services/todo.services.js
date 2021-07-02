 const todo = (apiUrl) => ({
  getTodo() {
    return fetch(`${apiUrl}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode > 299) throw new Error(response.errors);
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  addTodo(payload){
    return fetch(`${apiUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode > 299) throw new Error(response.errors);
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
});

export default todo;
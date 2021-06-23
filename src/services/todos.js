const url = "http://localhost:8080/api/todos"

export async function findAll() {
    const response = await fetch(url);
    if(response.status === 200) {
        return await response.json();
    }
    return Promise.reject("not 200 OK");
}

export async function findById(todoId) {
    const response = await fetch(`${url}/${todoId}`);
    if(response.status === 200) {
        return await response.json();
    }
    return Promise.reject("not 200 OK");
}

export async function add(todo) {
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(todo)
    }
    const response = await fetch(url, init);
    if(response.status === 201) {
        return await response.json();
    }
    return Promise.reject("not 201 OK");
}

export async function update(todo) {
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(todo)
    }
    const response = await fetch(`${url}/${todo.id}`, init);
    if(response.status !== 204) {
        return Promise.reject("Not 204 No Content");
    }
}

export async function deleteById(todoId) {
    const response = await fetch(`${url}/${todoId}`, {method: "DELETE"});
    if(response.status !== 204) {
        return Promise.reject("Not 204 No Content");
    }
}

function MyFunction()
{
    localStorage.clear();
    const nameObj = document.getElementById("user_name");
    const surnameObj = document.getElementById("user_surname");
    const urlObj = document.getElementById("user_url");
    
    console.log(nameObj.value);
    console.log(surnameObj.value);
    console.log(urlObj.value);

    const user = 
    {
        name : nameObj.value,
        surname : surnameObj.value,
        url : urlObj.value
    }

    console.log(user.name);
    console.log(user.surname);
    console.log(user.url);

    localStorage.setItem("user1", JSON.stringify(user));
    alert("User saved!");
    window.location.href = 'index2.html';
}

function MyFunction2()
{
    const parentObj = document.getElementById("parent");
    const new_user = JSON.parse(localStorage.getItem("user1"));

    console.log(new_user.name);
    console.log(new_user.surname);
    console.log(new_user.url);

    const new_div = document.createElement("div");
    new_div.innerHTML = `
    <h2>${new_user.name}</h2>
    <h2>${new_user.surname}</h2>
    <img src="${new_user.url}" width=200px>
    `
    parentObj.appendChild(new_div);
}
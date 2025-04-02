function myFunction()
{
    let h2_element = document.getElementById("h2_id");
    console.log(h2_element);
    let name_element = document.getElementById("name_input");
    let surname_element = document.getElementById("surname_input");
    let age_element = document.getElementById("age_input");
    let email_element = document.getElementById("email_input");
    let table_element = document.getElementById("myTable");
    if(name_element.value ==""  || !name_element.value.match(/[A-z]/) || name_element.value.match(/[0-9]/))
    {
        console.error("Name contains invalid symbols!");
        return;
    }
    
    if(surname_element.value ==""  || !surname_element.value.match(/[A-z]/) || surname_element.value.match(/[0-9]/))
    {
        console.error("Surname contains invalid symbols!");
        return;
    }
    
    if(name_element.value ==""  || !age_element.value.match(/[0-9]/))
    {
        console.error("Age contains invalid symbols!");
        return;
    }
    
    if(email_element.value ==""  || !email_element.value.match(/[@]/))
    {
        console.error("Email contains invalid symbols!");
        return;
    }
    h2_element.innerText = "Hello, " + name_element.value + " " + surname_element.value + " " + age_element.value;


    let row = table_element.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();

    cell1.innerHTML = name_element.value;
    cell1.innerHTML = surname_element.value;
    cell1.innerHTML = email_element.value;

}
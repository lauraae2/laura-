let click_Power = 1;
let upgrade_count = 1;
let upgrade2_count = 1;



function click_Handler()
{
    let user_Points = Number(document.getElementById("points").innerText);
    console.log(user_Points);
    user_Points++;
    document.getElementById("points").innerText = user_Points;
}

function upgrade_Handler()
{
    let user_Points = document.getElementById("points").innerText = user_Points - 15;
    let upgrade_price = 10 * upgrade_count;
    document.getElementById("upgrade1").value = upgrade_price;
    if(user_Points >= 15)
    {
        click_Power++;
    }
    else
    {
        console.warn("Points < 15");
    }
}

function upgrade2_Handler()
{
let user_Points = Number(document.getElementById("points").innerText);
if(user_Points >=30)
{
    upgrade2_count++;
    let user_Points = document.getElementById("points").innerText = user_Points - 30;
}
}

const 

function passive_income()
{
    console.log("test");
    let points = document.getElementById("points").innerText;
    points += 1 * upgrade2_count;
    document.getElementById("points").innerText += 1 * upgrade2_count;
}

setInterval(passive_income,1000);
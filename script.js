let arr = [1,2,3,4,5,6,7,8,9];
/*
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
*/

/*
let i = 0;
while(1 < arr.length)
{
    console.log(arr[i]);
    i++;
}
*/

/*
let i = 0
while(true)
{
    i++
    console.log(i);
    if(i == 21)
    {
        break; 
    }
}
*/

/*
let i = 0
while(true)
    {
        console.log(i);
        if(i == 10)
        {
            i++;
            continue;
        }

        if(i => 21)
        {
            break; 
        }
        console.log(i);
        i++;
    }
*/


let user = true;
let array = [];
while(user)
{
    let x = parseFloat (prompt("Enter number"));
    console.log()
    if(x < 0)
    {
        user = false;
        continue;
    }
    array.push(x)
}
console.log(array);

let result = 0;
for(let i = 0; i < array.length; i++)
{
    result += array[i];
}
result /= array.length;
console.log(result);
//result = result / array.length;
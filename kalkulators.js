let a = 0;
let b = 0;
let sym;
let result = 0;

while(true)
{
    a = parseFloat(prompt("Enter a: "));
    b = parseFloat(prompt("Enter b: "));
    if(typeof(a) == NaN || typeof(B) == NaN){
        alert("A or B is NaN");
        continue;
    }
    sym = prompt("Enter operation: ");
    switch (sym)
    {
        case"+":
         result = a + b;
        break;
        case"-":
         result = a - b;
        break;
        case"*":
         result = a * b;
        break;
        case"/":
        if (b == 0)
         result = a / b;
        break;
        case"**"
         result = a ** b;
        break;
    }
    alert("Result: " +result);
    let temp = prompt("Continue? [Y/N]: ")
    if (temp.toLowerCase() == "n")
    {
        break;
    }
}
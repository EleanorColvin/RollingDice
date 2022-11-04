function initialize()
{
    randNumOutput = document.getElementById("rndnum");
    generateRandomNumber();
}
function generateRandomNumber()
{
    rndNumber = Math.random();
    rndNumber*=10;
    rndNumber = parseInt(rndNumber);
    display();
}
function display()
{
    randNumOutput.innerHTML = rndNumber;
}

const buttonEl = document.getElementById('myButton');
buttonEl.onclick = onButtonClicked;

function onButtonClicked(){
    const inputEl = document.getElementById("dateInput");
    //console.log(inputEl.value);
    const userDate = new date(inputEl.value);

    const messageEl = document.getElementById('messagep');
    messageEl.innerHTML = userDate.toLocaleString();
}
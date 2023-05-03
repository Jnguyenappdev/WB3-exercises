//design and implement a web page that tells you how far away in days you will leave
//      for a trip. be wary of the off by 1 issue

const buttonEl = document.getElementById('myButton');
buttonEl.onclick = onButtonClicked;

function onButtonClicked(){
    const inputEl = document.getElementById("dateInput");
    //console.log(inputEl.value);

    let startDate = new Date ();
    let endDate = new Date(inputEl.value);

    let msec_per_day = 1000 * 60 * 60 * 24;
    let elapsedMilliseconds = startDate.getTime() - endDate.getTime();
    let dayDiff = Math.abs(elapsedMilliseconds / msec_per_day);
    let numDays = Math.round(dayDiff) + 1 ;

    const messageEl = document.getElementById('messaged');
    messageEl.innerHTML = `Your trip is in ${numDays} days!`


}
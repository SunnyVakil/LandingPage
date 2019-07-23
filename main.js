// Selecting DOM Elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');

//Time
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM' ;

    hour = hour % 12  || 12;

    time.innerHTML = `
${hour} <span> : </span> ${addZero(minute)} <span> : </span> ${addZero(seconds)} ` ;

setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n , 10) < 10 ? '0' : ' ') +n ;
}

    //Set Background and Greeting Based on Time

    function setThings() {
        let today = new Date();
        let hour = today.getHours();

        if(hour < 12){
            document.body.style.backgroundImage = "url('./images/morning.jpg')";
            document.body.style.backgroundSize = "cover";
            greeting.textContent = 'Good Morning ,'
        } else if(hour < 18){
            document.body.style.backgroundImage = "url('./ images / afternoon.jpg')";
            document.body.style.backgroundSize = "cover";
            greeting.textContent = 'Good Afternoon ,'
        }else {
            document.body.style.backgroundImage = "url('./images/evening.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.color = "#f5f5f1";

            greeting.textContent = 'Good Evening ,'
        }
    }

    //get Name

    function getName(){
        if(localStorage.getItem('name') === null){
            name.textContent = '(Enter Name)';
        } else
        {
            name.textContent  =localStorage.getItem('name');
        }
    }

    //setName

    function setName(e){
        if(e.type === 'keypress'){
            //use key code for enter key
            if(e.keyCode == 13){
                localStorage.setItem('name',e.target.innerText);
                name.blur();
            }
        }else{
            localStorage.setItem('name', e.target.innerText);
        }

}



name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);

//call the function
showTime();
setThings();
getName();
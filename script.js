document.addEventListener("DOMContentLoaded",()=>{

        const message = document.getElementById("message");
        const send = document.getElementById("send");

        message.focus();

        send.onclick = () => {
                option = document.createElement("option");
                option.innerHTML = `me: ${message.value}`;
                list.appendChild(option);
                list.selectedIndex = list.options.length - 1;
                message.value='';
        }

        const ENTER = 13;
        message.onkeyup = (event) => {
                if(ENTER === event.keyCode){
                        send.click()
                }
        }
})

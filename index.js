const input = document.querySelector("form textarea"),
    counter = document.querySelector("form .counter"),
    maxLength = input.getAttribute("maxlength");
    input.onkeyup = ()=>{
      counter.innerText = maxLength - input.value.length;
    }
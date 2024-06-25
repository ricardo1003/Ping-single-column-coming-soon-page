const inputElement = document.getElementsByTagName("input")[0]
const sendButtonElement = document.getElementsByTagName("button")[0]
const formElement = document.getElementsByTagName("form")[0]
const labelElement = document.getElementsByTagName("label")[0]

sendButtonElement.addEventListener("click", () =>{
    if (inputElement.value.trim() === ""){
        inputElement.focus()
        formElement.classList.add("invalidForm")
        inputElement.classList.add("invalidInput")
        labelElement.classList.add("invalidLabel")
    }
})
formElement.addEventListener("input", ()=>{
    let validInputVerifier = inputElement.value.trim().indexOf(".com") !== -1 && inputElement.value.trim().indexOf("@") !== -1
    if (inputElement.value.trim() !== "" && validInputVerifier){
        formElement.classList.remove("invalidForm")
        inputElement.classList.remove("invalidInput")
        labelElement.classList.remove("invalidLabel")
        sendButtonElement.type = "submit"
    }

});

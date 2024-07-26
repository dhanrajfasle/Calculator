let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; // Initialize as an empty string
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = ""; // Reset string in case of error
            }
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});

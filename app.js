let clicks = 0;
let whole_number = "";

function pressKey(number) {
    const inputbar = document.getElementById('input');

    whole_number += number.toString();
    inputbar.value += "•";
    clicks++;

    console.log(whole_number);
    console.log(clicks);

    if (clicks === 4) {
        if (whole_number !== "2503") {
            inputbar.value = "неверна";
            inputbar.id = 'incorrect';
            setTimeout(() => {
                inputbar.value = "";
                inputbar.id = "input";
            }, 1500);

            clicks = 0;
            whole_number = "";
        } else {
            inputbar.value = "верна";
            inputbar.id = 'correct';
            setInterval(1500)
            window.location.replace("./second_menu/")
        }
    }

    console.log("Нажата кнопка:", number);
}
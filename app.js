let clicks = 0;
let whole_number = "";

function pressKey(number) {
  const inputbar = document.getElementById("input");

  whole_number += number.toString();
  inputbar.value += "•";
  clicks++;

  console.log(whole_number);
  console.log(clicks);

  if (clicks === 4) {
    if (whole_number !== "2503") {
      inputbar.value = "неверна";
      inputbar.id = "incorrect";
      setTimeout(() => {
        inputbar.value = "";
        inputbar.id = "input";
      }, 1500);

      clicks = 0;
      whole_number = "";
    } else {
      inputbar.value = "верна";
      inputbar.id = "correct";
      setTimeout(() => {
        window.location.href = "second_menu/index.html";
      }, 1000);
    }
  }

  console.log("Нажата кнопка:", number);
}

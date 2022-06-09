const list = document.getElementById("list");
const btn = document.querySelector("#btn");
const arr = [
  {
    text: "Первый таск",
    done: false,
  },

  {
    text: "Второй таск",
    done: false,
  },

  {
    text: "Третий таск",
    done: false,
  },

  {
    text: "Четвертый таск",
    done: false,
  },

  {
    text: "Пятый таск",
    done: false,
  },
];

function render(arr) {
  list.textContent = "";
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    // const p = document.createElement("p");
    div.textContent = arr[i].text;
    const check_button = document.createElement("input");
    check_button.type = "checkbox";
    check_button.id = "check";
    check_button.checked = arr[i].done;
    check_button.addEventListener("click", () => {
      checkTodo(i);
      div.classList.add("Выполнено");
    });

    div.append(check_button);
    list.append(div);

    const delete_button = document.createElement("button");
    delete_button.textContent = "Х";
    delete_button.id = "delete";
    delete_button.addEventListener("click", () => {
      remove(i);
    });
    div.append(delete_button);
  }
}
function remove(index) {
  if (index >= 0) {
    arr.splice(index, 1);
    render(arr);
  }
}

function addTodo(text) {
  arr.push({
    text: text,
    done: true,
  });
  render(arr);
}

const button_add = document.getElementById("result");
const input_add = document.getElementById("lis");
button_add.addEventListener("click", () => {
  if (input_add.value !== "") {
    addTodo(input_add.value);
    input_add.value = "";
  }
});

const writeBtn = document.querySelector(".write-btn");
const field = document.querySelector(".field");
const td = document.querySelectorAll("td");
const create = document.querySelector(".create");
const update = document.querySelector(".update");

// create
const cTitle = document.querySelector("#create-title");
const cDescription = document.querySelector("#create-description");
const cSelect = document.querySelector("#create-select");
const cStoreBtn = document.querySelector("#create-store");
const cCancelBtn = document.querySelector("#create-cancel");

//update

const uTitle = document.querySelector("#update-title");
const uDescription = document.querySelector("#update-description");
const uSelect = document.querySelector("#update-select");
const uEditBtn = document.querySelector("#update-edit");
const uDeleteBtn = document.querySelector("#update-delete");
const uCloseBtn = document.querySelector("#update-close");

const uStoreBtn = document.querySelector("#update-store");
const uCancelBtn = document.querySelector("#update-cancel");

const icons = document.querySelector(".icons");
const btns = document.querySelector(".btns");
//right
const right = document.querySelector(".right");

//체크박스들
const todo = document.querySelector("#todo");
const confer = document.querySelector("#confer");
const idea = document.querySelector("#idea");
const shop = document.querySelector("#shop");

let lastItem;
let lastLi;
let lastLi2;

let isStart = false;

const list_array = [];

field.classList.add("d-none");

function reset() {
  todo.checked = true;
  confer.checked = true;
  idea.checked = true;
  shop.checked = true;

  td.forEach((item) => {
    item.firstChild.childNodes.forEach((item2) => {
      item2.remove();
    });
  });

  right.innerHTML = "";
}

writeBtn.addEventListener("click", (e) => {
  if (isStart) {
    reset();
    return;
  }
  isStart = true;
  field.classList.remove("d-none");
});

td.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    create.classList.remove("d-none");
    lastItem = e.target;
  });
});

cStoreBtn.addEventListener("click", (e) => {
  console.log(cTitle.value);
  if (cTitle.value === "" || cDescription.value === "") {
    alert("입력란을 다 채워주세요.");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("label");
  li.textContent = cTitle.value;

  if (cSelect.value === "todo") {
    li.style.backgroundColor = "rgba(57, 206, 180, 1)";
  } else if (cSelect.value === "confer") {
    li.style.backgroundColor = "rgba(255, 99, 71, 1)";
  } else if (cSelect.value === "idea") {
    li.style.backgroundColor = "rgba(79, 118, 219, 1)";
  } else {
    li.style.backgroundColor = "rgba(149, 165, 166, 1)";
  }
  console.log(li);

  console.log(lastItem.firstChild);

  li.dataset.description = cDescription.value;
  li.dataset.select = cSelect.value;

  list_array.push(li);

  lastItem.firstChild.append(li);

  const li2 = document.createElement("li");
  const input = document.createElement("input");
  input.type = "radio";
  li2.append(input);
  li2.append(cTitle.value);
  li2.classList.add("label");
  if (cSelect.value === "todo") {
    li2.style.backgroundColor = "rgba(57, 206, 180, 1)";
  } else if (cSelect.value === "confer") {
    li2.style.backgroundColor = "rgba(255, 99, 71, 1)";
  } else if (cSelect.value === "idea") {
    li2.style.backgroundColor = "rgba(79, 118, 219, 1)";
  } else {
    li2.style.backgroundColor = "rgba(149, 165, 166, 1)";
  }

  li2.addEventListener("click", (e) => {
    alert("삭제되었습니다");
    li.remove();
    e.target.remove();
  });

  li.addEventListener("click", (e) => {
    e.stopPropagation();

    update.classList.remove("d-none");
    uTitle.value = e.target.textContent;
    uTitle.disabled = true;
    uDescription.value = e.target.dataset.description;
    uDescription.disabled = true;
    uSelect.value = e.target.dataset.select;
    uSelect.disabled = true;
    lastLi = e.target;
    lastLi2 = li2;
  });

  li2.dataset.description = cDescription.value;
  li2.dataset.select = cSelect.value;

  lastLi2 = li2;
  right.append(li2);

  cTitle.value = "";
  cDescription.value = "";

  alert("계획이 추가되었습니다.");
});
//create

console.log(cSelect.value);
cSelect.addEventListener("change", (e) => {
  console.log(cSelect.value);
});

cCancelBtn.addEventListener("click", (e) => {
  create.classList.add("d-none");
  cSelect.value = "todo";
  cTitle.value = "";
  cDescription.value = "";
});

// icons 버튼
uCloseBtn.addEventListener("click", (e) => {
  update.classList.add("d-none");
});

uEditBtn.addEventListener("click", (e) => {
  uTitle.disabled = false;
  uDescription.disabled = false;
  uSelect.disabled = false;

  btns.classList.remove("d-none");
  icons.classList.add("d-none");
});

uDeleteBtn.addEventListener("click", (e) => {
  alert("삭제되었습니다.");
  lastLi.remove();
  lastLi2.remove();
  update.classList.add("d-none");
});

//수정아이콘 눌렀을시에 버튼.
uCancelBtn.addEventListener("click", (e) => {
  update.classList.add("d-none");
  btns.classList.add("d-none");
  icons.classList.remove("d-none");
});

uStoreBtn.addEventListener("click", (e) => {
  lastLi.textContent = uTitle.value;
  lastLi.dataset.description = uDescription.value;
  lastLi.dataset.select = uSelect.value;

  const input = document.createElement("input");
  input.type = "radio";
  lastLi2.textContent = "";
  lastLi2.append(input);
  lastLi2.append(uTitle.value);
  lastLi2.dataset.description = uDescription.value;
  lastLi2.dataset.select = uSelect.value;

  if (uSelect.value === "todo") {
    lastLi.style.backgroundColor = "rgba(57, 206, 180, 1)";
    lastLi2.style.backgroundColor = "rgba(57, 206, 180, 1)";
  } else if (uSelect.value === "confer") {
    lastLi.style.backgroundColor = "rgba(255, 99, 71, 1)";
    lastLi2.style.backgroundColor = "rgba(255, 99, 71, 1)";
  } else if (uSelect.value === "idea") {
    lastLi.style.backgroundColor = "rgba(79, 118, 219, 1)";
    lastLi2.style.backgroundColor = "rgba(79, 118, 219, 1)";
  } else {
    lastLi.style.backgroundColor = "rgba(149, 165, 166, 1)";
    lastLi2.style.backgroundColor = "rgba(149, 165, 166, 1)";
  }

  alert("저장되었습니다.");
  update.classList.add("d-none");
});

todo.checked = true;
confer.checked = true;
idea.checked = true;
shop.checked = true;

todo.addEventListener("change", (e) => {
  console.log(e.target.checked);

  td.forEach((item) => {
    item.firstChild.childNodes.forEach((item2) => {
      if (item2.dataset.select === "todo") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });

    right.childNodes.forEach((item2) => {
      if (item2.dataset.select === "todo") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });
  });
});
confer.addEventListener("change", (e) => {
  console.log(e.target.checked);

  td.forEach((item) => {
    item.firstChild.childNodes.forEach((item2) => {
      if (item2.dataset.select === "confer") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });

    right.childNodes.forEach((item2) => {
      if (item2.dataset.select === "confer") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });
  });
});
idea.addEventListener("change", (e) => {
  console.log(e.target.checked);

  td.forEach((item) => {
    item.firstChild.childNodes.forEach((item2) => {
      if (item2.dataset.select === "idea") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });

    right.childNodes.forEach((item2) => {
      if (item2.dataset.select === "idea") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });
  });
});
shop.addEventListener("change", (e) => {
  console.log(e.target.checked);

  td.forEach((item) => {
    item.firstChild.childNodes.forEach((item2) => {
      if (item2.dataset.select === "shop") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });

    right.childNodes.forEach((item2) => {
      if (item2.dataset.select === "shop") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });
  });
});
todo.addEventListener("change", (e) => {
  console.log(e.target.checked);

  td.forEach((item) => {
    item.firstChild.childNodes.forEach((item2) => {
      if (item2.dataset.select === "todo") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });

    right.childNodes.forEach((item2) => {
      if (item2.dataset.select === "todo") {
        if (e.target.checked) {
          item2.classList.remove("d-none");
        } else {
          item2.classList.add("d-none");
        }
      }
    });
  });
});

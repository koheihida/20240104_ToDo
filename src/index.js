// import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // 完了ボタンの実装
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    moveTarget.firstElementChild.appendChild(backButton);

    document.getElementById("complete-list").appendChild(moveTarget);
  });
  // 削除ボタンの実装
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  console.log(completeButton);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);

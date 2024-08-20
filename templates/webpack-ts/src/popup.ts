import { myBoard } from "./breadboard/board";

const button = document.getElementById("runButton");
const output = document.getElementById("boardOutput");

button?.addEventListener("click", async () => {
  const boardResult = await myBoard({
    message: "Hello from Breadboard!",
  });
  output!.innerHTML = JSON.stringify(boardResult);
});

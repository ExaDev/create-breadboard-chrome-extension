import { myBoard } from "./breadboard/board";

const form = document.getElementById("breadboardRunner");
const input = document.getElementById("textInput");
const output = document.getElementById("textOutput");

form?.addEventListener("submit", async () => {
  const boardResult = await myBoard({
    message: input?.textContent!,
  });
  output!.innerHTML = JSON.stringify(boardResult);
});

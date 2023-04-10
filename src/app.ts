import greet from "./greet.ts";
const div: HTMLDivElement = document.getElementById("app") as HTMLDivElement;
div.innerHTML = greet();

import { type JSXElement } from "solid-js";

import KoreaFlag from "./KoreaFlag";
import GithubIco from "./GithubIco";

export default function Header(): JSXElement {
  return (
    <header class="w-full">
      <div id="header" class="flex flex-col" style="height: 15vh;">
        <div
          id="linksIcons"
          class="flex justify-end items-center px-10"
          style="height: 75%;"
        >
          <GithubIco />
        </div>
        <div
          id="daysBorder"
          class="self-center flex justify-between items-center px-3"
          style="width: 95%; height: 40%; background: #7446D7; border-radius: 15px;"
        >
          <div></div>
          <KoreaFlag />
        </div>
      </div>
    </header>
  );
}

import { type JSXElement } from "solid-js";

import GithubSvg from "../assets/github-mark.svg";

export default function GithubIco(): JSXElement {
  return (
    <a
      href="https://github.com/rafailmdzdv"
      target="_blank"
      class="transition ease-in delay-300 hover:opacity-80"
    >
      <GithubSvg />
    </a>
  );
}

import { type JSXElement } from "solid-js";

export default function StudyDayButton<P extends { dayTitle: string }>(
  props: P,
): JSXElement {
  return (
    <div
      class="flex justify-center bg-white items-center w-9/12 h-16"
      style="border-radius: 19px;"
    >
      {props.dayTitle}
    </div>
  );
}

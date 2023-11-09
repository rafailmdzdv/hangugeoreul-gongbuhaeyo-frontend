import { type JSXElement } from "solid-js";

export default function StudyDayButton<P extends { dayTitle: string }>(
  props: P,
): JSXElement {
  return (
    <div class="flex justify-center items-center border-b-2 border-black w-full h-12">
      {props.dayTitle}
    </div>
  );
}

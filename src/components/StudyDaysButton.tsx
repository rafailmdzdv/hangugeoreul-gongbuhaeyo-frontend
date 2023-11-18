import { type JSXElement, JSX } from "solid-js";
import { StudyDay } from "../interfaces";
import { SetStoreFunction } from "solid-js/store";

export default function StudyDayButton<
  P extends {
    day?: StudyDay;
    daySetter?: SetStoreFunction<StudyDay>;
    message?: string;
  },
>(props: P): JSXElement {
  const setDay: JSX.EventHandlerUnion<HTMLElement, MouseEvent> = (_: Event) => {
    if (props.day && props.daySetter) props.daySetter(props.day);
  };

  return (
    <div
      class="flex justify-center bg-white items-center w-9/12 h-16"
      style="border-radius: 19px;"
      onClick={setDay}
    >
      {props.day ? props.day.title : props.message}
    </div>
  );
}

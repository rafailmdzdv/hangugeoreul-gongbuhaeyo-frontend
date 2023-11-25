import { type JSXElement, JSX, createSignal } from "solid-js";

import { StudyDay } from "../interfaces";
import CheckedIco from "./CheckedIco";
import XmarkIco from "./XmarkIco";

export default function DayBorder<P extends { day: StudyDay }>(
  props: P,
): JSXElement {
  const [isRight, setIsRight] = createSignal<boolean>(false);
  const [currentWordIndex, setCurrentWordIndex] = createSignal<number>(0);
  const [inputValue, setInputValue] = createSignal<string>("");

  // Handle input
  const handleKoreanInput: JSX.EventHandlerUnion<HTMLElement, Event> = (
    e: Event,
  ): void => {
    setInputValue(e.target.value);
    if (props.day.words[currentWordIndex()].meaning == inputValue()) {
      setIsRight(true);
      setTimeout(() => {
        setInputValue("");
        e.target.value = inputValue();
        if (currentWordIndex() == props.day.words.length - 1) {
          setCurrentWordIndex(0);
          return;
        }
        setCurrentWordIndex(currentWordIndex() + 1);
      }, 1000);
    } else {
      setIsRight(false);
    }
  };

  return (
    <div
      id="border"
      class="flex justify-center items-center"
      style="background: #D9B9ED; border-radius: 19px; width: 52%; height: 70%;"
    >
      <div
        id="borderForeground"
        class="flex justify-between items-center px-10"
        style="background: #E5DCF8; border-radius: 19px; width: 90%; height: 90%; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
      >
        <div
          id="borderIO"
          class="bg-white flex flex-col items-center"
          style="border-radius: 10px; width: 50%; height: 90%;"
        >
          {props.day.id ? (
            <>
              <div
                id="ruTranslation"
                class="w-5/6 flex items-end"
                style="min-height: 50%;"
              >
                <h2
                  class="w-full break-words text-center whitespace-normal"
                  style="font-size: 1.5em;"
                >
                  {props.day.words[currentWordIndex()].translation}
                </h2>
              </div>
              <div id="koInput" class="w-5/6 h-1/2 mt-5 flex items-start">
                <input
                  class="border-black mt-100 border-2 w-full h-2/6 rounded-md text-3xl text-center"
                  type="text"
                  onChange={handleKoreanInput}
                />
              </div>
            </>
          ) : null}
        </div>
        <div
          id="borderPic"
          class="bg-white self-start mt-6 flex justify-center items-center"
          style="border-radius: 10px; width: 40%; height: 30%;"
        >
          {props.day.id ? (
            inputValue() ? (
              isRight() ? (
                <CheckedIco />
              ) : (
                <XmarkIco />
              )
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
}

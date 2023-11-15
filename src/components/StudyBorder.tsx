import axios from "axios";
import {
  type Component,
  type JSXElement,
  type Setter,
  For,
  createResource,
  createSignal,
} from "solid-js";
import StudyDayButton from "./StudyDaysButton";

interface Word {
  id: string;
  meaning: string;
  translation: string;
}

interface StudyDay {
  id: string;
  title: string;
  words: Word[];
}

const StudyBorder: Component = (): JSXElement => {
  const [days] = createResource<StudyDay[]>(getDaysFromBackend);
  return (
    <div
      class="flex justify-start h-screen m-auto my-14 gap-36"
      style="width: 95%"
    >
      <div
        id="daysBorder"
        class="overflow-y-scroll flex flex-col flex-wrap items-center py-6 gap-y-7"
        style="background: #E5DCF8; border-radius: 10px; width: 20%; height: 70%;"
      >
        {days.loading ? (
          <StudyDayButton dayTitle="Loading days..." />
        ) : days.error ? (
          <StudyDayButton dayTitle="Something went wrong..." />
        ) : days() ? (
          <For
            each={days()?.sort((a, b): number => {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            })}
          >
            {(day) => <StudyDayButton dayTitle={day.title} />}
          </For>
        ) : null}
      </div>
      <div
        id="border"
        style="background: #D9B9ED; border-radius: 19px; width: 52%; height: 70%;"
      ></div>
    </div>
  );
};

const getDaysFromBackend = async (): Promise<StudyDay[]> => {
  return await axios.get("http://127.0.0.1:8000/days/all/").then((response) => {
    return response.data;
  });
};

export default StudyBorder;

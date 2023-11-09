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
    <div class="flex justify-center items-center w-screen h-screen m-auto">
      <div id="border" class="bg-white border-black border-2 w-5/6 h-5/6">
        <div
          id="daysBorder"
          class="bg-white border-r-black border-r-2 self-start w-1/6 h-full overflow-y-scroll flex flex-col flex-wrap items-start"
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
      </div>
    </div>
  );
};

const getDaysFromBackend = async (): Promise<StudyDay[]> => {
  return await axios.get("http://127.0.0.1:8000/days/all/").then((response) => {
    return response.data;
  });
};

export default StudyBorder;

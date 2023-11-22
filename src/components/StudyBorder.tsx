import axios from "axios";
import { type Component, type JSXElement, For, createResource } from "solid-js";
import { createStore } from "solid-js/store";

import { BACKEND_ENDPOINT } from "..";
import { type StudyDay } from "../interfaces";
import StudyDayButton from "./StudyDaysButton";
import DayBorder from "./DayBorder";

const StudyBorder: Component = (): JSXElement => {
  const [days] = createResource<StudyDay[]>(getDaysFromBackend);
  const [selectedDay, setSelectedDay] = createStore<StudyDay>({
    id: "",
    title: "",
    words: [{ id: "", meaning: "", translation: "" }],
  });

  return (
    <div
      class="flex justify-start h-screen m-auto my-14 gap-36"
      style="width: 95%"
    >
      <div
        id="daysBorder"
        class="overflow-y-scroll flex flex-col flex-wrap items-center py-6 gap-y-7 ml-4"
        style="background: #E5DCF8; border-radius: 10px; width: 20%; height: 70%;"
      >
        {days.loading ? (
          <StudyDayButton message="Loading days..." />
        ) : days.error ? (
          <StudyDayButton message="Something went wrong..." />
        ) : days() ? (
          <For
            each={days()?.sort((a, b): number => {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            })}
          >
            {(day) => <StudyDayButton day={day} daySetter={setSelectedDay} />}
          </For>
        ) : null}
      </div>
      <DayBorder day={selectedDay} />
    </div>
  );
};

const getDaysFromBackend = async (): Promise<StudyDay[]> => {
  return await axios
    .get(`http://${BACKEND_ENDPOINT}/days/all/`)
    .then((response) => {
      return response.data;
    });
};

export default StudyBorder;

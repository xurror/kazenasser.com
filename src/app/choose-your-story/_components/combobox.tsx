"use client";

import { classNames } from "@/libs/utils";
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Input from "./input";

export default function ComboBox() {
  const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selected}
      onChange={(value) => setSelected(value as any)}
      onClose={() => setQuery("")}
    >
      <div className="relative">
        <Input
          as={ComboboxInput}
          aria-label="Assignee"
          displayValue={(person) => (person as any)?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronUpDownIcon className="size-4 fill-current/50 dark:group-data-[hover]:fill-white" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        // anchor="bottom"
        transition
        className={classNames(
          "absolute z-10 mt-1 max-h-56 w-[var(--input-width)] overflow-auto",
          "rounded-xl bg-white dark:bg-zinc-800 p-1 shadow-lg ring-1 dark:ring-white/5 ring-black/5 focus:outline-none",
          "data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        )}
      >
        {filteredPeople.map((person) => (
          <ComboboxOption
            key={person.id}
            value={person}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-zinc-900/10 dark:data-[focus]:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-current group-data-[selected]:visible" />
            <div className="text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              {person.name}
            </div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}

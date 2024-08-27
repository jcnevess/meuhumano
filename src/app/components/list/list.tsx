"use client";

import { PetFilter, Pet } from "@/app/models/models";
import { ArrowLeft, Filter, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ListService from "./list.service";
import { useClickOutside } from "@/app/lib/hooks";
import Link from "next/link";

function prepareString(input: string): string {
  return input.replaceAll("_", " ");
}

export default function List() {
  const [availableFilters, setAvailableFilters] = useState<PetFilter[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<PetFilter[]>([]);
  const [filterResults, setFilterResults] = useState<PetFilter[]>([]);
  const [showFilterResults, setShowFilterResults] = useState(false);
  const [filteredProfiles, setFilteredProfiles] = useState<Pet[]>([]);

  const searchResultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listService = ListService.getInstance();

    listService
      .getFilteredProfiles(appliedFilters)
      .then((profiles) => setFilteredProfiles(profiles));
  }, [appliedFilters]);

  useEffect(() => {
    const listService = ListService.getInstance();

    listService
      .getAvailableFilters()
      .then((filters) => setAvailableFilters(filters));
  }, []);

  useClickOutside(searchResultsRef, handleClickOutside);

  function handleClickOutside() {
    setShowFilterResults(false);
  }

  function filterEntries(evt: React.ChangeEvent<HTMLInputElement>) {
    const query = (evt.target.value ?? "").toLocaleLowerCase();

    setFilterResults(
      availableFilters.filter(
        (fltr) => fltr.value.toLocaleLowerCase().search(query) >= 0
      )
    );
    setShowFilterResults(true);
  }

  function addFilter(fltr: PetFilter) {
    if (appliedFilters.filter((f) => f.value === fltr.value).length <= 0) {
      setAppliedFilters([...appliedFilters, fltr]);
    }
    setShowFilterResults(false);
  }

  function removeFilter(fltr: PetFilter) {
    setAppliedFilters(
      appliedFilters.filter((applFltr) => applFltr.value !== fltr.value)
    );
  }

  return (
    <div>
      <div className="header bg-softgreen flex items-center px-2 py-3 *:font-bold gap-2">
        <div className="icon-back">
          <ArrowLeft />
        </div>
        <div className="title text-lg">Meu Humano</div>
      </div>
      <div className="content px-4 flex flex-col gap-4 mt-4 mb-2 relative">
        <div className="filter-controls relative group">
          <input
            type="text"
            name="filter"
            id="filter"
            placeholder="Editar filtros"
            autoComplete="off"
            className="peer border border-lightergray_ border-solid rounded-md w-full p-1
          placeholder:text-lightgray_ placeholder:text-sm
          focus-visible:outline-softgreen"
            onChange={(evt) => filterEntries(evt)}
          />
          <div
            className="filter-icon absolute top-1/2 right-1 -translate-y-1/2 scale-75
         text-lightgray_ fill-lightgray_
         group-focus-within:text-softgreen group-focus-within:fill-softgreen"
          >
            <Filter fill="inherit" />
          </div>
        </div>

        {showFilterResults && (
          <div
            className="filter-results absolute flex flex-col bg-gray-200 z-10 top-[35px] max-h-[25vh] w-[90%]
                      *:py-1 *:px-2 *:text-sm cursor-pointer overflow-scroll rounded"
            ref={searchResultsRef}
          >
            {filterResults.map((fltr, index) => (
              <div
                className="filter-result hover:bg-lightergray_ capitalize"
                key={index}
                onClick={() => addFilter(fltr)}
              >
                {prepareString(fltr.value)}
              </div>
            ))}
          </div>
        )}

        <div
          className="applied-filters flex flex-wrap place-content-center gap-2
                    *:inline-block  *:text-black *:bg-lightergray_ 
                    *:rounded-xl *:px-3 *:text-[0.9rem] *:capitalize"
        >
          {appliedFilters.map((applFilter, index) => (
            <div key={index} className="applied-filter relative group">
              {prepareString(applFilter.value)}
              <span
                className="close absolute scale-[65%] -top-[1px] right-[1px] 
          rounded-full bg-white bg-opacity-80 hidden group-hover:inline-block"
              >
                <X onClick={() => removeFilter(applFilter)}></X>
              </span>
            </div>
          ))}
        </div>
        <div className="filter-results flex flex-col gap-2 flex-grow">
          {filteredProfiles.map((result, index) => (
            <Link
              className="filter-result flex items-center gap-4"
              key={index}
              href={`/profile?id=${result.id}`}
            >
              <picture className="result-image w-[64px] h-[64px] overflow-hidden rounded-full">
                <img
                  src={result.mediaList[result.coverIndex].uri}
                  alt={result.name}
                />
              </picture>
              <div className="result-details grow">
                <div className="result-name font-bold text-lg">
                  {result.name}
                </div>
                <div className="result-shelter">de {result.shelter}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

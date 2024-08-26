"use client";

import styles from "./survey.module.css";
import { useState } from "react";
import { Sigmar_One } from "next/font/google";
import { PetFilter } from "@/app/models/models";
import filterDatabase from "@/app/lib/utils";
import { filterAdded } from "@/app/lib/features/filterSlice";
import { useAppDispatch, useAppStore } from "@/app/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sigmarone = Sigmar_One({ weight: "400", subsets: ["latin"] });

const steps = [
  { id: "ANIMAL", title: "Eu quero adotar um" },
  { id: "GENDER", title: "Tenho preferência por" },
  { id: "SIZE", title: "Quero um animal de porte" },
  { id: "AGE_RANGE", title: "Quanto a idade, prefiro que o animal tenha" },
  { id: "FUR_HEIGHT", title: "Meu animal ideal tem o pelo" },
  { id: "CASTRATED", title: "Quanto à castração, prefiro um animal" },
  { id: "MOOD", title: "Eu prefiro um animal mais" },
];

export default function Survey() {
  const [currentStep, setCurrentStep] = useState(0);

  const dispatch = useAppDispatch();
  const store = useAppStore();

  const router = useRouter();

  const [appliedFilters, setAppliedFilters] = useState<PetFilter[]>([]);

  function handleNextStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function handleSubmit() {
    router.push("/list");
  }

  function handleAnimalSelection(event: React.MouseEvent<HTMLInputElement>) {
    dispatch(
      filterAdded({
        key: "animal",
        value: (event.target as HTMLInputElement).value,
      })
    );

    handleNextStep();
  }

  function handleGenderSelection(event: React.MouseEvent<HTMLInputElement>) {
    dispatch(
      filterAdded({
        key: "gender",
        value: (event.target as HTMLInputElement).value,
      })
    );

    handleNextStep();
  }

  function handleSizeSelection(event: React.MouseEvent<HTMLInputElement>) {
    dispatch(
      filterAdded({
        key: "size",
        value: (event.target as HTMLInputElement).value,
      })
    );

    handleNextStep();
  }

  function handleAgeSelection(event: React.MouseEvent<HTMLInputElement>) {
    dispatch(
      filterAdded({
        key: "age_range",
        value: (event.target as HTMLInputElement).value,
      })
    );

    handleNextStep();
  }

  function handleFurHeightSelection(event: React.MouseEvent<HTMLInputElement>) {
    dispatch(
      filterAdded({
        key: "fur_height",
        value: (event.target as HTMLInputElement).value,
      })
    );

    handleNextStep();
  }

  function handleCastratedSelection(event: React.MouseEvent<HTMLInputElement>) {
    dispatch(
      filterAdded({
        key: "castrated",
        value: (event.target as HTMLInputElement).value,
      })
    );

    handleNextStep();
  }

  function handleMoodSelection(event: React.MouseEvent<HTMLInputElement>) {
    dispatch(
      filterAdded({
        key: "mood",
        value: (event.target as HTMLInputElement).value,
      })
    );

    handleSubmit();
  }

  function isFilterApplied(key: string, value: string) {
    return (
      appliedFilters.filter(
        (applFlt) => applFlt.key === key && applFlt.value === value
      ).length > 0
    );
  }

  function prepareString(input: string) {
    return input.replaceAll("_", " ");
  }

  store.subscribe(() => {
    setAppliedFilters(store.getState().filters.applied);
  });

  return (
    <div className={styles.container}>
      <h1 className={[sigmarone.className, styles.title].join(" ")}>
        meu
        <br />
        humano
      </h1>
      {steps[currentStep].id === "ANIMAL" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          {filterDatabase
            .filter((flt) => flt.key === "animal")
            .map((flt) => (
              <label
                key={flt.value}
                className={`
                ${styles.survey_option} 
                ${
                  isFilterApplied("animal", flt.value)
                    ? styles.option_checked
                    : ""
                }
              `}
              >
                <input
                  type="radio"
                  id={`animal_${flt.value}`}
                  name="animal"
                  value={flt.value}
                  onClick={handleAnimalSelection}
                  defaultChecked={isFilterApplied("animal", flt.value)}
                />
                {prepareString(flt.value)}
              </label>
            ))}
        </div>
      )}

      {steps[currentStep].id === "GENDER" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          {filterDatabase
            .filter((flt) => flt.key === "gender")
            .map((flt) => (
              <label
                key={flt.value}
                className={`${styles.survey_option} ${
                  isFilterApplied("gender", flt.value)
                    ? styles.option_checked
                    : ""
                }`}
              >
                <input
                  type="radio"
                  id={`gender_${flt.value}`}
                  name="gender"
                  value={flt.value}
                  onClick={handleGenderSelection}
                  defaultChecked={isFilterApplied("gender", flt.value)}
                />
                {prepareString(flt.value)}
              </label>
            ))}
        </div>
      )}

      {steps[currentStep].id === "SIZE" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          {filterDatabase
            .filter((flt) => flt.key === "size")
            .map((flt) => (
              <label
                key={flt.value.replaceAll(" ", "_")}
                className={`${styles.survey_option} ${
                  isFilterApplied("size", flt.value)
                    ? styles.option_checked
                    : ""
                }`}
              >
                <input
                  type="radio"
                  id={`size_${flt.value.replaceAll(" ", "_")}`}
                  name="size"
                  value={flt.value.replaceAll(" ", "_")}
                  onClick={handleSizeSelection}
                  defaultChecked={isFilterApplied("size", flt.value)}
                />
                {prepareString(flt.value)}
              </label>
            ))}
        </div>
      )}

      {steps[currentStep].id === "AGE_RANGE" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          {filterDatabase
            .filter((flt) => flt.key === "age_range")
            .map((flt) => (
              <label
                key={flt.value.replaceAll(" ", "_")}
                className={`${styles.survey_option} ${
                  isFilterApplied("age_range", flt.value)
                    ? styles.option_checked
                    : ""
                }
              }`}
              >
                <input
                  type="radio"
                  id={`age_range_${flt.value.replaceAll(" ", "_")}`}
                  name="age_range"
                  value={flt.value.replaceAll(" ", "_")}
                  onClick={handleAgeSelection}
                  defaultChecked={isFilterApplied("age_range", flt.value)}
                />
                {prepareString(flt.value)}
              </label>
            ))}
        </div>
      )}

      {steps[currentStep].id === "FUR_HEIGHT" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          {filterDatabase
            .filter((flt) => flt.key === "fur_height")
            .map((flt) => (
              <label
                key={flt.value.replaceAll(" ", "_")}
                className={`${styles.survey_option} ${
                  isFilterApplied("fur_height", flt.value)
                    ? styles.option_checked
                    : ""
                }
              }`}
              >
                <input
                  type="radio"
                  id={`fur_${flt.value.replaceAll(" ", "_")}`}
                  name="fur"
                  value={flt.value.replaceAll(" ", "_")}
                  onClick={handleFurHeightSelection}
                  defaultChecked={isFilterApplied("fur_height", flt.value)}
                />
                {prepareString(flt.value)}
              </label>
            ))}
        </div>
      )}

      {steps[currentStep].id === "CASTRATED" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          {filterDatabase
            .filter((flt) => flt.key === "castrated")
            .map((flt) => (
              <label
                key={flt.value}
                className={`${styles.survey_option} ${
                  isFilterApplied("castrated", flt.value)
                    ? styles.option_checked
                    : ""
                }
            }`}
              >
                <input
                  type="radio"
                  id={`castrated_${flt.value}`}
                  name="castrated"
                  value={flt.value}
                  onClick={handleCastratedSelection}
                  defaultChecked={isFilterApplied("castrated", flt.value)}
                />
                {prepareString(flt.value)}
              </label>
            ))}
        </div>
      )}

      {steps[currentStep].id === "MOOD" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          {filterDatabase
            .filter((flt) => flt.key === "mood")
            .map((flt) => (
              <label
                key={flt.value}
                className={`${styles.survey_option} ${
                  isFilterApplied("mood", flt.value)
                    ? styles.option_checked
                    : ""
                }
          }`}
              >
                <input
                  type="radio"
                  id={`mood_${flt.value}`}
                  name="mood"
                  value={flt.value}
                  onClick={handleMoodSelection}
                  defaultChecked={isFilterApplied("mood", flt.value)}
                />
                {prepareString(flt.value)}
              </label>
            ))}
        </div>
      )}

      <div className={styles.survey_controls}>
        <Link href="/list" className={styles.survey_button}>
          Ver Lista
        </Link>
      </div>
    </div>
  );
}

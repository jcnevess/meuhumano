"use client";

import styles from "./survey.module.css";
import { useState } from "react";
import { Sigmar_One } from "next/font/google";
import { PetFilter } from "@/app/models/models";
import filterDatabase from "@/app/utils/utils";

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

  const [formData, setFormData] = useState<{
    [step: string]: PetFilter | null;
  }>({
    animal: null,
    gender: null,
    size: null,
    age_range: null,
    fur_height: null,
    castrated: null,
    mood: null,
  });

  function handleNextStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function handlePreviousStep() {
    setCurrentStep((prevStep) => prevStep - 1);
  }

  function handleAnimalSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      animal: {
        key: "animal",
        value: (event.target as HTMLInputElement).value,
      },
    });

    handleNextStep();
  }

  function handleGenderSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      gender: {
        key: "gender",
        value: (event.target as HTMLInputElement).value,
      },
    });

    handleNextStep();
  }

  function handleSizeSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      size: {
        key: "size",
        value: (event.target as HTMLInputElement).value,
      },
    });

    handleNextStep();
  }

  function handleAgeSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      age_range: {
        key: "age_range",
        value: (event.target as HTMLInputElement).value,
      },
    });

    handleNextStep();
  }

  function handleFurHeightSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      fur_height: {
        key: "fur_height",
        value: (event.target as HTMLInputElement).value,
      },
    });

    handleNextStep();
  }

  function handleCastratedSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      castrated: {
        key: "castrated",
        value: (event.target as HTMLInputElement).value,
      },
    });

    handleNextStep();
  }

  function handleMoodSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      mood: {
        key: "mood",
        value: (event.target as HTMLInputElement).value,
      },
    });
  }

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
                  formData.animal?.key === "animal" &&
                  formData.animal.value === flt.value
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
                  defaultChecked={
                    formData.animal?.key === "animal" &&
                    formData.animal.value === flt.value
                  }
                />
                {flt.value}
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
                  formData.gender?.key === "gender" &&
                  formData.gender.value === flt.value
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
                  defaultChecked={
                    formData.gender?.key === "gender" &&
                    formData.gender.value === flt.value
                  }
                />
                {flt.value}
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
                  formData.size?.key === "size" &&
                  formData.size.value === flt.value
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
                  defaultChecked={
                    formData.size?.key === "size" &&
                    formData.size.value === flt.value
                  }
                />
                {flt.value}
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
                  formData.animal?.key === "age_range" &&
                  formData.animal.value === flt.value
                } ? styles.option_checked : ""
              }`}
              >
                <input
                  type="radio"
                  id={`age_range_${flt.value.replaceAll(" ", "_")}`}
                  name="age_range"
                  value={flt.value.replaceAll(" ", "_")}
                  onClick={handleAgeSelection}
                  defaultChecked={
                    formData.animal?.key === "age_range" &&
                    formData.animal.value === flt.value
                  }
                />
                {flt.value}
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
                  formData.fur_height?.key === "fur_height" &&
                  formData.fur_height.value === flt.value
                } ? styles.option_checked : ""
              }`}
              >
                <input
                  type="radio"
                  id={`fur_${flt.value.replaceAll(" ", "_")}`}
                  name="fur"
                  value={flt.value.replaceAll(" ", "_")}
                  onClick={handleFurHeightSelection}
                  defaultChecked={
                    formData.fur_height?.key === "fur_height" &&
                    formData.fur_height.value === "short"
                  }
                />
                {flt.value}
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
                  formData.castrated?.key === "castrated" &&
                  formData.castrated.value === flt.value
                } ? styles.option_checked : ""
            }`}
              >
                <input
                  type="radio"
                  id={`castrated_${flt.value}`}
                  name="castrated"
                  value={flt.value}
                  onClick={handleCastratedSelection}
                  defaultChecked={
                    formData.castrated?.key === "castrated" &&
                    formData.castrated.value === flt.value
                  }
                />
                {flt.value}
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
                  formData.mood?.key === "mood" &&
                  formData.mood.value === flt.value
                } ? styles.option_checked : ""
          }`}
              >
                <input
                  type="radio"
                  id={`mood_${flt.value}`}
                  name="mood"
                  value={flt.value}
                  onClick={handleMoodSelection}
                  defaultChecked={
                    formData.mood?.key === "mood" &&
                    formData.mood.value === flt.value
                  }
                />
                {flt.value}
              </label>
            ))}
        </div>
      )}

      <div className={styles.survey_controls}>
        <button
          className={styles.survey_button}
          disabled={currentStep === 0}
          onClick={handlePreviousStep}
        >
          Voltar
        </button>
        <button className={styles.survey_button}>Ver Lista</button>
      </div>
    </div>
  );
}

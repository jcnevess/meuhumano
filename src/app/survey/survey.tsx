"use client";

import { useState } from "react";
import styles from "./survey.module.css";
import { Sigmar } from "next/font/google";

const sigmar = Sigmar({ weight: "400", subsets: ["latin"] });

export default function Survey() {
  const steps = [
    { id: "ANIMAL", title: "Eu quero adotar um" },
    { id: "GENDER", title: "Tenho preferência por" },
    { id: "SIZE", title: "Quero um animal de porte" },
    { id: "AGE_RANGE", title: "Quanto a idade, prefiro que o animal tenha" },
    { id: "FUR_HEIGHT", title: "Meu animal ideal tem o pelo" },
    { id: "CASTRATED", title: "Quanto à castração, prefiro um animal" },
    { id: "MOOD", title: "Eu prefiro um animal mais" },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function handlePreviousStep() {
    setCurrentStep((prevStep) => prevStep - 1);
  }

  const [formData, setFormData] = useState({
    animal: "",
    gender: "",
    size: "",
    age_range: "",
    fur_height: "",
    castrated: "",
    mood: "",
  });

  function handleAnimalSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      animal: (event.target as HTMLInputElement).value,
    });

    handleNextStep();
  }

  function handleGenderSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      gender: (event.target as HTMLInputElement).value,
    });

    handleNextStep();
  }

  function handleSizeSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      size: (event.target as HTMLInputElement).value,
    });

    handleNextStep();
  }

  function handleAgeSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      age_range: (event.target as HTMLInputElement).value,
    });

    handleNextStep();
  }

  function handleFurHeightSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      fur_height: (event.target as HTMLInputElement).value,
    });

    handleNextStep();
  }

  function handleCastratedSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      castrated: (event.target as HTMLInputElement).value,
    });

    handleNextStep();
  }

  function handleMoodSelection(event: React.MouseEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      mood: (event.target as HTMLInputElement).value,
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={[sigmar.className, styles.title].join(" ")}>
        meu
        <br />
        humano
      </h1>
      {steps[currentStep].id === "ANIMAL" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          <label
            className={`${styles.survey_option} ${
              formData.animal === "cat" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="animal_cat"
              name="animal"
              value="cat"
              onClick={handleAnimalSelection}
              defaultChecked={formData.animal === "cat"}
            />
            gato
          </label>
          <label
            className={`${styles.survey_option} ${
              formData.animal === "dog" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="animal_dog"
              name="animal"
              value="dog"
              onClick={handleAnimalSelection}
              defaultChecked={formData.animal === "dog"}
            />
            cachorro
          </label>
        </div>
      )}

      {steps[currentStep].id === "GENDER" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          <label
            className={`${styles.survey_option} ${
              formData.gender === "female" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="gender_female"
              name="gender"
              value="female"
              onClick={handleGenderSelection}
              defaultChecked={formData.gender === "female"}
            />
            fêmea
          </label>
          <label
            className={`${styles.survey_option} ${
              formData.gender === "male" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="gender_male"
              name="gender"
              value="male"
              onClick={handleGenderSelection}
              defaultChecked={formData.gender === "male"}
            />
            macho
          </label>
        </div>
      )}

      {steps[currentStep].id === "SIZE" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          <label
            className={`${styles.survey_option} ${
              formData.animal === "small" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="size_small"
              name="size"
              value="small"
              onClick={handleSizeSelection}
              defaultChecked={formData.size === "small"}
            />
            Pequeno
          </label>
          <label
            className={`${styles.survey_option} ${
              formData.animal === "medium" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="size_medium"
              name="size"
              value="medium"
              onClick={handleSizeSelection}
              defaultChecked={formData.size === "medium"}
            />
            Médio
          </label>
          <label
            className={`${styles.survey_option} ${
              formData.animal === "large" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="size_large"
              name="size"
              value="large"
              onClick={handleSizeSelection}
              defaultChecked={formData.size === "large"}
            />
            Grande
          </label>
        </div>
      )}

      {steps[currentStep].id === "AGE_RANGE" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          <label
            className={`${styles.survey_option} ${
              formData.animal === "cat" ? styles.option_checked : ""
            }`}
          >
            <input
              type="radio"
              id="age_range_1"
              name="age_range"
              value="1"
              onClick={handleAgeSelection}
              defaultChecked={formData.age_range === "1"}
            />
            Menos de 3 meses
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="age_range_2"
              name="age_range"
              value="2"
              onClick={handleAgeSelection}
              defaultChecked={formData.age_range === "2"}
            />
            Entre 3 e 6 meses
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="age_range_3"
              name="age_range"
              value="3"
              onClick={handleAgeSelection}
              defaultChecked={formData.age_range === "3"}
            />
            Entre 6 meses e 1 ano
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="age_range_4"
              name="age_range"
              value="4"
              onClick={handleAgeSelection}
              defaultChecked={formData.age_range === "4"}
            />
            Entre 1 e 3 anos
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="age_range_5"
              name="age_range"
              value="5"
              onClick={handleAgeSelection}
              defaultChecked={formData.age_range === "5"}
            />
            Entre 3 e 7 anos
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="age_range_6"
              name="age_range"
              value="6"
              onClick={handleAgeSelection}
              defaultChecked={formData.age_range === "6"}
            />
            Mais de 7 anos
          </label>
        </div>
      )}

      {steps[currentStep].id === "FUR_HEIGHT" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="fur_short"
              name="fur"
              value="short"
              onClick={handleFurHeightSelection}
              defaultChecked={formData.fur_height === "short"}
            />
            Curto
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="fur_medium"
              name="fur"
              value="medium"
              onClick={handleFurHeightSelection}
              defaultChecked={formData.fur_height === "medium"}
            />
            Médio
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="fur_long"
              name="fur"
              value="long"
              onClick={handleFurHeightSelection}
              defaultChecked={formData.fur_height === "long"}
            />
            Longo
          </label>
        </div>
      )}

      {steps[currentStep].id === "CASTRATED" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="castrated_yes"
              name="castrated"
              value="yes"
              onClick={handleCastratedSelection}
              defaultChecked={formData.castrated === "yes"}
            />
            Castrado
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="castrated_no"
              name="castrated"
              value="no"
              onClick={handleCastratedSelection}
              defaultChecked={formData.castrated === "no"}
            />
            Não Castrado
          </label>
        </div>
      )}

      {steps[currentStep].id === "MOOD" && (
        <div className={styles.survey_container}>
          <h2 className={styles.survey_question}>{steps[currentStep].title}</h2>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="mood_calm"
              name="mood"
              value="calm"
              onClick={handleMoodSelection}
              defaultChecked={formData.mood === "calm"}
            />
            Calmo
          </label>
          <label className={styles.survey_option}>
            <input
              type="radio"
              id="mood_lively"
              name="mood"
              value="lively"
              onClick={handleMoodSelection}
              defaultChecked={formData.mood === "lively"}
            />
            Agitado
          </label>
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

"use client";

import styles from "./survey.module.css";
import { useState } from "react";
import { Sigmar_One } from "next/font/google";
import { PetFilter } from "@/app/models/models";
import filterDatabase from "@/app/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SurveyService from "./survey.service";
import SurveyQuestion from "../survey-question/survey-question";

const sigmarone = Sigmar_One({ weight: "400", subsets: ["latin"] });

type SurveyStep = {
  id: string;
  title: string;
  handler: (evt: React.MouseEvent<HTMLInputElement>) => void;
};

export default function Survey() {
  const [currentStep, setCurrentStep] = useState(0);
  const [appliedFilters, setAppliedFilters] = useState<PetFilter[]>([]);

  const router = useRouter();

  const surveyService = SurveyService.getInstance();

  const steps: SurveyStep[] = [
    {
      id: "animal",
      title: "Eu quero adotar um",
      handler: handleAnimalSelection,
    },
    {
      id: "gender",
      title: "Tenho preferência por",
      handler: handleGenderSelection,
    },
    {
      id: "size",
      title: "Quero um animal de porte",
      handler: handleSizeSelection,
    },
    {
      id: "age_range",
      title: "Quanto a idade, prefiro que o animal tenha",
      handler: handleAgeSelection,
    },
    {
      id: "fur_height",
      title: "Meu animal ideal tem o pelo",
      handler: handleFurHeightSelection,
    },
    {
      id: "castrated",
      title: "Quanto à castração, prefiro um animal",
      handler: handleCastratedSelection,
    },
    {
      id: "mood",
      title: "Eu prefiro um animal mais",
      handler: handleMoodSelection,
    },
  ];

  function handleAnimalSelection(event: React.MouseEvent<HTMLInputElement>) {
    setAppliedFilters([
      ...appliedFilters,
      {
        key: "animal",
        value: (event.target as HTMLInputElement).value,
      },
    ]);

    handleNextStep();
  }

  function handleGenderSelection(event: React.MouseEvent<HTMLInputElement>) {
    setAppliedFilters([
      ...appliedFilters,
      {
        key: "gender",
        value: (event.target as HTMLInputElement).value,
      },
    ]);

    handleNextStep();
  }

  function handleSizeSelection(event: React.MouseEvent<HTMLInputElement>) {
    setAppliedFilters([
      ...appliedFilters,
      {
        key: "size",
        value: (event.target as HTMLInputElement).value,
      },
    ]);

    handleNextStep();
  }

  function handleAgeSelection(event: React.MouseEvent<HTMLInputElement>) {
    setAppliedFilters([
      ...appliedFilters,
      {
        key: "age_range",
        value: (event.target as HTMLInputElement).value,
      },
    ]);

    handleNextStep();
  }

  function handleFurHeightSelection(event: React.MouseEvent<HTMLInputElement>) {
    setAppliedFilters([
      ...appliedFilters,
      {
        key: "fur_height",
        value: (event.target as HTMLInputElement).value,
      },
    ]);

    handleNextStep();
  }

  function handleCastratedSelection(event: React.MouseEvent<HTMLInputElement>) {
    setAppliedFilters([
      ...appliedFilters,
      {
        key: "castrated",
        value: (event.target as HTMLInputElement).value,
      },
    ]);

    handleNextStep();
  }

  function handleMoodSelection(event: React.MouseEvent<HTMLInputElement>) {
    setAppliedFilters([
      ...appliedFilters,
      {
        key: "mood",
        value: (event.target as HTMLInputElement).value,
      },
    ]);

    handleSubmit();
  }

  function handleNextStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function handleSubmit() {
    surveyService.sendSurvey(appliedFilters);
    router.push("/list");
  }

  function getDefaultOption(key: string): PetFilter | undefined {
    return appliedFilters.filter((flt) => flt.key === key).at(0);
  }

  return (
    <div className="flex flex-col gap-8 min-h-dvh mx-8">
      <h1
        className={`${sigmarone.className} ${styles.stroked}
        capitalize text-center text-softgreen text-5xl py-8 tracking-widest leading-tight`}
      >
        meu
        <br />
        humano
      </h1>

      <SurveyQuestion
        title={steps[currentStep].title}
        relatedFilterKey={steps[currentStep].id}
        options={filterDatabase.filter(
          (flt) => flt.key === steps[currentStep].id
        )}
        defaultOption={getDefaultOption(steps[currentStep].id)}
        handleSelection={steps[currentStep].handler}
      ></SurveyQuestion>

      <div className="flex gap-4 mx-0 my-8">
        <Link
          href="/list"
          className="border-softgreen border-4 rounded bg-white py-2 grow
          text-center"
          onClick={handleSubmit}
        >
          Ver Lista
        </Link>
      </div>
    </div>
  );
}

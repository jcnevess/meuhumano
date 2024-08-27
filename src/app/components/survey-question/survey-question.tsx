import { PetFilter } from "@/app/models/models";

interface SurveyQuestionProps {
  title: string;
  relatedFilterKey: string;
  options: PetFilter[];
  defaultOption?: PetFilter;
  handleSelection: (evt: React.MouseEvent<HTMLInputElement>) => void;
}

function prepareString(input: string) {
  return input.replaceAll("_", " ");
}

export default function SurveyQuestion(props: SurveyQuestionProps) {
  function isOptionSelected(option: PetFilter): boolean {
    const selectedOption = props.defaultOption;
    return selectedOption
      ? option.key === selectedOption.key &&
          option.value === selectedOption.value
      : false;
  }

  return (
    <div className="flex flex-col gap-4 items-center grow border-none">
      <h2 className="text-bold w-full text-lg">{props.title}</h2>
      {props.options.map((flt) => (
        <label
          key={flt.value}
          className={`bg-softgreen py-2 text-center rounded w-full tracking-widest first-letter:uppercase
              ${isOptionSelected(flt) ? "bg-[#39a73d]" : ""}
              `}
        >
          <input
            type="radio"
            id={`${props.relatedFilterKey}_${flt.value}`}
            name={props.relatedFilterKey}
            value={flt.value}
            onClick={props.handleSelection}
            defaultChecked={isOptionSelected(flt)}
            className="hidden"
          />
          {prepareString(flt.value)}
        </label>
      ))}
    </div>
  );
}

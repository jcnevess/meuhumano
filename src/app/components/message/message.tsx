import { MessageDirection, MessageEmitter } from "@/app/models/models";
import styles from "./message.module.css";

interface MessageProps {
  emitter: MessageEmitter;
  body: string;
  direction: MessageDirection;
}

export default function Message(props: MessageProps) {
  function getBodyStyle(direction: MessageDirection): string {
    if (direction === MessageDirection.SENT) {
      return styles["message-sent-body"];
    } else {
      return styles["message-received-body"];
    }
  }

  return (
    <div
      className={`flex gap-4 ${
        props.direction === MessageDirection.RECEIVED ? "flex-row-reverse" : ""
      }`}
    >
      <picture className="aspect-square overflow-hidden rounded-full flex-shrink-0 flex-grow-0 max-h-[64px]">
        <img
          src={props.emitter?.imgUri}
          alt={props.emitter?.name}
          className="aspect-square w-[64px] object-cover"
        />
      </picture>
      <div
        className={`relative before:absolute before:block before:w-[20px] before:h-[20px] rounded p-2 text-sm 
          ${getBodyStyle(props.direction)}`}
      >
        {props.body}
      </div>
    </div>
  );
}

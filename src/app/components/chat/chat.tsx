"use client";

import { ArrowLeft, Send } from "lucide-react";

import styles from "./chat.module.css";
import { useEffect, useState } from "react";
import { MessageDirection, MessageEmitter, Pet } from "@/app/models/models";
import { ChatService } from "./chat.service";
import Message from "../message/message";

type ChatProps = { petId: string };

export default function Chat(props: ChatProps) {
  const [pet, setPet] = useState<Pet>();

  useEffect(() => {
    const chatService = ChatService.getInstance();

    chatService.getPet(props.petId).then((pet) => setPet(pet));
  });

  return (
    <div>
      <div
        className={`${styles.header} bg-softgreen flex items-center px-2 py-3 gap-2 overflow-hidden`}
      >
        <div className="icon-back font-bold">
          <ArrowLeft />
        </div>
        <div>
          <div className="text-sm">Conversa com {pet?.shelter} sobre</div>
          <div className="title text-lg font-bold leading-5">{pet?.name}</div>
        </div>
      </div>
      <div
        className={`${styles["chat-box"]} p-3 flex flex-col justify-between`}
      >
        <div className="chat-messages flex flex-col gap-3">
          <Message
            emitter={{
              id: "1",
              name: "User",
              imgUri: "/files/img/pexels-woman.jpg",
            }}
            body="Ex sunt labore pariatur enim pariatur. Veniam aliquip non proident
              laboris sit in ut cupidatat deserunt excepteur ad laborum ipsum
              consectetur."
            direction={MessageDirection.SENT}
          ></Message>

          <Message
            emitter={{
              id: pet?.id ?? "",
              name: pet?.name ?? "",
              imgUri: pet?.mediaList[pet.coverIndex].uri ?? "",
            }}
            body="Dolore duis ex ad nostrud laborum. Dolor ex duis ad tempor ullamco eu proident amet. Adipisicing eu eu voluptate ipsum."
            direction={MessageDirection.RECEIVED}
          ></Message>
        </div>
        <div className="chat-input flex justify-between items-center gap-2">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Insira sua mensagem"
            className="text-sm flex-grow rounded-md p-1 border-2 border-black border-solid"
          />
          <button
            type="button"
            title="Enviar"
            className="bg-softgreen rounded-full pt-[0.6rem] pe-[0.6rem] pb-[0.5rem] ps-[0.5rem]"
          >
            <Send></Send>
          </button>
        </div>
      </div>
    </div>
  );
}

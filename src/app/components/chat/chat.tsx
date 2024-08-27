"use client";

import { ArrowLeft, Send } from "lucide-react";

import styles from "./chat.module.css";
import { useEffect, useState } from "react";
import { Pet } from "@/app/models/models";
import { ChatService } from "./chat.service";

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
          <div className="chat-message message-user flex gap-4">
            <picture className="sender-avatar aspect-square overflow-hidden rounded-full flex-shrink-0 flex-grow-0 max-h-[64px]">
              <img
                src="/files/img/pexels-woman.jpg"
                alt="User"
                className="aspect-square w-[64px] object-cover"
              />
            </picture>
            <div
              className={`${styles["message-body"]} ${styles["message-main"]} rounded p-2 text-sm`}
            >
              Ex sunt labore pariatur enim pariatur. Veniam aliquip non proident
              laboris sit in ut cupidatat deserunt excepteur ad laborum ipsum
              consectetur.
            </div>
          </div>
          <div className="chat-message message-other flex flex-row-reverse gap-4">
            <picture className="sender-avatar aspect-square overflow-hidden rounded-full flex-shrink-0 flex-grow-0 max-h-[64px]">
              <img
                src={
                  pet?.mediaList[pet?.coverIndex].uri ??
                  "/files/img/pexels-dog.jpg"
                }
                alt={pet?.name}
                className="aspect-square w-[64px] object-cover"
              />
            </picture>
            <div
              className={`${styles["message-body"]} ${styles["message-reply"]} rounded p-2 text-sm`}
            >
              Dolore duis ex ad nostrud laborum. Dolor ex duis ad tempor ullamco
              eu proident amet. Adipisicing eu eu voluptate ipsum.
            </div>
          </div>
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

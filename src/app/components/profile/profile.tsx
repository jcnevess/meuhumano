"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./profile.module.css";
import {
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Dot,
  Ellipsis,
  MessageSquare,
} from "lucide-react";

export default function Profile() {
  const animal = {
    name: "Flanela",
    shelter: "Abrigo Patinhas",
    distance: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
          minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, \
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
          exercitation.",
    gender: "fêmea",
    breed: "SRD",
    size: "médio",
    age: 5,
    fur: "médio",
    castrated: true,
    mood: "agitado",
    mediaList: [
      {
        mimetype: "video/mp4",
        uri: "./files/video/dogineo.mp4",
        alt: "Flanela",
        isCover: false,
      },
      {
        mimetype: "image/jpeg",
        uri: "./files/img/pexels-dog.jpg",
        alt: "Flanela",
        isCover: true,
      },
      {
        mimetype: "image/jpeg",
        uri: "./files/img/pexels-dog2.jpg",
        alt: "Flanela",
        isCover: false,
      },
    ],
  };

  const [mediaIndex, setMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  function navigateTo(index: number) {
    setMediaIndex(index);
  }

  function navigatePrevious() {
    if (mediaIndex > 0) {
      setMediaIndex((prev) => prev - 1);
    }
  }

  function navigateNext() {
    if (mediaIndex < animal.mediaList.length - 1) {
      setMediaIndex((prev) => prev + 1);
    }
  }

  function togglePlay() {
    const video = videoPlayerRef.current;
    if (video?.paused || video?.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video?.pause();
      setIsPlaying(false);
    }
  }

  function toggleOptions() {
    setShowOptions((prev) => !prev);
  }

  return (
    <div>
      <div className="media-gallery relative bg-lightergray_">
        <div className="media-overlays">
          {animal.mediaList[mediaIndex].mimetype === "video/mp4" && (
            <div
              id="play_control"
              className={`control-play absolute flex place-content-center place-items-center 
                w-3/4 h-[65%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${
                  isPlaying ? "opacity-0" : ""
                }`}
              onClick={togglePlay}
            >
              <CirclePlay
                width={96}
                height={96}
                strokeWidth={1}
                stroke="white"
              />
            </div>
          )}

          {mediaIndex > 0 && (
            <div
              className="control-previous absolute top-1/2 -translate-y-1/2 z-50"
              onClick={navigatePrevious}
            >
              <ChevronLeft stroke="white" />
            </div>
          )}

          {mediaIndex < animal.mediaList.length - 1 && (
            <div
              className="control-next absolute top-1/2 right-0 -translate-y-1/2 z-50"
              onClick={navigateNext}
            >
              <ChevronRight stroke="white" />
            </div>
          )}

          <div className="control-options absolute top-[5%] right-[5%] z-50">
            <Ellipsis stroke="white" onClick={toggleOptions} />
            {showOptions && (
              <div
                className={`${styles.options} bg-white absolute right-[6px] top-[28px] 
                  rounded-l-[5px] rounded-tr-[2px] rounded-br-[5px] z-[100]
                  before:block before:absolute before:w-[16px] before:h-[10px] 
                  before:-top-[9px] before:right-0 before:bg-white`}
              >
                <ul className="*:px-4 *:py-1">
                  <li>Reportar</li>
                </ul>
              </div>
            )}
          </div>

          {animal.mediaList.length > 1 && (
            <div className="control-media-counter absolute flex bottom-0 left-1/2 -translate-x-1/2 z-50">
              {animal.mediaList.map((_, index) => (
                <div
                  key={index}
                  className={`control-media-dot ${
                    mediaIndex === index ? "media-active" : ""
                  }`}
                  onClick={() => navigateTo(index)}
                >
                  <Dot
                    stroke={
                      index === mediaIndex ? "var(--color-primary)" : "white"
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="media-contents flex items-center overflow-hidden h-[45dvh]">
          {animal.mediaList[mediaIndex].mimetype === "video/mp4" ? (
            <div className="media-content">
              <video
                id="videoplayer"
                ref={videoPlayerRef}
                muted
                disablePictureInPicture
                loop
                preload="metadata"
                aria-label={animal.mediaList[mediaIndex].alt}
                data-status="paused"
              >
                <source
                  src={animal.mediaList[mediaIndex].uri}
                  type={animal.mediaList[mediaIndex].mimetype}
                />
              </video>
            </div>
          ) : (
            <div className="media-content">
              <picture>
                <img
                  src={animal.mediaList[mediaIndex].uri}
                  alt={animal.mediaList[mediaIndex].alt}
                />
              </picture>
            </div>
          )}
        </div>
      </div>

      <div className="profile-info text-lightgray_ flex flex-col gap-4 p-6">
        <div className="profile-heading flex justify-between">
          <div className="heading-info">
            <h1 className="profile-name text-black text-4xl font-bold">
              {animal.name}
            </h1>
            <h2 className="profile-shelter font-bold">de {animal.shelter}</h2>
            <div className="profile-distance">
              {animal.distance} km de distância
            </div>
          </div>
          <div className="profile-message-icon pt-1">
            <MessageSquare
              fill="var(--color-primary)"
              stroke="var(--color-primary)"
              size={36}
            />
          </div>
        </div>
        <div
          className="profile-tags *:inline-block  *:text-black *:bg-lightergray_ *:rounded-xl *:px-3 *:text-[0.9rem]
        flex flex-wrap place-content-center gap-2"
        >
          <div className="profile-tag capitalize">{animal.gender}</div>
          <div className="profile-tag capitalize">
            {animal.breed === "SRD" ? "Raça Mista" : animal.breed}
          </div>
          <div className="profile-tag capitalize">{animal.size} Porte</div>
          <div className="profile-tag capitalize">
            {animal.castrated ? "Castrado" : "Não Castrado"}
          </div>
          <div className="profile-tag capitalize">{animal.mood}</div>
        </div>
        <div className="profile-description capitalize">
          {animal.description}
        </div>
        <div className="profile-actions font-bold flex flex-col gap-4">
          <div
            className="profile-main-actions *:bg-softgreen *:rounded-md *:px-2 *:text-black *:py-2 *:tracking-widest
          flex flex-col gap-4"
          >
            <button className="profile-contact ">
              Conversar sobre {animal.name}
            </button>
            <button className="profile-ignore">Ignorar e ver outros</button>
          </div>
          <button className="profile-report py-2 tracking-widest ">
            Reportar algo estranho
          </button>
        </div>
      </div>
    </div>
  );
}

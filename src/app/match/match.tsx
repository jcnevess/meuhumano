import Image from "next/image";
import { Sigmar } from "next/font/google";

import styles from "./match.module.css";

const sigmar = Sigmar({ weight: "400", subsets: ["latin"] });

export default function Match() {
  return (
    <div className={styles.custom_container}>
      <div className="flex flex-col items-center my-auto gap-4 min-w-0">
        <p className="text-center font-bold tracking-wider text-xl">
          Você foi encontrada por:
        </p>
        <div className={styles.image_mosaic}>
          <div className={styles.image_circle}>
            <Image
              src="/files/img/pexels-dog.jpg"
              alt="Um cachorro esperando adoção"
              width={180}
              height={180}
              priority
            ></Image>
          </div>
          <div className={styles.image_circle}>
            <Image
              src="/files/img/pexels-woman.jpg"
              alt="Uma adotante feliz por adotar um pet"
              width={150}
              height={150}
              priority
            ></Image>
          </div>
        </div>
        <h1
          className={`tracking-widest text-4xl text-softgreen text-center font-bold w-full truncate over ${sigmar.className}`}
        >
          Flanela
        </h1>
        <div
          className={`flex flex-col w-full gap-4 *:py-2 *:px-10 *:rounded-md *:bg-softgreen *:tracking-widest`}
        >
          <button type="button">Ver perfil</button>
          <button type="button">Ignorar e ver outros</button>
        </div>
      </div>
    </div>
  );
}

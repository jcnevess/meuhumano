import styles from "./register.module.css";

import { Sigmar_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sigmarone = Sigmar_One({ weight: "400", subsets: ["latin"] });

function navigateToSurvey() {}

export default function Register() {
  return (
    <div className="container flex flex-col h-[100dvh] justify-between px-6 pt-8">
      <div className="heading flex flex-col gap-6 items-center">
        <h1 className={[sigmarone.className, styles.title].join(" ")}>
          meu
          <br />
          humano
        </h1>
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
        <h2 className={styles.subtitle}>
          Seja escolhido por <br /> um novo amigo
        </h2>
      </div>

      <div className={styles.button_group}>
        <Link href="/survey" className={styles.action_button}>
          entrar
        </Link>
        <p className="text-sm tracking-widest">ou</p>
        <Link href="/survey" className={styles.action_button}>
          cadastrar
        </Link>
      </div>
      <div className="text-sm tracking-widest text-center">
        &copy; César Neves - 2024
      </div>
    </div>
  );
}

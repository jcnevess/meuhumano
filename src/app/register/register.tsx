import styles from "./register.module.css";

import { Sigmar } from "next/font/google";
import Image from "next/image";

const sigmar = Sigmar({ weight: "400", subsets: ["latin"] });

export default function Register() {
  return (
    <div className={styles.container}>
      <h1 className={[sigmar.className, styles.title].join(" ")}>
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
      <div className={styles.button_group}>
        <button className={styles.action_button}>entrar</button>
        <p className={styles.smalltext}>ou</p>
        <button className={styles.action_button}>cadastrar</button>
      </div>
      <div className={styles.attribution}>&copy; César Neves - 2024</div>
    </div>
  );
}

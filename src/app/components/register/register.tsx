import styles from "./register.module.css";

import { Sigmar_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sigmarone = Sigmar_One({ weight: "400", subsets: ["latin"] });

export default function Register() {
  return (
    <div className="flex flex-col h-[100dvh] justify-between px-6 pt-8">
      <div className="flex flex-col gap-6 items-center">
        <h1
          className={`${sigmarone.className} ${styles.title} capitalize text-center tracking-widest leading-[1.15em] text-softgreen`}
        >
          meu
          <br />
          humano
        </h1>
        <div className="relative overflow-hidden w-[320px] h-[280px]">
          <div className="overflow-hidden rounded-full aspect-square border-softgreen border-8 absolute w-[200px] top-[18px] left-[38px]">
            <Image
              className="object-cover"
              src="/files/img/pexels-dog.jpg"
              alt="Um cachorro esperando adoção"
              width={180}
              height={180}
              priority
            ></Image>
          </div>
          <div className="overflow-hidden rounded-full aspect-square border-softgreen border-8 absolute w-[160px] bottom-[18px] right-[38px]">
            <Image
              className="object-cover"
              src="/files/img/pexels-woman.jpg"
              alt="Uma adotante feliz por adotar um pet"
              width={150}
              height={150}
              priority
            ></Image>
          </div>
        </div>
        <h2 className="font-normal text-sm text-center tracking-[0.2em]">
          Seja escolhido por <br /> um novo amigo
        </h2>
      </div>

      <div className="flex flex-col items-center gap-y-2 my-3">
        <Link
          href="/survey"
          className="bg-softgreen capitalize text-center border-none rounded tracking-widest py-2 w-full"
        >
          entrar
        </Link>
        <p className="text-sm tracking-widest">ou</p>
        <Link
          href="/survey"
          className="bg-softgreen capitalize text-center border-none rounded tracking-widest py-2 w-full"
        >
          cadastrar
        </Link>
      </div>
      <div className="text-sm tracking-widest text-center">
        &copy; César Neves - 2024
      </div>
    </div>
  );
}

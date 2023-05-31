import Layout from "@/components/layout";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import ghIcon from "../icons/gh.png";

export default async function About() {
  return (
    <Layout>
      <section className={styles.main}>
        <h3 className=""></h3>
        <div className={styles.textContainer}>
          Soy Agu, desarrollador. Este es mi primer proyecto con Nextjs y tal
          vez le sirva a algún viajero por ahí :)
        </div>
        <ul className={styles.btnList}>
          <li>
            <Link target="_blank" href={"https://github.com/jinitsuga"}>
              <Image
                src={ghIcon}
                width={30}
                height={30}
                alt="github icon"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              className={styles.regularBtn}
              href={"https://agu-portfolio.vercel.app/"}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

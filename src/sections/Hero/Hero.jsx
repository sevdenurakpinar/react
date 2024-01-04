/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.scss";

export function Hero() {
  const forward = () => {
    // Butona tıklandığında yapılacak işlemler
    window.open("", "_blank");
  };

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <h1 className="">Tutorials</h1>
            <img src="../../../public/img/blenderguru.png" className="mt-5"></img>
            <p className={styles.paragraf + " mt-4"}>lorem10adfsrhethnrhryjsjtsujktugku

            </p>
            <button type="button" className="btn " onClick={forward}>Articles</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

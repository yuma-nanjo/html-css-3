import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Colorful from "../public/colorful.svg";
import ColorfulYoko from "../public/colorful-yoko.svg";

export default function Home() {
  if (typeof window !== "undefined") {
    var osDark = window.matchMedia("(prefers-color-scheme:dark)");
    var mySwitch = document.getElementById("myonoffswitch");

    function darkModeOn() {
      document.documentElement.classList.add("darkmode");
      mySwitch.checked = true;
    }

    function darkModeOff() {
      document.documentElement.classList.remove("darkmode");
      mySwitch.checked = false;
    }

    if (osDark.matches) {
      darkModeOn();
    }

    // ロード時の状況に応じて切り替え
    if (sessionStorage.getItem("darkmode") === "on") {
      darkModeOn();
    } else if (sessionStorage.getItem("darkmode") === "off") {
      darkModeOff();
    } else if (osDark.matches) {
      darkModeOn();
    }

    // スイッチの操作に応じて切り替え
    mySwitch.addEventListener("change", function () {
      if (mySwitch.checked) {
        darkModeOn();
        sessionStorage.setItem("darkmode", "on");
      } else {
        darkModeOff();
        sessionStorage.setItem("darkmode", "off");
      }
    });

    osDark.addListener(function () {
      if (osDark.matches) {
        darkModeOn();
      } else {
        darkModeOff();
      }
    });
  }

  return (
    <>
      <header className="header">
        <div className="site">
          <h1>
            <Colorful />
          </h1>
          <p>いつでも思い出せるキャンディの味</p>
          <aside className="switch">
            <div className="onofftext">Mode</div>
            <div className="onoffswitch">
              <input
                type="checkbox"
                name="onoffswitch"
                className="onoffswitch-checkbox"
                id="myonoffswitch"
                tabIndex="0"
              />
              <label
                className="onoffswitch-label"
                htmlFor="myonoffswitch"
              ></label>
            </div>
          </aside>
        </div>
        <div className="msg">
          <div className="text">
            <h2>はじまりは1つのキャンディでした</h2>
            <p>
              わたしたちの町には古くからの甘味処がたくさんあり、カラフルで、かわいいキャンディもたくさん作られています。見ているだけでワクワクしてくる。楽しくなる。そんな気持ちを共有できたらと思って立ち上げたのが、このサイトです。
            </p>
          </div>
        </div>
      </header>

      <section className="photos">
        <div className="text">
          <h2>色とりどりのキャンディ</h2>
          <p>
            わたしたちがお届けできるキャンディを紹介します。古今東西のキャンディが揃っています。
          </p>
        </div>
        <ul>
          <li>
            <img src="/candy01.jpg" alt="" />
          </li>
          <li>
            <img src="/candy02.jpg" alt="" />
          </li>
          <li>
            <img src="/candy03.jpg" alt="" />
          </li>
          <li>
            <img src="/candy04.jpg" alt="" />
          </li>
          <li>
            <img src="/candy05.jpg" alt="" />
          </li>
          <li>
            <img src="/candy06.jpg" alt="" />
          </li>
        </ul>
      </section>

      <footer className="footer">
        <h2>
          <ColorfulYoko />
        </h2>
        <p>
          〒 600-0001 京都府山寺市中央梅3-3-12
          <br />
          0001-1234-5678
        </p>

        <ul>
          <li>
            <Link href="">
              <a>
                <i className="ri-twitter-fill" />
                <span className="sr-only">Twitter</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                <i className="ri-facebook-circle-fill" />
                <span className="sr-only">Facebook</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                <i className="ri-instagram-line" />
                <span className="sr-only">Instagram</span>
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

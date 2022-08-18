import Head from "next/head";
// import Image from "next/image";
import Board from "../containers/Board";
// import * as styles from "../styles/Home.module.css";

export default function Home() {
  return (
    // <div className="container">
    <div>
      <Head>
        <title>Tic Tac Toe By Peter Salter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="main"> */}
      <main>
        <Board />
      </main>
    </div>
  );
}

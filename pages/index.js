import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";

function Home({ conversations }) {
  let itemList = conversations.map((conversation, index) => {
    return <ListGroup.Item key={index}>{conversation.title}</ListGroup.Item>;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Convos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Conversations.</h1>
        <div>
          <ListGroup>{itemList}</ListGroup>
        </div>
      </main>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/v1/conversations");
  const json = await res.json();
  return { conversations: json.data };
};

export default Home;

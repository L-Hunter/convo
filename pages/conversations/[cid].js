import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { ListGroup } from "react-bootstrap";

function ConversationDetail(conversation) {
  let itemList = conversation.messages.map((message, index) => {
    return <ListGroup.Item key={index}>{message.text}</ListGroup.Item>;
  });
  return (
    <div>
      <Head>
        <title>Convos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{conversation.title}</h1>
        <ListGroup>{itemList}</ListGroup>
        <Link href="/">Home</Link>
      </main>
    </div>
  );
}

ConversationDetail.getInitialProps = async (ctx) => {
  console.log(ctx);
  const res = await fetch(`http://localhost:3000/api/v1/conversations/1`);
  const json = await res.json();
  return json;
};

export default ConversationDetail;

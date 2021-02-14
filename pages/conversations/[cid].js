import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Messages from "@/components/messages";

function ConversationDetail(conversation) {
  return (
    <div>
      <Head>
        <title>Convos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{conversation.title}</h1>
        <Messages messages={conversation.messages} />
        <Link href="/">Home</Link>
      </main>
    </div>
  );
}

ConversationDetail.getInitialProps = async (ctx) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/conversation/${ctx.query.cid}`
  );
  const json = await res.json();
  return json;
};

export default ConversationDetail;

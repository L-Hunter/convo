import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Messages from "@/components/messages";
import Layout from "@/components/layout";
import AddMessage from "@/components/add-message";

function ConversationDetail(conversation) {
  return (
    <Layout>
      <h1>{conversation.title}</h1>
      <Messages messages={conversation.messages} />
      <AddMessage cid={conversation.id} />
      <Link href="/">Home</Link>
    </Layout>
  );
}

ConversationDetail.getInitialProps = async (ctx) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/conversations/${ctx.query.cid}`
  );
  const json = await res.json();
  return json;
};

export default ConversationDetail;

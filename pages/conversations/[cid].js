import Link from "next/link";
import Messages from "@/components/messages";
import Layout from "@/components/layout";
import AddMessage from "@/components/add-message";
import { useState, useEffect } from "react";

async function getInitialData(cid) {
  const res = await fetch(`http://localhost:3000/api/v1/conversations/${cid}`);
  const json = await res.json();
  return json;
}

function ConversationDetail(initialConversation) {
  const [hasNewContent, setHasNewContent] = useState(false);
  const [conversation, setConversation] = useState(initialConversation);

  async function reloadInitialData() {
    const updatedConversation = await getInitialData(initialConversation.id);
    setConversation(updatedConversation);
  }
  useEffect(() => {
    reloadInitialData();
    setHasNewContent(false);
  }, [hasNewContent]);

  return (
    <Layout>
      <h2>{conversation.title}</h2>
      <Messages
        setHasNewContent={setHasNewContent}
        messages={conversation.messages}
      />
      <AddMessage setHasNewContent={setHasNewContent} cid={conversation.id} />
      <Link href="/">Home</Link>
    </Layout>
  );
}

ConversationDetail.getInitialProps = async (ctx) => {
  return await getInitialData(ctx.query.cid);
};

export default ConversationDetail;

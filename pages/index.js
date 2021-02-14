import styles from "../styles/Home.module.css";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/components/layout";
import AddConversation from "@/components/add-conversation";
import ConversationSearch from "@/components/conversation-search";
import { useState, useEffect } from "react";

async function getInitialConvos() {
  const res = await fetch("http://localhost:3000/api/v1/conversations");
  const json = await res.json();
  return { initialConvos: json.data };
}

function Home({ initialConvos }) {
  const [conversations, setConversations] = useState(initialConvos);

  // Update the document title using the browser API
  let itemList = conversations.map((conversation, index) => {
    let title = `${conversation.title} (${conversation.messages.length})`;
    return (
      <ListGroup.Item key={index}>
        <Link href={`/conversations/${conversation.id}`}>{title}</Link>
      </ListGroup.Item>
    );
  });
  return (
    <Layout>
      <div>
        <ConversationSearch
          conversations={conversations}
          setConversations={setConversations}
        />
        <ListGroup>{itemList}</ListGroup>
      </div>
      <AddConversation />
    </Layout>
  );
}

Home.getInitialProps = async (ctx) => {
  return await getInitialConvos();
};

export default Home;

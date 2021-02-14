import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/components/layout";
import AddConversation from "@/components/add-conversation";
import ConversationSearch from "@/components/conversation-search";
import { useState, useEffect } from "react";

async function getInitialConvos() {
  const res = await fetch("http://localhost:3000/api/v1/conversations");
  const json = await res.json();
  return { convos: json.data };
}

function Home({ convos }) {
  const [conversations, setConversations] = useState(convos);
  const [newConvo, setNewConvo] = useState(false);
  let itemList = [];
  let title = "";

  async function reloadConvos() {
    const response = await getInitialConvos();
    setConversations(response.convos);
  }

  useEffect(() => {
    reloadConvos();
    setNewConvo(false);
  }, [newConvo]);

  return (
    <Layout>
      <div>
        <ConversationSearch
          conversations={conversations}
          setConversations={setConversations}
        />
        <ListGroup>
          {conversations.map((conversation, index) => {
            title = `${conversation.title} (${conversation.messages.length})`;
            return (
              <ListGroup.Item key={index}>
                <Link href={`/conversations/${conversation.id}`}>{title}</Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <AddConversation setNewConvo={setNewConvo} />
    </Layout>
  );
}

Home.getInitialProps = async (ctx) => {
  return await getInitialConvos();
};

export default Home;

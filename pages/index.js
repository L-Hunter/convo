import styles from "../styles/Home.module.css";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/components/layout";
import AddConversation from "@/components/add-conversation";

function Home({ conversations }) {
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
        <ListGroup>{itemList}</ListGroup>
      </div>
      <AddConversation />
    </Layout>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/v1/conversations");
  const json = await res.json();
  return { conversations: json.data };
};

export default Home;

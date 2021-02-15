import { Form } from "react-bootstrap";
import { get } from "@/utils/rest";
import { useState } from "react";

export default function ConversationSearch({
  conversations,
  setConversations,
}) {
  const [search, setSearch] = useState("");

  const handleChange = async (e) => {
    setSearch(e.target.value);
    sendRequest();
  };

  async function sendRequest() {
    const res = await get(
      `http://localhost:3000/api/v1/conversations/search?title=${search}`
    );
    const convos = await res.json();
    setConversations(convos.data);
    return res;
  }

  return (
    <Form>
      <Form.Group controlId="newConvo">
        <Form.Control
          type="text"
          onChange={handleChange}
          placeholder="Enter a title for your Convo"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </Form>
  );
}

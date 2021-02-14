import { Form, Button } from "react-bootstrap";
import { post } from "@/utils/rest";
import { useState } from "react";

export default function AddConversation({ setInitialConvosToDefault }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  async function sendRequest() {
    const res = await post("http://localhost:3000/api/v1/conversations", {
      title: title,
    });
    await setInitialConvosToDefault();
    return res;
  }

  return (
    <Form>
      <Form.Group controlId="newConvo">
        <Form.Label>Conversation Title</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          placeholder="Enter a title for your Convo"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={sendRequest}>
        Primary
      </Button>
    </Form>
  );
}

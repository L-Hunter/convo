import { Form, Button } from "react-bootstrap";
import { post } from "@/utils/rest";
import { useState } from "react";

export default function AddMessage({ cid }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  async function sendRequest() {
    const res = await post("http://localhost:3000/api/v1/messages", {
      text: text,
      conversationId: cid,
    });
    return res;
  }

  return (
    <Form>
      <Form.Group controlId="newMessage">
        <Form.Control
          type="text"
          onChange={handleChange}
          placeholder="Enter your message"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={sendRequest}>
        Submit
      </Button>
    </Form>
  );
}

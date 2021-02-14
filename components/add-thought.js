import { Form, Button } from "react-bootstrap";
import post from "../utils/rest";
import { useState } from "react";

export default function AddThought({ mid }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  async function sendRequest() {
    const res = await post("http://localhost:3000/api/v1/thoughts", {
      text: text,
      messageId: mid,
    });
    return res;
  }

  return (
    <Form>
      <Form.Group controlId="newThought">
        <Form.Control
          type="text"
          onChange={handleChange}
          placeholder="Enter your thought"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={sendRequest}>
        Submit
      </Button>
    </Form>
  );
}

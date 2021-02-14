import { ListGroup, Accordion, Card, Button } from "react-bootstrap";
import AddThought from "@/components/add-thought";

function Messages({ messages }) {
  console.log(messages);
  return (
    <Accordion defaultActiveKey="0">
      {messages.map((message, index) => {
        return (
          <Card key={message.id}>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={message.id}
              >
                {message.text}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={message.id}>
              <Card.Body>
                <ListGroup>
                  {message.thoughts.map((thought, index) => {
                    return (
                      <ListGroup.Item key={thought.id}>
                        {thought.text}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
                <AddThought mid={message.id} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}

export default Messages;

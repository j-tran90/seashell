// TO DO //

import React from "react";
import Accordion, {
  useContext,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap/Accordion";
import { Card, ContextAwareToggle } from "react-bootstrap";

export default function AccordianToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

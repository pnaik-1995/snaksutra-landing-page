import React from "react";
import "./WhatsAppButton.css"; // We'll create this CSS file

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919035566909"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Chat with us on WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;

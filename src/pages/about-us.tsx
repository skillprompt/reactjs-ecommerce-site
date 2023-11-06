import { useState } from "react";
import { BaseLayout } from "../components/base-layout";
import { Modal } from "../components/modal";

export function AboutUsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <BaseLayout>
      <Modal
        isOpen={isOpen}
        title={"My new modal"}
        onCloseModal={handleCloseModal}
      >
        <p> i am new modal</p>
      </Modal>
      <h3>I am about us page</h3>
      <button type="button" onClick={handleOpenModal}>
        Open
      </button>
    </BaseLayout>
  );
}

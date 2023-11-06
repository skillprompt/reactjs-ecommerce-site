export function Modal({
  title,
  children,
  onCloseModal,
  isOpen,
}: {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onCloseModal: () => void;
}) {
  return isOpen ? (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2>{title}</h2>
        <button
          type="button"
          onClick={() => {
            onCloseModal();
          }}
        >
          Close
        </button>

        <div>{children}</div>
      </div>
    </div>
  ) : null;
}

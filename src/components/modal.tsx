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
    <div>
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
  ) : null;
}

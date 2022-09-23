interface ActionButtonProps {
  text: string;
  onClick: () => any;
  className?: string;
}

export default function ActionButton({
  text,
  onClick,
  className,
}: ActionButtonProps) {
  return (
    <button
      className={
        "px-3 py-1 bg-yellow-300 border border-yellow-700 hover:text-gray-300 hover:bg-yellow-500 rounded-md text-white font-bold m-2" +
        (className || "")
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

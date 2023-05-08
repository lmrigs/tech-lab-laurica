import "../Styles/navbar.scss";

export default function Button({ text }) {
  return (
    <button>
      <span className="button-text">{text}</span>
    </button>
  );
}

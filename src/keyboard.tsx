const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  const handleClick = (letter: string) => {
    if (!disabled) {
      addGuessedLetter(letter);
    }
  };

  return (
    <div
      className="mt-4 "
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isInactive = inactiveLetters.includes(key);
        const buttonClass = `border-2 rounded-lg p-2 uppercase font-bold text-2xl shadow-lg font-mono ${
          isInactive ? "bg-red-500 text-white" : "bg-gray-300 text-black"
        }`;

        return (
          <button
            key={key}
            className={buttonClass}
            onClick={() => handleClick(key)}
            disabled={disabled || isInactive}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;

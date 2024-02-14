
import { useState } from "react";

export default function Players({
  name,
  symbol,
  isActive,
  onChangePlayerName
}) {
  let [IsEditable, setIsEditable] = useState(false);
  let [Name, setName] = useState(name);

  function IsEditableSetterHandler() {
    setIsEditable((editable) => !editable);
    !Name && setName(name);

    if (IsEditable) {
      onChangePlayerName(symbol, Name);
    }
  }

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  return (
    <>
      <li className="players_list" id={isActive ? "active" : undefined}>
        <span className="players">
          {IsEditable === false ? (
            <span className="player_Name">{Name.toUpperCase()}</span>
          ) : (
            <input
              type="text"
              name="playerName"
              className="player_Name_input"
              value={Name}
              onChange={nameChangeHandler}
              maxLength={8}
            />
          )}
          <span className="player_symbol">{symbol}</span>
        </span>
        <button onClick={() => IsEditableSetterHandler()} id="button">
          {IsEditable === false ? "Edit" : "Save"}
        </button>
      </li>
    </>
  );
}



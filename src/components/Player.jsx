import { useState } from "react";

export default function Player({ initailName, symbole }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initailName);

  function handelEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handelChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handelChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbole}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

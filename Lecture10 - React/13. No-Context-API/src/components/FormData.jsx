import React, { useState } from "react";

const FormData = (props) => {
  const [newTheme, setNewTheme] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme);
        }}
      >
        <input
          type="text"
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
          placeholder="Enter Theme"
        />
        <button>Change Theme</button>
      </form>
    </div>
  );
};

export default FormData;

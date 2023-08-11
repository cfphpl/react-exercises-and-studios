import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setBoardName] = useState("no boards yet");
   const boards = [
      { label: "Breakfast", value: "breakfast" },
      { label: "Lunch", value: "lunch" },
      { label: "Dinner", value: "dinner" },
   ];

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
       <label>Save to Board: </label>
       <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option key={board.value} value={board.value}>
               {board.label}
            </option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}         
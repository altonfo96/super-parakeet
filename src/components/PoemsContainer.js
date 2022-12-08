import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */
      poems.map((poem)=>{
        return(
          <Poem poem={poem} />
        )
      })
      }
    </div>
  );
}

export default PoemsContainer;

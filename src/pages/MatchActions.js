import React from "react";
import "./Match.css";

const MatchActions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <button type="button">
      <img src="https://img.icons8.com/metro/48/f89940/undo.png" className="rewindIcon" alt="Rewind Icon" />
      <img src="https://img.icons8.com/metro/48/cf8035/undo.png" className="rewindIconShadow" alt="Rewind Icon Shadow" />
    </button>
    <button
      type="button"
      onClick={() =>
        modifySuperficialChoices(person.id, "ADD_TO_DISLIKED_USERS")
      }
    >
      <i className="fas fa-times dislikeIcon"></i>
      <i className="fas fa-times dislikeIconShadow"></i>
    </button>
    <button
      type="button"
      onClick={() => modifySuperficialChoices(person.id, "ADD_TO_LIKED_USERS")}
    >
      <img src="https://img.icons8.com/ios-filled/100/d4b38d/flex-biceps.png" className="likeIcon" alt="Like Icon" />
      <img src="https://img.icons8.com/ios-filled/100/6b573e/flex-biceps.png" className="likeIconShadow" alt="Like Icon Shadow" />
    </button>
    <button
      type="button"
      onClick={() =>
        modifySuperficialChoices(person.id, "ADD_TO_SUPERLIKED_USERS")
      }
    >
      <i className="fas fa-medal superLikeIcon"></i>
      <i className="fas fa-medal superLikeIconShadow"></i>
    </button>
  </div>
);

export default MatchActions;

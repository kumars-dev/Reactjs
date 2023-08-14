import React from "react";
import {} from "react-bootstrap";
const Meaning = ({ meaning }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <p
          style={{
            fontFamily: "'Noto Serif', sans-serif",
            fontWeight: "700",
          }}
          className="mb-0"
        >
          {meaning.partOfSpeech}
        </p>
        <hr style={{ width: "90%" }} />
      </div>
      <div className="mt-3">
        <p
          style={{
            fontFamily: "'Noto Serif', sans-serif",
            fontWeight: "700",
            color: "#8d8c8c",
            fontSize: "15px",
          }}
        >
          Meaning
        </p>
        <ul>
          {meaning.definitions.map((def) => {
            return (
              <li
                style={{
                  fontFamily: "'Noto Serif', sans-serif",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                <p>{def.definition}</p>
                {def.example && (
                  <p
                    style={{
                      fontFamily: "'Noto Serif', sans-serif",
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#8d8c8c",
                    }}
                  >
                    <q>{def.example}</q>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Meaning;

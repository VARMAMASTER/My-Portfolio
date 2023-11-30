import React from "react";
import "../CSS/component_styles/Info_cards.css";
export default function InfoCards({ intern_info }) {
  return (
    <>
     <React.Fragment key={intern_info.title + intern_info.time}>

      <div className="infocard">
        <div className="infocard-image">
          <img src={intern_info.Image} alt="" />
        </div>
        <div className="infocard-info">
          <div className="infocard-title">
            {intern_info.title}
            {intern_info.time}
          </div>
          <div className="infocard-title">{intern_info.company}</div>
          <p className="infocard-description">{intern_info.description}</p>
          <div className="infocard-techused">
            {intern_info.company === "Bureau of Indian Standards. "
              ? ""
              : "Tech: "}
            {intern_info.technology.map((item) => {
              return (
                <>
                  <div className="tech" key={item}>
                    <img
                    key={item+"9"}
                      src={`https://skillicons.dev/icons?i=${item}`}
                      alt=""
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="infocard-buttons">
            <button className="infocard-button">
              <a href={intern_info.git} target="_blank" rel="noreferrer">
                Git hub
              </a>
            </button>
            <button className="infocard-button">
              <a href={intern_info.live} target="_blank" rel="noreferrer">
                {intern_info.type}
              </a>
            </button>
          </div>
        </div>
      </div>
     </React.Fragment>
    </>
  );
}




import React from "react";
import '../index.css';

const Section = ({id = "", classSection = "", classH2 = "", texth2 = "",
  classP = "", textp = "", textstrong = "" }) => {
  return (
    <section id={id} className={classSection}>
      <h2 className={classH2}>{texth2}</h2>
      <p className={classP}>
        {textstrong && <strong>{textstrong}</strong>}
        {textp}
      </p>
    </section>
  );
};

export default Section;

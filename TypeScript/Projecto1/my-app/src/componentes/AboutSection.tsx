import React from "react";

interface AboutSectionProps {
  id?: string;
  classSection?: string;
  classH2?: string;
  textH2?: string;
  classP?: string;
  textP?: string;
  textStrong?: string;
  children?: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  id = "",
  classSection = "",
  classH2 = "",
  textH2 = "",
  classP = "",
  textP = "",
  textStrong = "",
  children,
}) => {
  return (
    <section id={id} className={classSection}>
      <h2 className={classH2}>{textH2}</h2>
      <p className={classP}>
        {textStrong && <strong>{textStrong}</strong>} {textP}
      </p>
      {children && <div>{children}</div>}
    </section>
  );
};

export default AboutSection;

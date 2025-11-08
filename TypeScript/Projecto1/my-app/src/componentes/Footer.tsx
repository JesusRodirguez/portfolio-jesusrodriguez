import React from "react";
import { Phone } from "lucide-react";

type FooterProps = {
  // Footer
  id?: string;
  classNameFooter?: string;
  classNameH2?: string;
  titleH2?: string;
  children?: React.ReactNode;

  // LinkNormal
  classNameLinkNormal?: string;
  hrefLinkNormal?: string;
  sizeLinkNormal?: number;
  textoLinkNormal?: string;

  // LinkIcons
  classNameLinkIcons?: string;
  hrefLinkIcons?: string;
  sizeLinkIcons?: number;
  target?: string;
  rel?: string;
  textoLinkIcons?: string;
};


const Footer: React.FC<FooterProps> = ({
  id = "",
  classNameFooter = "",
  classNameH2 = "",
  titleH2 = "",
  children,
}) => {
  return (
    <footer id={id} className={classNameFooter}>
      <h2 className={classNameH2}>{titleH2}</h2>
      {children}
    </footer>
  );
};


export const LinkNormal: React.FC<FooterProps> = ({
  classNameLinkNormal = "",
  hrefLinkNormal = "",
  sizeLinkNormal = 20,
  textoLinkNormal = "",
}) => {
  return (
    <a href={hrefLinkNormal} className={classNameLinkNormal}>
      <Phone size={sizeLinkNormal} />
      <span className="ml-2">{textoLinkNormal}</span>
    </a>
  );
};


export const LinkIcons: React.FC<FooterProps> = ({
  classNameLinkIcons = "",
  hrefLinkIcons = "",
  sizeLinkIcons = 24,
  target = "_blank",
  rel = "noopener noreferrer",
  textoLinkIcons = "",
}) => {
  return (
    <a
      href={hrefLinkIcons}
      target={target}
      rel={rel}
      className={classNameLinkIcons}
    >
      <Phone size={sizeLinkIcons} />
      {textoLinkIcons && <span className="ml-2">{textoLinkIcons}</span>}
    </a>
  );
};

export default Footer;

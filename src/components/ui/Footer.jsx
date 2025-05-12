import { MdPlace } from "react-icons/md";
import footerData from "../../api/footerData.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer>
      <section className="grid grid-col3  container footer-section">
        {footerData.map((value, index) => {
          const { icon, title, details } = value;
          return (
            <div key={index} className="footer-content">
              <div className="icon">
                <span>{footerIcon[icon]}</span>
              </div>
              <div className="footer-text">
                <span className="title">{title}:</span>
                <span>{details}</span>
              </div>
            </div>
          );
        })}
      </section>
    </footer>
  );
};

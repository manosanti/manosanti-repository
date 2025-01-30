import { useState } from "react";
// Images
import brazilFlag from "../assets/icons/brazil-flag.png";
import usaFlag from "../assets/icons/united-states-flag.png";

function Navbar() {
  const [currentLanguage, setCurrentLanguage] = useState("pt-br");

  const portfolioLogo = 'manosanti.dev'

  const language = [
    {
      language: "en-us",
      links: [
        { name: "About", link: "#about" },
        { name: "Work", link: "#work" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" },
      ],
      download: { text: "Download CV", link: "#download-cv" },
      flag: usaFlag,
    },
    {
      language: "pt-br",
      links: [
        { name: "Sobre", link: "#sobre" },
        { name: "Trabalhos", link: "#trabalhos" },
        { name: "Depoimentos", link: "#depoimentos" },
        { name: "Contato", link: "#contato" },
      ],
      download: { text: "Baixar CV", link: "#baixar-cv" },
      flag: brazilFlag,
    },
  ];

  const currentLang = language.find((lang) => lang.language === currentLanguage)!;

  // const toggleLanguage = () => {
  //   setCurrentLanguage(currentLanguage === "pt-br" ? "en-us" : "pt-br");
  // };

  return (
    <>
      <div className="w-screen flex items-center max-w-6xl mx-auto justify-between h-16 text-white">
        <div>
          <a href="#!" className="font-bold text-2xl">{portfolioLogo}</a>
        </div>
        <div className="flex list-none items-center">
          <ul className="flex gap-6">
            {currentLang.links.map((item) => (
              <li key={item.name} className="hover:text-blue-600 transition duration-300">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="flex mx-12 gap-2">
            {language.map((lang) => (
              <li key={lang.language}>
                <button onClick={() => setCurrentLanguage(lang.language)}>
                  <img src={lang.flag} alt="" width={28} />
                </button>
              </li>
            ))}
          </ul>
          <ul className="w-28">
            <li className="text-black text-center bg-white p-1 font-medium rounded-md min-w-8">
              <a href={currentLang.download.link} target="_blank" rel="noopener noreferrer">
                {currentLang.download.text}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

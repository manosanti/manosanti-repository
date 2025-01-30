// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"

// Images
import profilePhoto from "../assets/lucas-santiago-profile.jpg"

function HeroPage() {

  const aboutMe = [
    {
      language: 'pt-br',
      title: 'Olá, eu sou o Lucas! 👋',
      header: 'Desenvolvedor Front-end & Designer UI/UX | Angular | TypeScript | Figma',
      presentation: 'Desenvolvedor Front-end com especializações em Angular, ReactJS, JavaScript, TypeScript, e NodeJS. Minha experiência se estende ao MySQL, Bootstrap 5, combinando habilidades sólidas para criar aplicações web robustas e eficientes. Especializado em Otimização de SEO, implemento estratégias avançadas para aumentar a visibilidade online e melhorar a experiência do usuário.',
      location: 'São Paulo, Brasil',
    },
    {
      language: "en-us",
      title: "Hello, I'm Lucas! 👋",
      header: "Front-end Developer & UI/UX Designer | Angular | TypeScript | Figma",
      presentation: "Front-end Developer specialized in Angular, ReactJS, JavaScript, TypeScript, and NodeJS. Extensive experience with MySQL and Bootstrap 5, combining solid skills to create robust and efficient web applications. Specialized in SEO Optimization, implementing advanced strategies to enhance online visibility and improve user experience.",
      location: "São Paulo, Brazil"
    },
    {
      networkLinks: [
        { name: 'GitHub', link: 'https://www.linkedin.com/in/santiagolucas1/' },
        { name: 'Linkedin', link: 'https://www.linkedin.com/in/santiagolucas1/' },
      ]
    }
  ]

  return (
    <div className="bg-slate-900 h-screen flex items-center">
      <div className="flex flex-row max-w-6xl mx-auto items-center justify-center gap-5">
        <div className="gap-5 flex flex-col">
          <div className="max-w-xl">
            <h1 className="text-gray-200 text-6xl font-semibold">{aboutMe[1].title}</h1>
            <p className="text-slate-300">{aboutMe[1].presentation}</p>
          </div>
          <div className="flex gap-2 text-slate-300 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{aboutMe[1].location}</p>
          </div>
          <div className="flex gap-4">
          </div>
        </div>
        <img src={profilePhoto} alt="" className="rounded-xl w-4/12" />
      </div>
    </div>
  )
}

export default HeroPage
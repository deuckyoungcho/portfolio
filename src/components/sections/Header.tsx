import { Github, Mail, Phone } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const Header = () => {
  const { name, title, contact, profilePicture, yearsOfExperience } =
    resumeData;
    
  return (
    <header className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
      {profilePicture && (
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="w-32 h-32 rounded-full object-cover shadow-lg shrink-0"
        />
      )}

      <div className="flex flex-col items-center md:items-start gap-2 grow">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          {name}
        </h1>
        <p className="text-xl text-gray-600">
          {title} | {yearsOfExperience}
        </p>
        <div className="flex justify-center md:justify-start items-center mt-2 space-x-4 text-gray-600">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center hover:text-blue-600"
          >
            <Mail className="w-4 h-4 mr-1.5" /> {contact.email}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center hover:text-blue-600"
          >
            <Phone className="w-4 h-4 mr-1.5" /> {contact.phone}
          </a>
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-600"
          >
            <Github className="w-4 h-4 mr-1.5" /> {contact.github}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

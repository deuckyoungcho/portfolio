import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import { ArrowRight, GraduationCap } from "lucide-react";

const Education = () => {
  const { education } = resumeData;
  return (
    <Section icon={GraduationCap} title="Education">
      <Card>
        <CardContent className="space-y-2">
          <div className="space-y-4">
            {education.map((edu, index) => (
              <>
                <a
                  key={index}
                  className="flex items-center justify-between group p-4 rounded-xl border border-transparent 
                  transition-all duration-300 ease-in-out cursor-pointer hover:border-gray-300 hover:bg-slate-100 hover:-translate-y-0.5 dark:hover:border-gray-700 dark:hover:bg-gray-800"
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${edu.icon}`}
                    alt={edu.school}
                    className="w-12 h-auto mr-6 sm:w-16"
                  />
                  <div className="flex flex-col grow pr-4">
                    <h3 className="text-md font-bold dark:text-gray-100">{edu.school}</h3>
                    <p className="mt-1 text-sm dark:text-gray-300">{edu.major}</p>
                    <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">{edu.period}</p>
                  </div>
                  <div className="shrink-0">
                    <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
                {index < education.length - 1 && (
                  <hr className="my-4 border-gray-200 dark:border-gray-700" />
                )}
              </>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Education;

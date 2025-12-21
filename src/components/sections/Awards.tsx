import Section from "@/components/Section";
import { Card } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import { Award } from "lucide-react";

const Awards = () => {
  const { awards } = resumeData;
  return (
    <Section icon={Award} title="Awards">
      <Card>
        <div className='flex px-8'>
          <img
            src="/screenshots/awards.png"
            alt="우수사원상"
            className="w-[180px] h-auto rounded-lg"
          />
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col p-6 justify-center">
              <h3 className="font-bold">{award.title}</h3>
              <p className="text-sm text-gray-500">{award.date}</p>
              <p className="text-sm mt-1">{award.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default Awards;

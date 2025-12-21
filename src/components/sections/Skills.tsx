import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/skillData";
import { Code } from "lucide-react";

const Skills = () => {
  const _skills = Object.values(skills);

  return (
    <Section icon={Code} title="Skills">
      <Card>
        <CardContent className="flex flex-wrap gap-3 justify-center">
          {_skills.map(({ label, icon }, index) => (
            <Badge key={index}>
              <img src={icon} alt={label} className="w-[18px] h-[18px]" />
              {label}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Section>
  );
};

export default Skills;

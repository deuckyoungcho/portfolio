import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import { Home } from "lucide-react";

const About = () => {
  const { summary } = resumeData;
  const paragraphs = summary.split("\n").filter((p) => p.trim() !== "");

  return (
    <Section icon={Home} title="About">
      <Card>
        <CardContent className="p-6 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </Section>
  );
};

export default About;

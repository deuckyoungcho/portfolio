import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import { Home } from "lucide-react";

const About = () => {
  const { summary } = resumeData;

  return (
    <Section icon={Home} title="About">
      <Card>
        <CardContent className="p-6 space-y-4">
          <article className="flex flex-col gap-4 text-base leading-relaxed whitespace-pre-line text-gray-800 dark:text-gray-300">
            <p className="text-lg">
              <strong className="text-gray-900 dark:text-gray-100">“{summary.title}”</strong>
            </p>

            {summary.paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </article>
        </CardContent>
      </Card>
    </Section>
  );
};

export default About;

import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { resumeData } from "@/data/resumeData";
import { Briefcase } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { skills } from "@/data/skillData";

const Experience = () => {
  const { experience } = resumeData;
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Section icon={Briefcase} title="Work Experience">
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  {exp.logo ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${exp.logo}`}
                      className="w-[100px] h-auto mb-1"
                    />
                  ) : null}
                  <h3 className="text-xl font-bold dark:text-gray-100">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.role}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {exp.projects.map((proj, pIndex) => (
                <Dialog key={pIndex} hash={proj.id}>
                  <DialogTrigger asChild>
                    <div
                      className="group p-4 rounded-lg border border-transparent flex items-center justify-between
                    transition-all duration-300 ease-in-out cursor-pointer hover:border-gray-300 hover:bg-slate-100 hover:-translate-y-0.5 dark:hover:bg-gray-800 dark:hover:border-gray-700"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${proj.images?.[0]}`}
                        className="w-[100px] h-[60px] mr-4 shrink-0"
                      />
                      <div className="flex flex-col grow pr-2">
                        <h4 className="font-semibold text-md mr-2 dark:text-gray-200">
                          {proj.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {proj.summary}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="flex flex-col sm:max-w-[625px] pt-10 dark:shadow-none">
                    {proj.images && proj.images.length > 0 && (
                      <div className="relative mb-4">
                        <Carousel
                          setApi={setApi}
                          className="w-full max-w-full"
                          plugins={[
                            Autoplay({
                              delay: 3000,
                            }),
                          ]}
                        >
                          <CarouselContent>
                            {proj.images.map((image, i) => (
                              <CarouselItem
                                key={i}
                                className="flex items-center justify-center"
                              >
                                <img
                                  src={`${import.meta.env.BASE_URL}${image}`}
                                  alt={`${proj.title} image ${i + 1}`}
                                  className="max-h-80 object-contain rounded-sm"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                        <div className="py-2 text-center text-sm text-muted-foreground">
                          {Array.from({ length: count }).map((_, i) => (
                            <button
                              key={i}
                              onClick={() => api?.scrollTo(i)}
                              className={cn(
                                "mx-1 h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600",
                                i + 1 === current &&
                                  "bg-gray-800 dark:bg-gray-200"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <DialogHeader>
                      <DialogTitle>{proj.title}</DialogTitle>
                      <div className="text-sm text-muted-foreground">
                        <strong>기간:</strong> {proj.period}
                      </div>
                    </DialogHeader>
                    <div className="overflow-y-auto grid gap-4 py-2">
                      <ul className="text-sm text-foreground leading-relaxed list-inside list-disc">
                        {proj.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {proj.stack?.map((tech, index) => (
                          <Badge key={index}>
                            <img
                              src={`${import.meta.env.BASE_URL}${
                                skills[tech]?.icon ?? ""
                              }`}
                              alt={skills[tech]?.label ?? ""}
                              className="w-[18px] h-[18px]"
                            />
                            {skills[tech]?.label ?? ""}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

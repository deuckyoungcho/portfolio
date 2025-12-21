import React from "react";

const Section: React.FC<{
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => {
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id={id} className="mb-20 scroll-mt-22">
      <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800 dark:text-gray-200">
        <Icon className="w-8 h-8 mr-4 text-primary" />
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;

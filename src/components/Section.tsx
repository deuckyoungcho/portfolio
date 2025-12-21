import React from 'react';

const Section: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode }> = ({ icon: Icon, title, children }) => {
    return (
        <section className="mb-10">
            <h2 className="flex items-center mb-4 text-3xl font-bold text-gray-800">
                <Icon className="w-8 h-8 mr-4 text-primary" />
                {title}
            </h2>
            {children}
        </section>
    );
};

export default Section;

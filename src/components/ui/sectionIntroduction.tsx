interface sectionIntroduction {
  Heading: string;
  Subheading: string;
}

export default function SectionIntroduction({
  Heading,
  Subheading,
}: sectionIntroduction) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {Heading}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{Subheading}</p>
    </div>
  );
}

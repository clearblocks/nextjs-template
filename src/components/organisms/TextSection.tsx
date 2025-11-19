export interface TextSectionProps {
  paragraphs: string[];
  className?: string;
}

export function TextSection({ paragraphs, className = "" }: TextSectionProps): React.ReactElement {
  return (
    <section className={`px-5 py-6 flex flex-col gap-0 ${className}`}>
      <div className="font-family-sans text-base text-black leading-normal">
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p className="mb-0">{paragraph}</p>
            {index < paragraphs.length - 1 && <p className="mb-0 text-base">&nbsp;</p>}
          </div>
        ))}
      </div>
    </section>
  );
}


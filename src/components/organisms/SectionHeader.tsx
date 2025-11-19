export interface SectionHeaderProps {
  title: string;
  id?: string;
  height?: string;
  hasShadow?: boolean;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  id,
  height = "h-[120px]",
  hasShadow = false,
  subtitle,
  className = "",
}: SectionHeaderProps): React.ReactElement {
  const shadowClass = hasShadow ? "shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" : "";

  return (
    <section
      id={id}
      className={`bg-[#f2ebeb] ${height} flex flex-col items-center justify-center px-4 ${shadowClass} ${className}`}
    >
      <h2 className="font-family-sans text-[26px] text-black leading-normal text-center">{title}</h2>
      {subtitle && <p className="font-family-sans text-xl text-black text-center">{subtitle}</p>}
    </section>
  );
}


export default function SectionHead({
  eyebrow,
  heading,
  sub,
  align = 'center',
}: {
  eyebrow?: string;
  heading: string;
  sub?: string;
  align?: 'center' | 'left';
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`${alignCls} max-w-2xl ${align === 'center' ? '' : 'max-w-none'}`}>
      {eyebrow && (
        <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-5">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[28px] md:text-[40px] leading-[1.15] font-semibold tracking-tightest text-ink">
        {heading}
      </h2>
      {sub && (
        <p className="mt-5 text-[15px] md:text-[16px] text-muted leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

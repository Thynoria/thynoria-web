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
        <div className="text-[12px] font-mono tracking-eyebrow text-accent mb-5 uppercase">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[32px] md:text-[44px] leading-[1.12] font-semibold tracking-tightest text-ink">
        {heading}
      </h2>
      {sub && (
        <p className="mt-6 text-[16px] md:text-[18px] text-muted-strong leading-[1.65]">
          {sub}
        </p>
      )}
    </div>
  );
}

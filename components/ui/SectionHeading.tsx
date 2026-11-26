import Reveal from "@/components/ui/Reveal";

/** Large two-line title with the description aligned to its baseline. */
export default function SectionHeading({ title, description }: { title: [string, string]; description: string }) {
  return (
    <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end">
      <h2 className="title-gradient flex-1 pb-1 text-[clamp(30px,9.4vw,36px)] sm:text-[clamp(36px,5vw,72px)] font-semibold leading-none tracking-[-0.045em]">
        {title[0]}
        <br />
        {title[1]}
      </h2>
      <p className="max-w-[340px] text-[17px] leading-[27px] text-muted">{description}</p>
    </Reveal>
  );
}

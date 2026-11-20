import type { ReactNode } from "react";

type Entry = {
  title: string;
  detail: string;
  period: string;
};

const ENTRIES: Entry[] = [
  {
    title: "Academic Excellence Award",
    detail: "Chandigarh University",
    period: "April 2025",
  },
  {
    title: "IndiaAI Fellow",
    detail: "1 of 150 selected across India",
    period: "Jan 2025",
  },
  {
    title: "Amazon ML Challenge",
    detail: "Ranked 12th of 26,000",
    period: "April 2023",
  },
  {
    title: "CISCO & NASSCOM Hackathon",
    detail: "Winner of a 4-day hackathon",
    period: "Feb 2023",
  },
  {
    title: "Chandigarh Police Hackathon",
    detail: "Winner",
    period: "Nov 2022",
  },
  {
    title: "Merit Scholarship",
    detail: "50% scholarship through undergrad",
    period: "Sep 2021",
  },
  {
    title: "DMLS Book Club",
    detail: "Teaching assistant with Chip Huyen",
    period: "April 2024 – June 2024",
  },
];

const ROW_HEIGHT = 64;

export function Achievements(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Achievements
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.map((entry) => (
            <li
              key={`${entry.title}-${entry.period}`}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <Mark title={entry.title} />
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {entry.title}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.detail}
                  <span className="text-foreground/30 mx-2">•</span>
                  <span className="text-foreground/55">{entry.period}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Mark({ title }: { title: string }): ReactNode {
  return (
    <span
      className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center border"
      aria-hidden="true"
      style={{ borderRadius: 14 }}
    >
      <span className="text-foreground/60 text-[18px] font-semibold tracking-tight">
        {title.charAt(0)}
      </span>
    </span>
  );
}

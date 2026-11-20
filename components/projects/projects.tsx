import {
  ArrowRight,
  BookOpenText,
  Boxes,
  FileText,
  Gauge,
  Route,
  ScanLine,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href?: string;
};

const IMAGE_RATIO = 1200 / 900;

const PROJECTS: Project[] = [
  {
    id: "gateway",
    icon: Route,
    iconLabel: "AI Gateway",
    title:
      "A gateway that routes each prompt to the model tier the task actually needs.",
    description:
      "Department metadata, context-window heuristics, and an in-house complexity classifier cut average inference cost by 27%.",
    meta: "AI Engineer, PurpleMerit, 2026",
    imageRatio: IMAGE_RATIO,
    image: "/projects/gateway.png",
    imageAlt: "Abstract cover for the PurpleMerit AI gateway",
  },
  {
    id: "zysec",
    icon: Gauge,
    iconLabel: "ZysecAI",
    title: "A 1.5B coder model that replaced a 70B call for production JSON.",
    description:
      "Fine-tuning Qwen 2.5 Coder 1.5B on cached telemetry cut inference latency by 11x and token cost by 96%.",
    meta: "SDE-1 AI, ZysecAI, 2025",
    imageRatio: IMAGE_RATIO,
    image: "/projects/zysec.png",
    imageAlt: "Abstract cover for the ZysecAI inference work",
  },
  {
    id: "storyteller",
    icon: BookOpenText,
    iconLabel: "Story Teller",
    title:
      "A 124M GPT trained from scratch until it could write multi-sentence stories.",
    description:
      "Trained on TinyStories with FlashAttention, bf16, and tensor parallelism. Throughput rose from 14k to 41k tokens/s, and validation loss landed at 1.1.",
    meta: "Independent, 2025",
    imageRatio: IMAGE_RATIO,
    image: "/projects/storyteller.png",
    imageAlt: "Abstract cover for the GPT story teller",
  },
  {
    id: "rapidai",
    icon: Boxes,
    iconLabel: "RapidAI",
    title: "A small PyTorch framework that keeps the training loop readable.",
    description:
      "Callback hooks plus native MLflow and Weights & Biases tracking, published on PyPI for a deep learning capstone.",
    meta: "Capstone, 2024",
    imageRatio: IMAGE_RATIO,
    image: "/projects/rapidai.png",
    imageAlt: "Abstract cover for RapidAI",
    href: "https://github.com/m-gopichand/rapidai",
  },
  {
    id: "denoiser",
    icon: ScanLine,
    iconLabel: "Denoiser",
    title:
      "Diffusion denoising for endoscopy images, distilled to about 10x faster sampling.",
    description:
      "Progressive distillation kept PSNR, SSIM, CNR, and lesion-detection sensitivity roughly in place while cutting inference time.",
    meta: "Research Intern, Samsung R&D, 2023",
    imageRatio: IMAGE_RATIO,
    image: "/projects/denoiser.png",
    imageAlt: "Abstract cover for the endoscopy denoiser",
  },
  {
    id: "ids",
    icon: FileText,
    iconLabel: "IEMENTech",
    title:
      "A deep learning intrusion detection system, published at IEMENTech 2023.",
    description:
      "Improved Network Intrusion Detection System Using Deep Learning, with Puvvala, Kada, and Hariharan.",
    meta: "Publication, 2023",
    imageRatio: IMAGE_RATIO,
    image: "/projects/ids.png",
    imageAlt: "Abstract cover for the intrusion detection paper",
    href: "https://doi.org/10.1109/IEMENTech60402.2023.10423459",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]">
              Selected work
            </h2>
            <p className="text-foreground/65 max-w-[33ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
              Systems, models, and research from the last few years.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border-foreground/8 focus-ring group bg-background text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  const className = `project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5${
    project.href ? " cursor-pointer" : ""
  }`;
  const body = (
    <>
      <header className="flex items-center gap-2.5 px-1 pt-2">
        <span className="border-foreground/10 bg-background inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
          <Icon className="text-foreground h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="text-foreground text-sm font-medium tracking-tight">
          {project.iconLabel}
        </span>
      </header>

      <div
        className="project-card__image ring-foreground/5 bg-foreground/5 relative w-full overflow-hidden rounded-2xl ring-1"
        style={{ aspectRatio: project.imageRatio }}
      >
        <div className="project-card__image-inner">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
            priority={index < 2}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 px-1 pb-1">
        <h3 className="text-foreground text-[20px] leading-[1.2] font-medium tracking-tight sm:text-[22px]">
          {project.title}
        </h3>
        <p className="text-foreground/65 text-[14px] leading-normal tracking-tight sm:text-[15px]">
          {project.description}
        </p>
      </div>

      <p className="text-foreground/50 px-1 pb-2 text-[12px] tracking-tight">
        {project.meta}
      </p>
    </>
  );

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      {project.href ? (
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {body}
        </Link>
      ) : (
        <article className={className}>{body}</article>
      )}
    </FadeIn>
  );
}

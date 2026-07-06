import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: Skill[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  retrospective: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  period: string;
};

export type BlogPost = {
  title: string;
  url: string;
  publishedAt: string;
  tags: string[];
  summary: string;
};

export type ResumeSection = {
  title: string;
  items: Array<{
    title: string;
    meta: string;
    description: string;
  }>;
};

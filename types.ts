import React from 'react';

export interface Project {
  title: string;
  stack: string;
  role: string;
  features: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface SocialLink {
  name: string;
  url:string;
  icon: React.ReactNode;
}

export interface TimelineItem {
  date: string;
  title: string;
  location: string;
  description: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  icon?: React.ReactNode;
}

export interface Language {
  name: string;
  level: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface Achievement {
    title: string;
    issuer: string;
    description: string;
    icon?: React.ReactNode;
}
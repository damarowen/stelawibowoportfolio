import React from "react";

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

const iconSize = "w-8 h-8";

export const toolItems: ToolItem[] = [
  {
    name: "Meta Business Suite",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6a2.6 2.6 0 012.6-2.55c.27 0 .53.04.77.12V9.64a5.78 5.78 0 00-.77-.05A5.73 5.73 0 004 15.32 5.73 5.73 0 009.86 21a5.73 5.73 0 005.86-5.68V9.01a7.35 7.35 0 004.28 1.37V7.3s-1.94.09-3.4-1.48z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
      </svg>
    ),
  },
  {
    name: "Canva",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5c-1.1.87-2.42 1.37-3.82 1.37-3.17 0-5.55-2.74-5.55-5.87 0-3.13 2.38-5.87 5.55-5.87 1.4 0 2.72.5 3.82 1.37l-1.68 2.1A3.2 3.2 0 0011.68 7.5C9.72 7.5 8.13 9.33 8.13 11s1.59 3.5 3.55 3.5c.84 0 1.61-.37 2.14-1l1.68 2z"/>
      </svg>
    ),
  },
  {
    name: "CapCut",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2.5l6 3.5-6 3.5v-7z"/>
      </svg>
    ),
  },
  {
    name: "Buffer",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 3h-2v18h2V3zM13 9h-2v12h2V9zM6 15H4v6h2v-6z"/>
      </svg>
    ),
  },
  {
    name: "Sprout Social",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.5 2 7.2 3.3 6 5.3 4.3 5.8 3 7.4 3 9.3c0 2 1.3 3.7 3.2 4.2-.2.8-.2 1.7.1 2.5.5 1.5 1.8 2.6 3.3 2.9.3 1.8 1.8 3.1 3.4 3.1s3.1-1.3 3.4-3.1c1.5-.3 2.8-1.4 3.3-2.9.3-.8.3-1.7.1-2.5C21.7 13 23 11.3 23 9.3c0-1.9-1.3-3.5-3-4C18.8 3.3 16.5 2 14 2h-2z"/>
      </svg>
    ),
  },
  {
    name: "Later",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-4v-2h2V7h2v6z"/>
      </svg>
    ),
  },
  {
    name: "Brandwatch",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.36L19.09 8 12 11.64 4.91 8 12 4.36zM4 9.38l7 3.5v7.74l-7-3.5V9.38zm16 0v7.74l-7 3.5v-7.74l7-3.5z"/>
      </svg>
    ),
  },
  {
    name: "BuzzSumo",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
  },
  {
    name: "Metricool",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-4h2v16h-2V5zm4 6h2v10h-2V11zm4-4h2v14h-2V7z"/>
      </svg>
    ),
  },
  {
    name: "Claude AI",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-1.41-1.41L13.17 12 9.59 8.41 11 7l5 5-5 5z"/>
      </svg>
    ),
  },
  {
    name: "Jasper AI",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8L8 14 2 9.2h7.6L12 2z"/>
      </svg>
    ),
  },
  {
    name: "MidJourney",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 14.17a5.15 5.15 0 00-.44-4.23 5.2 5.2 0 00-3.56-2.5 5.15 5.15 0 00-3.88-1.72 5.2 5.2 0 00-4.96 3.6 5.15 5.15 0 00-3.44 2.5 5.2 5.2 0 00.64 6.08 5.15 5.15 0 00.44 4.23 5.2 5.2 0 003.56 2.5 5.15 5.15 0 003.88 1.72 5.2 5.2 0 004.96-3.6 5.15 5.15 0 003.44-2.5 5.2 5.2 0 00-.64-6.08zM14.4 21.15c-.9.26-1.87.1-2.65-.44l.04-.02 4.4-2.54a.72.72 0 00.36-.62v-6.2l1.86 1.07a.07.07 0 01.04.05v5.14a3.5 3.5 0 01-4.05 3.56zm-8.7-3.27a3.47 3.47 0 01-.42-2.35l.05.03 4.4 2.54a.72.72 0 00.71 0l5.37-3.1v2.14a.07.07 0 01-.03.06l-4.45 2.57a3.5 3.5 0 01-5.63-1.89zm-1.13-8.12a3.47 3.47 0 011.83-1.53v5.23a.72.72 0 00.36.62l5.37 3.1-1.86 1.07a.07.07 0 01-.07 0L5.75 15.7a3.5 3.5 0 01-1.18-5.94zm14.95 3.48l-5.37-3.1 1.86-1.07a.07.07 0 01.07 0l4.45 2.57a3.5 3.5 0 01-.54 6.32v-5.1a.72.72 0 00-.36-.62h-.11zm1.85-2.37l-.05-.03-4.4-2.54a.72.72 0 00-.71 0L11.84 11V8.86a.07.07 0 01.03-.06l4.45-2.57a3.5 3.5 0 015.05 3.64zm-11.64 3.83L7.87 12.8a.07.07 0 01-.04-.06V7.6a3.5 3.5 0 015.59-2.8l-.04.02-4.4 2.54a.72.72 0 00-.36.62l.01 6.2v-.28zm1.01-2.18L12 11.5l2.39 1.38v2.75L12 17l-2.39-1.38v-2.75l.13-.07z"/>
      </svg>
    ),
  },
];

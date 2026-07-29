"use client";

import { Service } from "../../data/services";

interface ServiceRowProps {
  service: Service;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function ServiceRow({ service, onHoverStart, onHoverEnd }: ServiceRowProps) {
  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="reveal group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-white/10 py-8 transition-colors duration-500 md:py-10"
    >
      <span className="text-lg font-medium text-gray-500 transition-colors duration-500 group-hover:text-violet-400">
        {service.number}
      </span>

      <div>
        <h3 className="text-3xl font-black leading-none tracking-tight text-white transition-transform duration-500 group-hover:translate-x-4 md:text-5xl">
          {service.title}
        </h3>
        <p className="mt-2 max-w-md text-sm text-gray-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-base">
          {service.description}
        </p>
      </div>

      <span className="hidden text-2xl text-gray-600 transition-all duration-500 group-hover:-rotate-45 group-hover:text-white md:block">
        →
      </span>
    </div>
  );
}
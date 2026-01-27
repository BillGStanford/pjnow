// short-singularity/src/utils/contentRenderer.tsxa

import React from 'react';
import type { ContentBlock } from '../types';

interface ContentRendererProps {
  content: ContentBlock[];
}

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="article-content">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index}>{block.text}</p>;

          case 'heading': {
            // Fix: Use React.ElementType instead of keyof JSX.IntrinsicElements
            const HeadingTag = `h${block.level}` as React.ElementType;

            return (
              <HeadingTag key={index}>
                {block.text}
              </HeadingTag>
            );
          }

          case 'quote':
            return (
              <blockquote key={index}>
                {block.text}
                {block.attribution && (
                  <footer className="mt-2 text-base not-italic font-sans text-gray-600 dark:text-gray-400">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          case 'image':
            return (
              <figure key={index} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt}
                  loading="lazy"
                  className="w-full h-auto"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case 'list': {
            const ListTag = block.ordered ? 'ol' : 'ul';

            return (
              <ListTag key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ListTag>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
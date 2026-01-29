// src/utils/contentRenderer.tsx
import React from 'react';
import type { ContentBlock, EmbeddedLink } from '../types';

interface ContentRendererProps {
  content: ContentBlock[];
  embeddedLinks?: EmbeddedLink[];
}

export function ContentRenderer({ content, embeddedLinks = [] }: ContentRendererProps) {
  // Create a map of link text to URL for easy lookup
  const linkMap = new Map<string, string>();
  embeddedLinks.forEach(link => {
    linkMap.set(link.text, link.url);
  });

  return (
    <div className="article-content">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index}>
                {renderTextWithHtml(block.text, linkMap)}
              </p>
            );

          case 'heading': {
            const HeadingTag = `h${block.level}` as React.ElementType;
            return (
              <HeadingTag key={index}>
                {renderTextWithHtml(block.text, linkMap)}
              </HeadingTag>
            );
          }

          case 'quote':
            return (
              <blockquote key={index}>
                {renderTextWithHtml(block.text, linkMap)}
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
                  <li key={i}>{renderTextWithHtml(item, linkMap)}</li>
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

function renderTextWithHtml(text: string, linkMap: Map<string, string>): React.ReactNode {
  // First, handle all HTML tags
  const htmlTagRegex = /<(b|i|u|strong|em|a)(?:\s+[^>]*)?>(.*?)<\/\1>|<a\s+href="([^"]*)"(?:\s+[^>]*)?>(.*?)<\/a>/g;
  let processedText = text;
  const elements: React.ReactNode[] = [];
  let match;
  let lastIndex = 0;
  
  while ((match = htmlTagRegex.exec(text)) !== null) {
    // Add the text before the HTML tag
    if (match.index > lastIndex) {
      elements.push(processLinks(text.substring(lastIndex, match.index), linkMap));
    }
    
    // Process the HTML tag
    if (match[1] && match[2]) { // Standard HTML tags like <b>, <i>, etc.
      const tag = match[1];
      const content = processLinks(match[2], linkMap);
      
      if (tag === 'b' || tag === 'strong') {
        elements.push(<strong key={match.index}>{content}</strong>);
      } else if (tag === 'i' || tag === 'em') {
        elements.push(<em key={match.index}>{content}</em>);
      } else if (tag === 'u') {
        elements.push(<u key={match.index}>{content}</u>);
      }
    } else if (match[3] && match[4]) { // <a> tags with href
      const href = match[3];
      const content = match[4];
      elements.push(
        <a key={match.index} href={href} target="_blank" rel="noopener noreferrer" className="article-link">
          {content}
        </a>
      );
    }
    
    lastIndex = htmlTagRegex.lastIndex;
  }
  
  // Add any remaining text
  if (lastIndex < text.length) {
    elements.push(processLinks(text.substring(lastIndex), linkMap));
  }
  
  return <>{elements}</>;
}

function processLinks(text: string, linkMap: Map<string, string>): React.ReactNode {
  // Check if the text contains any of our embedded link phrases
  for (const [linkText, url] of linkMap.entries()) {
    if (text.includes(linkText)) {
      // Split the text by the link phrase
      const parts = text.split(new RegExp(`(${linkText})`, 'g'));
      
      return (
        <>
          {parts.map((part, index) => {
            if (part === linkText) {
              return (
                <a 
                  key={index} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  {part}
                </a>
              );
            }
            return <span key={index}>{part}</span>;
          })}
        </>
      );
    }
  }
  
  return text;
}
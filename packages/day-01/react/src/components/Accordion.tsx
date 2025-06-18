import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${activeId === item.id ? 'active' : ''}`}
        >
          <button
            className="accordion-header"
            onClick={() => toggleItem(item.id)}
            aria-expanded={activeId === item.id}
          >
            {item.title}
          </button>
          <div
            className="accordion-content"
            style={{
              maxHeight: activeId === item.id ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-out',
            }}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}; 
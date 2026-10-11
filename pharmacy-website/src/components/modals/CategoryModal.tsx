import React, { useEffect } from 'react';
import { X, CheckCircle2, Info, MessageCircle } from 'lucide-react';
import type { CategoryItem } from '../../types/pharmacy';

interface CategoryModalProps {
  category: CategoryItem | null;
  onClose: () => void;
  onInquire: (categoryTitle: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  onClose,
  onInquire
}) => {
  // Close on Escape key press
  useEffect(() => {
    if (!category) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103B2B]/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-[#B7D8C0] p-6 sm:p-8 shadow-xl space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
              {category.subtitle}
            </span>
            <h3
              id="category-modal-title"
              className="text-2xl font-semibold text-[#103B2B] mt-1"
            >
              {category.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close category guide"
            className="p-2 rounded-full bg-[#EAF5EE] text-[#103B2B] hover:bg-[#B7D8C0]/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm sm:text-base text-[#174D35] leading-relaxed">
          {category.description}
        </p>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#174D35]">
            Areas of Support
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {category.examples.map((ex) => (
              <li
                key={ex}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EAF5EE]/70 text-sm text-[#103B2B]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2E8B57] shrink-0" />
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-2xl bg-[#EAF5EE] border border-[#B7D8C0] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#2E8B57] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#174D35] leading-relaxed">
            <strong className="font-semibold text-[#103B2B] block mb-0.5">
              Pharmacist Note
            </strong>
            {category.guidanceNote}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[#B7D8C0] text-sm font-medium text-[#174D35] hover:bg-[#EAF5EE] cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onInquire(category.title);
              onClose();
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2E8B57] hover:bg-[#174D35] text-white text-sm font-medium transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire About {category.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

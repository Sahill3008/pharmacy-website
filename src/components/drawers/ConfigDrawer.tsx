import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Star } from 'lucide-react';
import type { PharmacyConfig, VerifiedReview } from '../../types/pharmacy';
import { INITIAL_PHARMACY_CONFIG } from '../../data/initialPharmacyConfig';
import { MOCK_KHARADI_REVIEWS } from '../../data/mockReviews';

interface ConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: PharmacyConfig;
  setConfig: React.Dispatch<React.SetStateAction<PharmacyConfig>>;
}

export const ConfigDrawer: React.FC<ConfigDrawerProps> = ({
  isOpen,
  onClose,
  config,
  setConfig
}) => {
  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTime, setNewTime] = useState('Recently');
  const [newComment, setNewComment] = useState('');
  const [showAddReview, setShowAddReview] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: VerifiedReview = {
      id: `rev-${Date.now()}`,
      authorName: newAuthor.trim(),
      rating: newRating,
      relativeTime: newTime.trim() || 'Recently',
      comment: newComment.trim()
    };

    setConfig((prev) => ({
      ...prev,
      verifiedReviews: [newRev, ...prev.verifiedReviews]
    }));

    setNewAuthor('');
    setNewComment('');
    setShowAddReview(false);
  };

  const handleRemoveReview = (id: string) => {
    setConfig((prev) => ({
      ...prev,
      verifiedReviews: prev.verifiedReviews.filter((r) => r.id !== id)
    }));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-config-title"
      className="fixed inset-0 z-50 flex justify-end bg-[#103B2B]/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg bg-white h-full overflow-y-auto p-6 sm:p-8 border-l border-[#B7D8C0] shadow-2xl flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#EAF5EE]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-1">
                <img
                  src="/logo.png"
                  alt="VSB Pharmacy"
                  className="h-7 w-auto object-contain"
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                  Verified Business Configuration
                </span>
              </div>
              <h3
                id="store-config-title"
                className="text-xl font-semibold text-[#103B2B]"
              >
                Update Real Pharmacy Details
              </h3>
              <p className="text-xs text-[#174D35]/80 mt-1">
                Per project guidelines, no business names, addresses, or
                credentials are fabricated. Enter verified details below to
                update the live page immediately.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close configuration panel"
              className="p-2 rounded-full bg-[#EAF5EE] text-[#103B2B] hover:bg-[#B7D8C0]/50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 text-sm">
            {/* Store Name & Tagline */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                Pharmacy Name
              </label>
              <input
                type="text"
                value={config.storeName}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, storeName: e.target.value }))
                }
                className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                Store Tagline
              </label>
              <input
                type="text"
                value={config.tagline}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, tagline: e.target.value }))
                }
                className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
              />
            </div>

            {/* Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                  Phone Display
                </label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  value={config.phoneDisplay}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      phoneDisplay: e.target.value,
                      phoneDial: e.target.value.replace(/[^0-9+]/g, '')
                    }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                  WhatsApp (Digits with Country Code)
                </label>
                <input
                  type="text"
                  placeholder="919876543210"
                  value={config.whatsappNumber}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, whatsappNumber: e.target.value }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
            </div>

            {/* Address & Landmark */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                Street Address
              </label>
              <input
                type="text"
                value={config.addressLines.join(', ')}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    addressLines: [e.target.value]
                  }))
                }
                className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                  City, State &amp; PIN
                </label>
                <input
                  type="text"
                  value={config.cityStatePin}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, cityStatePin: e.target.value }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                  Nearby Landmark
                </label>
                <input
                  type="text"
                  value={config.landmark}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, landmark: e.target.value }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
            </div>

            {/* Opening Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                  Operating Days
                </label>
                <input
                  type="text"
                  value={config.openingHours.days}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      openingHours: {
                        ...prev.openingHours,
                        days: e.target.value
                      }
                    }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-1">
                  Opening Hours
                </label>
                <input
                  type="text"
                  value={config.openingHours.hours}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      openingHours: {
                        ...prev.openingHours,
                        hours: e.target.value
                      }
                    }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
            </div>

            {/* Google Links */}
            <div className="pt-2 border-t border-[#EAF5EE] space-y-3">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                Google Maps &amp; Profile Links
              </span>
              <div>
                <label className="block text-xs font-medium text-[#174D35] mb-1">
                  Google Maps URL
                </label>
                <input
                  type="text"
                  placeholder="https://maps.google.com/..."
                  value={config.googleMapsUrl === '#location' ? '' : config.googleMapsUrl}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      googleMapsUrl: e.target.value.trim() || '#location'
                    }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#174D35] mb-1">
                  Google Maps Embed URL (Interactive Map)
                </label>
                <input
                  type="text"
                  placeholder="https://maps.google.com/maps?q=...&output=embed"
                  value={config.googleMapsEmbedUrl || ''}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      googleMapsEmbedUrl: e.target.value.trim()
                    }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#174D35] mb-1">
                  Google Review Profile URL
                </label>
                <input
                  type="text"
                  placeholder="https://g.page/r/.../review"
                  value={config.googleReviewProfileUrl}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      googleReviewProfileUrl: e.target.value.trim()
                    }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
            </div>

            {/* Pharmacist Details */}
            <div className="pt-2 border-t border-[#EAF5EE] space-y-3">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                Pharmacist Details ({config.pharmacist.experienceYears} Years Experience)
              </span>
              <div>
                <label className="block text-xs font-medium text-[#174D35] mb-1">
                  Pharmacist Name
                </label>
                <input
                  type="text"
                  value={config.pharmacist.name}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      pharmacist: {
                        ...prev.pharmacist,
                        name: e.target.value
                      }
                    }))
                  }
                  className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#174D35] mb-1">
                    Verified Qualification
                  </label>
                  <input
                    type="text"
                    value={config.pharmacist.qualificationPlaceholder}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        pharmacist: {
                          ...prev.pharmacist,
                          qualificationPlaceholder: e.target.value
                        }
                      }))
                    }
                    className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#174D35] mb-1">
                    Registration No.
                  </label>
                  <input
                    type="text"
                    value={config.pharmacist.registrationPlaceholder}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        pharmacist: {
                          ...prev.pharmacist,
                          registrationPlaceholder: e.target.value
                        }
                      }))
                    }
                    className="w-full rounded-xl border border-[#B7D8C0] px-3.5 py-2 text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                  />
                </div>
              </div>
            </div>

            {/* Verified Google Reviews Management */}
            <div className="pt-2 border-t border-[#EAF5EE] space-y-3">
              <div className="flex items-center justify-between">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                  Google Reviews ({config.verifiedReviews.length > 0 ? `${config.verifiedReviews.length} Custom` : 'Using Mock Fallback'})
                </span>
                <button
                  type="button"
                  onClick={() => setShowAddReview(!showAddReview)}
                  className="inline-flex items-center gap-1 text-xs text-[#2E8B57] font-semibold hover:text-[#174D35] cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddReview ? 'Cancel' : 'Add Review'}</span>
                </button>
              </div>

              {config.verifiedReviews.length === 0 ? (
                <div className="p-3 rounded-xl bg-[#EAF5EE]/70 border border-[#B7D8C0] text-xs space-y-2">
                  <p className="text-[#174D35] leading-relaxed">
                    <strong>Mock Fallback Active:</strong> Displaying 6 realistic Kharadi customer reviews on the website until you add custom reviews.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        verifiedReviews: MOCK_KHARADI_REVIEWS
                      }))
                    }
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-[#B7D8C0] text-[#103B2B] hover:border-[#2E8B57] text-xs font-medium cursor-pointer shadow-xs transition-colors"
                  >
                    Load 6 Mock Reviews into Editor
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs text-[#174D35]">
                  <span>Showing custom reviews</span>
                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        verifiedReviews: []
                      }))
                    }
                    className="text-xs text-[#2E8B57] hover:underline cursor-pointer"
                  >
                    Reset to Mock Fallback
                  </button>
                </div>
              )}

              {showAddReview && (
                <form
                  onSubmit={handleAddReview}
                  className="p-3 rounded-2xl bg-[#EAF5EE]/60 border border-[#B7D8C0] space-y-2.5 text-xs"
                >
                  <div>
                    <label className="block text-[#174D35] font-medium mb-1">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full rounded-lg border border-[#B7D8C0] px-2.5 py-1.5 text-sm bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[#174D35] font-medium mb-1">
                        Rating (1-5)
                      </label>
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                        className="w-full rounded-lg border border-[#B7D8C0] px-2.5 py-1.5 bg-white"
                      >
                        {[5, 4, 3, 2, 1].map((r) => (
                          <option key={r} value={r}>
                            {r} Stars
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#174D35] font-medium mb-1">
                        Time
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2 weeks ago"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        className="w-full rounded-lg border border-[#B7D8C0] px-2.5 py-1.5 bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#174D35] font-medium mb-1">
                      Review Comment
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Genuine feedback text..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full rounded-lg border border-[#B7D8C0] p-2 bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-[#2E8B57] text-white font-medium hover:bg-[#174D35] cursor-pointer"
                  >
                    Save Verified Review
                  </button>
                </form>
              )}

              {config.verifiedReviews.length > 0 && (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {config.verifiedReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-[#EAF5EE]/40 border border-[#B7D8C0]/60 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-1 font-semibold text-[#103B2B]">
                          <span>{rev.authorName}</span>
                          <span className="flex items-center text-[#2E8B57]">
                            <Star className="w-3 h-3 fill-current" /> {rev.rating}
                          </span>
                        </div>
                        <p className="text-[#174D35] line-clamp-1">{rev.comment}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveReview(rev.id)}
                        className="text-red-500 hover:text-red-700 p-1 cursor-pointer shrink-0"
                        title="Remove review"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#EAF5EE] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setConfig(INITIAL_PHARMACY_CONFIG)}
            className="px-4 py-2.5 rounded-full border border-[#B7D8C0] text-xs font-medium text-[#174D35] hover:bg-[#EAF5EE] cursor-pointer"
          >
            Reset to Placeholders
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#2E8B57] hover:bg-[#174D35] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Done &amp; Preview Page
          </button>
        </div>
      </div>
    </div>
  );
};

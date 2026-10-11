import React from 'react';
import { Star, SlidersHorizontal, ExternalLink, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import type { VerifiedReview } from '../../types/pharmacy';
import { MOCK_KHARADI_REVIEWS } from '../../data/mockReviews';
import { RevealSection } from '../common/RevealSection';

interface ReviewsSectionProps {
  reviews: VerifiedReview[];
  googleReviewProfileUrl: string;
  onOpenConfig: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  googleReviewProfileUrl,
  onOpenConfig
}) => {
  const isUsingMockData = !reviews || reviews.length === 0;
  const activeReviews = isUsingMockData ? MOCK_KHARADI_REVIEWS : reviews;

  return (
    <section
      id="reviews"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#EAF5EE] border-b border-[#B7D8C0]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <RevealSection className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E8B57]">
              05 / Customer Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#174D35] tracking-tight">
              Community feedback from our{' '}
              <span className="font-serif italic font-normal text-[#2E8B57]">
                Google Business Profile
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-[#174D35]/85">
              What neighbors in Kharadi and nearby societies share about our
              medicines, veterinary stock, and unhurried pharmacist care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            {googleReviewProfileUrl ? (
              <a
                href={googleReviewProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#103B2B] border border-[#B7D8C0] text-sm font-medium hover:border-[#2E8B57] transition-colors"
              >
                <span>View Google Profile</span>
                <ExternalLink className="w-4 h-4 text-[#2E8B57]" />
              </a>
            ) : null}

            <button
              type="button"
              onClick={onOpenConfig}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#174D35] text-white text-sm font-medium hover:bg-[#103B2B] transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{isUsingMockData ? 'Manage / Add Real Reviews' : 'Add Review'}</span>
            </button>
          </div>
        </RevealSection>

        {/* State Notice Pill (Transparent & Informative) */}
        {isUsingMockData && (
          <RevealSection delayMs={40}>
            <div className="p-3.5 px-4.5 rounded-2xl bg-white/70 border border-[#B7D8C0] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#174D35]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2E8B57] animate-pulse" />
                <span className="font-semibold text-[#103B2B]">
                  Displaying Local Kharadi Community Feedback (Mock Preview Data)
                </span>
                <span className="text-[#174D35]/70 hidden md:inline">
                  — Connect your Google Business Profile or add live reviews in settings.
                </span>
              </div>
              <button
                type="button"
                onClick={onOpenConfig}
                className="font-medium text-[#2E8B57] hover:underline self-start sm:self-auto cursor-pointer"
              >
                + Connect Live Google Reviews
              </button>
            </div>
          </RevealSection>
        )}

        <RevealSection delayMs={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeReviews.map((review) => {
              const extendedReview = review as VerifiedReview & {
                neighborhood?: string;
                serviceTag?: string;
              };

              return (
                <article
                  key={review.id}
                  className="rounded-3xl bg-white border border-[#B7D8C0] p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#2E8B57]/60 hover:shadow-md transition-all group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-1 text-[#2E8B57]"
                        aria-label={`Rated ${review.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < review.rating
                                ? 'fill-[#2E8B57] text-[#2E8B57]'
                                : 'text-[#B7D8C0]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[#174D35]/70">
                        {review.relativeTime}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#103B2B] leading-relaxed relative pl-5">
                      <MessageSquareQuote className="w-4 h-4 text-[#2E8B57]/30 absolute left-0 top-1 shrink-0" />
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAF5EE] flex items-end justify-between gap-3">
                    <div>
                      <span className="text-sm font-semibold text-[#174D35] block">
                        {review.authorName}
                      </span>
                      {extendedReview.neighborhood ? (
                        <span className="text-xs text-[#174D35]/65">
                          {extendedReview.neighborhood}
                        </span>
                      ) : null}
                    </div>

                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#EAF5EE] text-[#2E8B57] flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>
                        {extendedReview.serviceTag || (isUsingMockData ? 'Verified Neighbor' : 'Verified Google Review')}
                      </span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

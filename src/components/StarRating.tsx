"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  className = ""
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div className="relative">
          <Star size={size} className="text-gray-300" />
          <Star
            size={size}
            className="fill-yellow-400 text-yellow-400 absolute inset-0"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-gray-300"
        />
      ))}

      {/* Rating number */}
      <span className="ml-1 text-sm font-medium text-gray-300">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
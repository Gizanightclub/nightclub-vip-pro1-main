import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تقييمات نايت كلوب مصر - آراء العملاء والزوار',
  description: 'اقرأ تقييمات نايت كلوب مصر من الزوار الحقيقيين! صور، فيديوهات، وتجارب شخصية. احجز بناءً على التقييمات.',
  keywords: ['تقييمات نايت كلوب مصر', 'آراء نايت كلوب', 'تجارب الزوار']
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="reviews-silo">
      <nav className="reviews-nav">
        
        <ul>
        </ul>
      </nav>
      {children}
    </div>
  )
}
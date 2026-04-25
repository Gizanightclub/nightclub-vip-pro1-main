import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل نايت كلوب مصر - أدلة شاملة للسهرات والحجز',
  description: 'دليل شامل لنايت كلوب مصر! تعلم كيف تحجز، اختر المكان المناسب، واستمتع بسهرة آمنة. نصائح من خبراء.',
  keywords: ['دليل نايت كلوب مصر', 'كيف تحجز نايت كلوب', 'نصائح السهرات في مصر']
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="guides-silo">
      <nav className="guides-nav">
        <ul>
        </ul>
      </nav>
      {children}
    </div>
  )
}
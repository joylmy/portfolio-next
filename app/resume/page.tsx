import Link from 'next/link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function PDFLink() {
  return (
    <div>
      {/* <h1>Download PDF</h1> */}
      <Link href="/pdf/resume.pdf" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </Link>
    </div>
  )
}

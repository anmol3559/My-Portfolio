'use client'

import dynamic from 'next/dynamic'

// Dynamically import PDFViewer with SSR disabled.
// This ensures react-pdf (which requires browser APIs) only loads on the client.
const PDFViewer = dynamic(() => import('./PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full flex flex-col items-center gap-6 px-6 py-12">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 rounded-full border-2 border-muted-foreground border-t-primary animate-spin mb-3" />
          <p className="text-sm text-muted-foreground">Loading resume...</p>
        </div>
      </div>
    </div>
  ),
})

export default function PDFWrapper() {
  return <PDFViewer />
}

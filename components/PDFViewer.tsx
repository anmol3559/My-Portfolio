'use client'

import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString()

export default function PDFViewer() {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [containerWidth, setContainerWidth] = useState(0)

    // Zoom State
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const updateWidth = () => {
            const container = document.getElementById('pdf-container')
            if (container) {
                setContainerWidth(container.clientWidth - 40)
            }
        }

        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
        setIsLoading(false)
        setError(null)
    }

    const onDocumentLoadError = () => {
        setIsLoading(false)
        setError('Failed to load PDF. Please try again.')
    }

    return (
        <div
            id="pdf-container"
            className="w-full max-w-6xl mx-auto px-2 md:px-6 flex flex-col items-center"
        >
            {/* Loading State */}
            {isLoading && (
                <div className="flex flex-col items-center justify-center py-20 gap-6">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/50 animate-spin" />
                        <div
                            className="absolute inset-2 rounded-full border border-primary/20"
                            style={{ animation: 'nebula-drift-slow 6s ease-in-out infinite' }}
                        />
                    </div>
                    <p
                        className="text-sm text-muted-foreground text-center"
                        style={{ animation: 'pulse 2s ease-in-out infinite' }}
                    >
                        Loading your resume...
                    </p>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="w-full bg-red-950/30 border border-red-800/50 rounded-lg p-4 text-center text-red-300 text-sm">
                    {error}
                </div>
            )}

            {/* PDF Document */}
            {!error && (
                <>
                    {/* TOUCH-FRIENDLY & LEFT-CROP FIX WRAPPER */}
                    <div
                        className="w-full overflow-auto py-4 scroll-smooth"
                        style={{
                            WebkitOverflowScrolling: 'touch',
                            touchAction: 'pan-x pan-y'
                        }}
                    >
                        {/* INNER WRAPPER: Ensures left side doesn't get cut off on zoom */}
                        <div className="w-max mx-auto px-2 md:px-0">
                            <Document
                                file="/Anmol_Tyagi_Resume.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={onDocumentLoadError}
                                loading={null}
                                externalLinkTarget="_blank" // Opens links in new tab
                            >
                                {containerWidth > 0 && (
                                    <Page
                                        pageNumber={pageNumber}
                                        width={Math.min(containerWidth, 800)}
                                        scale={scale}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                        className="rounded-lg shadow-2xl shadow-primary/20 transition-all duration-300"
                                    />
                                )}
                            </Document>
                        </div>
                    </div>

                    {/* Controls Bar (Zoom & Navigation) */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-2 pb-8">

                        {/* Zoom Controls */}
                        <div className="flex items-center gap-1 p-1 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm">
                            <button
                                onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
                                className="w-8 h-8 flex items-center justify-center rounded text-primary hover:bg-primary/20 transition-colors font-bold text-lg"
                                aria-label="Zoom Out"
                            >
                                -
                            </button>
                            <span className="text-xs text-primary font-mono w-12 text-center">
                                {Math.round(scale * 100)}%
                            </span>
                            <button
                                onClick={() => setScale((s) => Math.min(2.0, s + 0.2))}
                                className="w-8 h-8 flex items-center justify-center rounded text-primary hover:bg-primary/20 transition-colors font-bold text-lg"
                                aria-label="Zoom In"
                            >
                                +
                            </button>
                        </div>

                        {/* Pagination Controls */}
                        {numPages && numPages > 1 && (
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                                    disabled={pageNumber <= 1}
                                    className="px-3 py-1.5 rounded-lg border border-primary/50 text-primary text-sm font-medium hover:bg-primary/10 disabled:opacity-30 transition-all"
                                >
                                    ←
                                </button>
                                <span className="text-xs text-muted-foreground font-mono">
                                    {pageNumber} / {numPages}
                                </span>
                                <button
                                    onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                                    disabled={pageNumber >= numPages}
                                    className="px-3 py-1.5 rounded-lg border border-primary/50 text-primary text-sm font-medium hover:bg-primary/10 disabled:opacity-30 transition-all"
                                >
                                    →
                                </button>
                            </div>
                        )}

                    </div>
                </>
            )}
        </div>
    )
}
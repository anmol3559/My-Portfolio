import type { Metadata } from 'next'
import ResumeNavbar from '@/components/ResumeNavbar'
import PDFWrapper from '@/components/PDFWrapper'
import StarField from '@/components/StarField'

export const metadata: Metadata = {
    title: 'Resume - Anmol Tyagi',
    description: 'Download and view Anmol Tyagi\'s professional resume.',
}

export default function ResumePage() {
    return (
        <>
            {/* Fixed cosmic background */}
            <StarField />

            {/* Subtle ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-0"
                style={{
                    background: 'linear-gradient(to bottom, #000000 0%, #0a0520 30%, #000000 60%, #0a0520 100%)',
                }}
            />

            {/* Minimal glow blob */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 z-0 w-[800px] h-[600px] rounded-full blur-[180px]"
                style={{
                    background: 'radial-gradient(ellipse at center, oklch(0.65 0.22 293 / 0.08) 0%, transparent 70%)',
                }}
            />

            {/* Navbar */}
            <ResumeNavbar />

            {/* Main content */}
            <main className="relative z-10 min-h-screen pt-24 pb-12">
                <div className="mx-auto max-w-3xl">
                    {/* Page header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
                            Anmol Tyagi
                        </h1>
                        <p className="text-muted-foreground text-sm tracking-widest uppercase">Full-Stack Developer</p>
                    </div>

                    {/* PDF Viewer (dynamically loaded client component) */}
                    <PDFWrapper />
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-border/40 bg-background/30 backdrop-blur-sm">
                <div className="mx-auto max-w-6xl px-6 py-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Anmol Tyagi. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

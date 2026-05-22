'use client'

import { motion } from 'framer-motion'
import { Download, ArrowLeft } from 'lucide-react'

export default function ResumeNavbar() {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/Anmol_Tyagi_Resume.pdf'
        link.download = 'Anmol_Tyagi_Resume.pdf'
        link.click()
    }

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/60 transition-all duration-300"
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Resume navigation">
                {/* Back to Home */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span className="tracking-widest uppercase">Back</span>
                </a>

                {/* Download Button */}
                <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-200 glow-purple-sm"
                    aria-label="Download resume"
                >
                    <Download size={16} />
                    <span>Download</span>
                </motion.button>
            </nav>
        </motion.header>
    )
}

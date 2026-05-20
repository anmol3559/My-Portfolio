import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import StarField from '@/components/StarField'

export default function Home() {
    return (
        <>
            {/* Fixed star particle field — z-0, sits on pure black background */}
            <StarField />

            {/* Fixed navbar — z-50 */}
            <Navbar />

            {/*
        No z-index on <main> to avoid creating a stacking context that
        could clip content or cover the fixed star field.
        pt-16 offsets below the fixed navbar (~64px).
      */}
            <main className="relative pt-16">
                <Hero />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </main>
        </>
    )
}

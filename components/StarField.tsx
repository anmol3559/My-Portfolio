// Pure CSS star field — calm, golden-tinted, premium HD feel.
// Stars use a warm off-white/gold color at very low opacity,
// with long durations (8–20 s) so the twinkle is barely perceptible.

const STARS = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    top: `${(Math.sin(i * 137.508) * 0.5 + 0.5) * 100}%`,
    left: `${(Math.cos(i * 137.508 * 1.618) * 0.5 + 0.5) * 100}%`,
    // Larger accent stars (every 7th) get 2 px; the rest stay 1 px.
    size: i % 7 === 0 ? 2 : 1,
    // Long, varied durations: 8 s – 20 s
    duration: `${8 + (i % 13)}s`,
    // Wide spread of delays so no group blinks in sync
    delay: `${(i % 17) * 0.6}s`,
    slow: i % 3 === 0,
}))

// Warm golden-white: hsl(46 80% 92%) — not pure white, not yellow, just golden.
const STAR_COLOR = 'hsl(46, 80%, 92%)'

export default function StarField() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            {STARS.map((star) => (
                <span
                    key={star.id}
                    className="absolute rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        backgroundColor: STAR_COLOR,
                        animation: `${star.slow ? 'cosmic-twinkle-slow' : 'cosmic-twinkle'} ${star.duration} ${star.delay} ease-in-out infinite`,
                    }}
                />
            ))}
        </div>
    )
}

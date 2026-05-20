// Pure CSS star field — no canvas, no library.
// Each star is a tiny absolutely-positioned dot with a randomised
// twinkle animation duration + delay so they feel organic.

const STARS = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    top: `${(Math.sin(i * 137.508) * 0.5 + 0.5) * 100}%`,
    left: `${(Math.cos(i * 137.508 * 1.618) * 0.5 + 0.5) * 100}%`,
    size: i % 5 === 0 ? 2 : 1,
    duration: `${3 + (i % 7)}s`,
    delay: `${(i % 11) * 0.4}s`,
    slow: i % 3 === 0,
}))

export default function StarField() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            {STARS.map((star) => (
                <span
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animation: `${star.slow ? 'twinkle-slow' : 'twinkle'} ${star.duration} ${star.delay} ease-in-out infinite`,
                    }}
                />
            ))}
        </div>
    )
}

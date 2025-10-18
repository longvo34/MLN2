export default function Quotes() {
  const quotes = [
    {
      text: "In the long run we are all dead.",
      author: "John Maynard Keynes",
      context: "Emphasizing the importance of short-term policy action",
    },
    {
      text: "Good questions outrank easy answers.",
      author: "Paul Samuelson",
      context: "On the importance of critical thinking in economics",
    },
    {
      text: "The difficulty lies not so much in developing new ideas as in escaping from old ones.",
      author: "John Maynard Keynes",
      context: "On the challenge of economic reform",
    },
    {
      text: "Economics is a choice between alternatives all the time. Those are the trade-offs.",
      author: "Paul Samuelson",
      context: "On the fundamental nature of economic decision-making",
    },
  ]

  return (
    <section id="quotes" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Wisdom & Insights</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Memorable quotes that capture their economic philosophy
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5S0 3.75 0 5c0 5 0 7 3 9m0 0c-1 .5-1 2-1 4s.5 3 1 4m17-8c.5.5 4 .656 4 3 0 2-1 4-3.5 4-2.5 0-4.5-1-4.5-4 0-1 0-1 .5-3s1.5-4 7-4c.5-1 .5-2 .5-2s-2 .5-4.5.5c-2.5 0-4.5-.5-4.5-.5" />
                </svg>
              </div>
              <p className="text-lg font-semibold mb-4 leading-relaxed italic">"{quote.text}"</p>
              <p className="font-bold text-accent mb-2">{quote.author}</p>
              <p className="text-sm text-muted-foreground">{quote.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

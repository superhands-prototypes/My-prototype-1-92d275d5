export default function App() {
  return (
    <div className="app">
      <div className="hello-container">
        {['H', 'E', 'Y', ' ', 'M', 'A', 'T', 'E'].map((letter, index) => (
          <span
            key={index}
            className="hello-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
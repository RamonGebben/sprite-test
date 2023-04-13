import "./styles.css";

const IDS = [
  "arx",
  "bbwc",
  "interest-terms",
  "kidwk",
  "max-mortage",
  "mortage-savings-check"
];

export default function App() {
  return (
    <div className="App">
      {IDS.map((id) => (
        <div style={{ border: "1px solid" }}>
          <pre>{id}</pre>
          <svg width="200px" height="200px" stroke="#000">
            <use
              href={`https://dhstash.s3.eu-west-1.amazonaws.com/widget/illustrations.svg#${id}`}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

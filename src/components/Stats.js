export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your list 🥳</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentPacked !== 100 ? (
        <em>
          {" "}
          🧳 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({percentPacked}%){" "}
        </em>
      ) : (
        <em>You have packed everything. Ready to Go! ✈️ </em>
      )}
    </footer>
  );
}

import Card from './Card';

export default function Results({ results }) {
  return (
    <div className="bg-gray-950 text-gray-200 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-2">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

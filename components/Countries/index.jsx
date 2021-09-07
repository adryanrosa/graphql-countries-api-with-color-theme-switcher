import Country from './Country';

function Countries({ countries }) {
  return (
    <main className="countries container">
      { countries.map(({ node }) => (
        <Country key={ node.numericCode } country={ node } />
      ))}
    </main>
  );
}

export default Countries;

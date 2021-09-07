import Country from './Country';

function Countries({ countries }) {
  return (
    <main className="countries">
      <div className="countries__layout container">
        { countries.map(({ node }) => (
          <Country key={ node.numericCode } country={ node } />
        ))}
      </div>
    </main>
  );
}

export default Countries;

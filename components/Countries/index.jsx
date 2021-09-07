import Country from './Country';

function Countries({ countries }) {
  return (
    <div className="countries">
      { countries.map(({ node }) => (
        <Country key={ node.numericCode } country={ node } />
      ))}
    </div>
  );
}

export default Countries;

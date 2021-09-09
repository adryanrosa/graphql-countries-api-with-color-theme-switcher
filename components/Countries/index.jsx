import Country from './Country';

function Countries({ countries }) {
  return (
    <div className="countries">
      {
        countries.length >= 1
          ? (countries.map(({ node }) => (
            <Country key={ node.alpha3Code } country={ node } />
          )))
          : 'Not found'
      }
    </div>
  );
}

export default Countries;

function DescriptionListItem({ title, description }) {
  return (
    <div>
      <dt>{`${title}:`}</dt>
      {' '}
      {
        description && (
          Array.isArray(description)
            ? (
              <dd>
                {description
                  .reduce((acc, { node: { name } }) => [...acc, name], [])
                  .join(', ')}
              </dd>
            )
            : <dd>{description}</dd>
        )
      }
      {!description && <dd>None</dd> }
    </div>
  );
}

export default DescriptionListItem;

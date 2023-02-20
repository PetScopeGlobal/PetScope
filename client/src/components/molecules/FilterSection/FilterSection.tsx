interface FilterSectionPropType {
  mappingArray: {displayText: string, valueText: string}[];
  elementName: string;
  filterValue?: undefined | string;
  setFilterValue: React.Dispatch<React.SetStateAction<undefined|string>>;
}

export default function FilterSection(props: FilterSectionPropType) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setFilterValue(e.target.value)
  }
  return (
    <section className="filter-section-container">
      <h2>Filter By</h2>
      <select name={props.elementName} id={props.elementName} onChange={handleChange}>
        {props.mappingArray.map((item) => {
          return (
            <option value={item.valueText}>{item.displayText}</option>
          )
        })}
      </select>
    </section>
  )
}
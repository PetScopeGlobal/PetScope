export default interface FilterSectionPropType {
  mappingArray: {displayText: string, valueText: string}[];
  elementName: string;
  filterValue?: undefined | string;
  setFilterValue: React.Dispatch<React.SetStateAction<undefined|string>>;
}
export type TableColumn = {
  key: string; // unique identifier (matches Country property)
  label: string; // display name
  sortable?: boolean; // can this column be sorted?
};

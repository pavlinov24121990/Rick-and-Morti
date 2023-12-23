export const handleChange = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): string => {
  return event.target.value;
};
export const normalizeStyleAttr = (style: any) => {
  // Function to convert CamelCase to snake_case
  const camelToSnakeCase = (str: any) => {
    return str.replace(/[A-Z]/g, (letter: any) => `-${letter.toLowerCase()}`);
  };
  
  // Convert style object to a string in CSS format
  let styleString = "";
  if (style) {
    styleString = Object.keys(style)
      .map((key) => `${camelToSnakeCase(key)}:${style[key]}`)
      .join(";");
  }

  return styleString;
};

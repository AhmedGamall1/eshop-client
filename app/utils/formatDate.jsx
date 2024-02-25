export const formatDate = (inputDate) => {
  const formattedDate = new Date(inputDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formattedDate;
};

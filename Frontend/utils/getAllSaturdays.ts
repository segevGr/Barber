import Colors from "../assets/styles/Colors";

const getAllSaturdays = (year: number, month: number) => {
  const markedDates: Record<string, any> = {};

  const date = new Date(year, month, 1);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  while (date.getMonth() === month) {
    if (date.getDay() === 6 || date.getDay() === 5) {
      const dateString = formatDate(date);
      markedDates[dateString] = {
        customStyles: {
          container: {
            backgroundColor: "transparent",
          },
          text: {
            color: Colors.lightOrange,
          },
        },
      };
    }
    date.setDate(date.getDate() + 1);
  }

  return markedDates;
};

export default getAllSaturdays;

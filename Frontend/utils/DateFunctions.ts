import Colors from "../assets/styles/Colors";

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getAllWeekendDays = (startDate: Date) => {
  const markedDates: Record<string, any> = {};

  const date = new Date(startDate);
  const month = date.getMonth();

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

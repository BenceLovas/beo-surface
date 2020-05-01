import React from "react";
import moment from "moment";
import ActionButtonCircle from "./shared/ActionButtonCircle";
import Surface from "./shared/Surface";
const dayTitles = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const DateRangeSelector = () => {
  const start = moment().startOf("month");
  const startDayOfWeekIndex = start.isoWeekday();
  const dateArray = [
    start.subtract(startDayOfWeekIndex - 1, "days").format("D"),
  ];
  for (let i = 0; i < startDayOfWeekIndex - 1; i++) {
    dateArray.push(start.add(1, "days").format("D"));
  }
  for (let i = 0; i < moment().daysInMonth() - 1; i++) {
    dateArray.push(start.add(1, "days").format("D"));
  }
  const end = moment().endOf("month");
  console.log({ start, end });
  return (
    <Surface>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          width: 400,
        }}
      >
        {dayTitles.map((title) => (
          <div>{title}</div>
        ))}
        {dateArray.map(
          (date) =>
            console.log(date) || (
              <div style={{ margin: 5 }}>
                <ActionButtonCircle
                  icon={<div style={{ fontSize: 16 }}>{date}</div>}
                />
              </div>
            )
        )}
      </div>
    </Surface>
  );
};

export default DateRangeSelector;

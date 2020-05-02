import React, { useState, useMemo } from "react";
import moment from "moment";
import ActionButtonCircle from "./shared/ActionButtonCircle";
import Surface from "./shared/Surface";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const dayTitles = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const TOTAL_DAYS = 7 * 6;

const DateRangeSelector = () => {
  const [date, setDate] = useState(moment());
  const [selectorState, setSelectorState] = useState("clear");
  const [range, setRange] = useState([null, null]);

  const handleClick = (d) => (e) => {
    e.preventDefault();
    console.log("hello");
    if (selectorState === "clear") {
      setRange([d, null]);
      setSelectorState("firstSelected");
      console.log("h1");
    } else if (selectorState === "firstSelected") {
      setRange([range[0], d]);
      setSelectorState("rangeSelected");
      console.log("h2");
    }
  };

  const getDays = () => {
    const start = date.startOf("month");
    const startDayOfWeekIndex = start.isoWeekday();
    const dateArray = [];

    for (let i = startDayOfWeekIndex - 1; i > 0; i--) {
      dateArray.push(moment(start).subtract(i, "days"));
    }
    for (let i = 0; i < start.daysInMonth(); i++) {
      dateArray.push(moment(start).add(i, "days"));
    }
    for (
      let i = start.daysInMonth();
      i <= TOTAL_DAYS - startDayOfWeekIndex;
      i++
    ) {
      dateArray.push(moment(start).add(i, "days"));
    }

    return dateArray;
  };
  const dateArray = useMemo(getDays, [date]);

  const nextMonth = () => {
    setDate(moment(date).add(1, "month"));
  };

  const previousMonth = () => {
    setDate(moment(date).subtract(1, "month"));
  };

  return (
    <div style={{ width: 600, padding: 16 }}>
      <Surface>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 10px 30px 10px",
          }}
        >
          <div>{date.format("YYYY")}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 10,
            }}
          >
            <KeyboardArrowLeft onClick={previousMonth} />
            <div style={{ fontSize: 18 }}>{date.format("MMMM")}</div>
            <KeyboardArrowRight onClick={nextMonth} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gridTemplateRows: "repeat(7, 1fr)",
              width: 400,
              justifyContent: "stretch",
              alignItems: "center",
            }}
          >
            {dayTitles.map((title) => (
              <div style={{ textAlign: "center", fontSize: 12 }}>{title}</div>
            ))}
            {dateArray.map((d) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "5px 0",
                  padding: 4,
                  background:
                    selectorState === "rangeSelected" &&
                    d.isBetween(range[0], range[1], null, "[]")
                      ? "rgba(0,0,0,.15)"
                      : "",
                }}
              >
                {d.isSame(date, "month") ? (
                  <ActionButtonCircle
                    icon={
                      <div
                        style={{
                          fontWeight: d.isSame(moment(), "day") ? 700 : 400,
                          fontSize: d.isSame(moment(), "day") ? 17 : 16,
                        }}
                      >
                        {d.format("D")}
                      </div>
                    }
                    onClick={handleClick(d)}
                  />
                ) : (
                  <div
                    style={{
                      fontSize: 16,
                      justifySelf: "center",
                      color: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {d.format("D")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Surface>
    </div>
  );
};

export default DateRangeSelector;

import React, { useState, useMemo } from "react";
import moment from "moment";
import ActionButtonCircle from "./shared/ActionButtonCircle";
import Surface from "./shared/Surface";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  selected: {
    background: "rgba(0,0,0,.15)",
  },
  borderRoundLeft: {
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
  },
  borderRoundRight: {
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
  },
  lightText: {
    fontSize: 16,
    justifySelf: "center",
    color: theme.lightText,
  },
}));
const dayTitles = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const TOTAL_DAYS = 7 * 6;

const DateRangeSelector = () => {
  const classes = useStyles();
  const [date, setDate] = useState(moment());
  const [selectorState, setSelectorState] = useState("clear");
  const [range, setRange] = useState([null, null]);

  const handleClick = (d) => (e) => {
    e.preventDefault();
    if (selectorState === "clear") {
      setRange([d, null]);
      setSelectorState("firstSelected");
    } else if (selectorState === "firstSelected") {
      setRange([range[0], d]);
      setSelectorState("clear");
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
                className={classNames({
                  [classes.selected]:
                    (range[0] ? d.isSame(range[0]) : false) ||
                    (range[0] &&
                      range[1] &&
                      d.isBetween(range[0], range[1], null, "[]")),
                  [classes.borderRoundLeft]: range[0]
                    ? d.isSame(range[0])
                    : false,
                  [classes.borderRoundRight]: range[1]
                    ? d.isSame(range[1])
                    : range[0]
                    ? d.isSame(range[0])
                    : false,
                })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0px 0",
                  padding: "6px 4px",
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
                  <div className={classes.lightText}>{d.format("D")}</div>
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

"use client";
import dayjs from "dayjs";

const FormatIncome = (income) => {
  if (income >= 1000) return `${(income / 1000).toFixed(0)}K`;
  else return income;
};

const ConvertDate = (date) => {
  if (!date) return null;
  dayjs(date).format("MMMM D Y YY");
};

const ConvertTime = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const Time = (timestamp) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const am_pm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes}:${seconds} ${am_pm}`;
};

export const HelperFunction = {
  FormatIncome,
  ConvertTime,
  ConvertDate,
  Time,
};

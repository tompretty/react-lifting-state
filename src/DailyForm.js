import daysData from "./daysData.json";
export default function DailyForm({ myplan, name }) {
  return <article>{`Hi ${name} ${daysData[myplan]}`}</article>;
}

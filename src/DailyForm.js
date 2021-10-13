import daysData from "./daysData.json";
export default function DailyForm({ myplan, name }) {
  return (
    <article
      style={{ backgroundColor: daysData[myplan].color, color: "white" }}
    >{`Hi ${name} ${daysData[myplan].plan}`}</article>
  );
}

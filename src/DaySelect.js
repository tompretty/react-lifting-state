export default function DaySelect({ chooseDay }) {
  return (
    <select onChange={(e) => chooseDay(e.target.value)}>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
    </select>
  );
}

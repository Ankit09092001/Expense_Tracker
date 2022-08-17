import Expenses from "./Components/Expenses/Expenses";

const App = () => {
  const expense = [
    {
      id: 1,
      title: "Car Insurance",
      amount: "250",
      date: new Date(2022, 7, 2),
    },
    {
      id: 2,
      title: "Bike Insurance",
      amount: "150",
      date: new Date(2022, 8, 4),
    },
    {
      id: 3,
      title: "Truck Insurance",
      amount: "450",
      date: new Date(2022, 5, 14),
    },
  ];

  return (
    <div>
      <Expenses items={expense} />
    </div>
  );
}

export default App;

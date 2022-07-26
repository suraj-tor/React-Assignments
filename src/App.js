// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from "./component/expenseitem";

function App() {
    const expense = [
        { title: "Car Expense", amount: 249.67, date: new Date(2022, 6, 22) },
        { title: "Bike Expense", amount: 149.67, date: new Date(2022, 3, 11) },
        { title: "House Expense", amount: 349.67, date: new Date(2022, 9, 29) },
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem title={expense[0].title} date={expense[0].date} amount={expense[0].amount} />
            <ExpenseItem title={expense[1].title} date={expense[1].date} amount={expense[1].amount} />
            <ExpenseItem title={expense[2].title} date={expense[2].date} amount={expense[2].amount} />
        </div>
    );
}

export default App;

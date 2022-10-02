//Components => JS functions that returns JSX
// React always wants to  render a single component


function Header(obj) {
  return (
    <header>
      <h1>Made by React Components by {obj.name} </h1>
    </header>
  );
}

function Main(obj) {
  return (
    <p>
      Second Component {obj.emoji} {obj.year}
    </p>
  );
}

function ListOfDishes(obj) {
  return (
    <ul>
      {obj.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
      ))}
    </ul>
  );
}

const dishList = ["Rajma Rice", "PB oats", "Grilled Chicken Salad"];

const dishes = dishList.map((dish, i) => ({
  id: i,
  title: dish,
}));

const  exerciseList = ["Side Raise", "Db Press", "Squats" , "PullUps" ];

const exercise = exerciseList.map((e, i) => ({
  id: i,
  title: e,
}));

function DropDown(obj) {
  return (
      <select>
        {obj.exercise.map((e) => (
          <option key={e.id}>{e.title}</option>
        ))}
      </select>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header name="Devansh" />
      <Main emoji="🤓😎" year={new Date().getFullYear} />
      <ListOfDishes dishes={dishes} />
      <DropDown exercise={exercise} />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("container_babel"));

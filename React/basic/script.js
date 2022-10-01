//React.createElement( element which we want  to create, where we want to add that element  => generally it is div)

ReactDOM.render(
  React.createElement("h1", null, "Getting started with React"), //{TAG, PROPERTY }
  document.getElementById("root")
);

let a = React.createElement("li", null, "🥲");
let b = React.createElement("li", null, "😏");
let c = React.createElement("li", null, "🙂");

let listElement = React.createElement("ul", null, a, b, c);
ReactDOM.render(listElement, document.getElementById("list_id"));

let nform = (
  <form>
    <label>
      {" "}
      Name: <input type="text" name="name" />{" "}
    </label>
    <input type="submit" value="Submit" />
  </form>
);

ReactDOM.render(nform, document.getElementById("container_babel"));

function Tweet(props) {
  return `${props.username}, ${props.name}, ${props.date}, ${props.message}`;
}

function App() {
  return (
    <div>
      <Tweet
        username="christopherklint"
        name="Chris"
        date="2020-12-11"
        message="This is a fake message. Proceed!"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

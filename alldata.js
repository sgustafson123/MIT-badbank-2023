function AllData() {
  const ctx = React.useContext(UserContext);
  const map = new Map([
    [1, "name"],
    [2, "email"],
    [3, "password"],
  ]);

  const jsonText = JSON.stringify(map, (key, value) =>
    value instanceof Map ? Array.from(value.entries()) : value
  );

  console.log(jsonText);
  // [[1,"name"],[2,"email"],[3,"password"]]

  const map2 = JSON.parse(jsonText, (key, value) =>
    key === "" ? new Map(value) : value
  );

  console.log(map2);
  // Map { 1 => "name", 2 => "email", 3 => "password" }

  return (
    <>
      <h5>All Users 🖥 </h5>
      {JSON.stringify(ctx)}
    </>
  );
}

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    const nameError = !validate(name) ? "Enter a valid name" : "";
    const emailError = !validate(email) ? "Enter a valid email" : "";
    const passwordError = !validate(password) ? "Enter a password" : "";

    setError({
      nameError,
      emailError,
      passwordError,
    });

    if (!nameError && !emailError && !passwordError) {
      ctx.users.push({ name, email, password, balance: 100 });
      setShow(false);
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={
        show ? (
          <div>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            ></input>
            <div style={{ color: "red" }}>{error.nameError}</div>
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            ></input>
            <div style={{ color: "red" }}>{error.emailError}</div>
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            ></input>
            <div style={{ color: "red" }}>{error.passwordError}</div>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </div>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

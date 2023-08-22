const Deposit = ({ onChange }) => {
  const ctx = React.useContext(UserContext);
  return (
    <div className="label huge">
      <h3>Deposit 💰 </h3>
      <input type="number" width="200" onChange={onChange}></input>
    </div>
  );
};
const Account = () => {
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [deposit, setDeposit] = React.useState(0);
  const [balanceStatus, setBalanceStatus] = React.useState("");

  const handleChange = (e) => {
    console.log(`handleChange ${e.target.value}`);
    setDeposit = Number(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setDeposit(0);

    if (isDeposit) {
      setBalanceStatus(`Deposited $${deposit.toFixed(2)}`);
    } else {
      setBalanceStatus("");
    }
  };

  const status = `Account Balance $${totalState.toFixed(2)}`;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Account</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h2>{status}</h2>
            {isDeposit && <p>{balanceStatus}</p>}
            <Deposit onChange={handleChange} />
            <input type="submit" className="btn btn-success" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Account />, document.getElementById("root"));

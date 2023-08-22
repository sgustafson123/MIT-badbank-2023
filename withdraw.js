const Withdraw = ({ onChange }) => {
  const ctx = React.useContext(UserContext);
  return (
    <div className="label huge">
      <h3>Withdrawal 💸 </h3>
      <input type="number" width="200" onChange={onChange}></input>
    </div>
  );
};
const Account = () => {
  const [totalState, setTotalState] = React.useState(0);
  const [isWithdraw, setIsWithdraw] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState(0);
  const [balanceStatus, setBalanceStatus] = React.useState("");

  const handleChange = (e) => {
    console.log(`handleChange ${e.target.value}`);
    setDeposit = Number(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTotal = isWithdraw ? totalState + withdraw : totalState - withdraw;
    setTotalState(newTotal);
    setWithdraw(0);

    if (isWithdraw) {
      setBalanceStatus(`Withdrawal $${withdraw.toFixed(2)}`);
    } else {
      setBalanceStatus("");
    }
  };

  const status = `Account Balance $${totalState.toFixed(2)}`;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Withdrawal</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h2>{status}</h2>
            {isWithdraw && <p>{balanceStatus}</p>}
            <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={() => setIsWithdraw(true)}
            >
              Withdrawal
            </button>
            <Deposit onChange={handleChange} />
            <input type="submit" className="btn btn-success" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Account />, document.getElementById("root"));

function Home() {
  return (
    <Card
      bgcolor="info"
      txtcolor="white"
      header="Washed Up Bank"
      title="Welcome to Washed Up"
      text="We help you navigate the waves of finance!"
      body={
        <img
          src="20210820_154808.jpg"
          className="img-fluid"
          alt="Lake Superior"
        />
      }
    />
  );
}

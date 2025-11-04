function Home() {
  return (
    <div className="calendars">
      <Calendars monthName={"January"} monthDays={31} />
      <Calendars monthName={"Febuary"} monthDays={28} />
      <Calendars monthName={"March"} monthDays={31} />
      <Calendars monthName={"April"} monthDays={30} />
      <Calendars monthName={"May"} monthDays={31} />
      <Calendars monthName={"June"} monthDays={30} />
      <Calendars monthName={"July"} monthDays={31} />
      <Calendars monthName={"August"} monthDays={31} />
      <Calendars monthName={"September"} monthDays={30} />
      <Calendars monthName={"October"} monthDays={31} />
      <Calendars monthName={"November"} monthDays={30} />
      <Calendars monthName={"December"} monthDays={31} />
    </div>
  );
}

export default Home;

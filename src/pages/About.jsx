import PageHeader from "../components/common/PageHeader";
import CreateNewCard from "../components/CreateNewCard";

function About() {
  return (
    <div className="container">
      <PageHeader
        title="About"
        description="A React project that displays information using cards, allowing for organized and interactive content presentation."
      />
      <CreateNewCard />
    </div>
  );
}

export default About;

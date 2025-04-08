import PageHeader from "../components/common/PageHeader";
import CreateCardButton from "../components/CreateCardButton";

function MyCards() {
  return (
    <div className="container">
      <PageHeader
        title="My Cards"
        description="Here you can see all cards you created"
      />
      <CreateCardButton />
    </div>
  );
}

export default MyCards;

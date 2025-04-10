import PageHeader from "../components/common/PageHeader";
import CreateCardButton from "../components/CreateCardButton";

function FavCards() {
  return (
    <div className="container">
      <PageHeader
        title="Favorite cards"
        description="Here you can find you favorite cards"
      />
      <CreateCardButton />
    </div>
  );
}

export default FavCards;

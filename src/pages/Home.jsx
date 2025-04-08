import { useEffect, useState } from "react";
import ShowAllCards from "../components/Cards";
import PageHeader from "../components/common/PageHeader";
import { useAuth } from "../context/auth.context";
import CreateCardButton from "../components/CreateCardButton";

function Home() {
  const { user } = useAuth();
  console.log(user);

  const capitalize = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
  };

  return (
    <div className="container d-flex flex-column gap-3">
      <PageHeader
        title="Card Page"
        description="Here you can find business cards from all category"
      />
      <CreateCardButton />
      <div className="d-flex gap-2">
        <span className="fs-4">
          {user?.name.first && user?.name.last
            ? `Welcome ${capitalize(user?.name.first)} ${capitalize(
                user?.name.last
              )}`
            : "Welcome Guest"}
        </span>
      </div>
      <ShowAllCards />
    </div>
  );
}

export default Home;

import PageHeader from "../components/common/PageHeader";
import CreateNewCard from "./CreateNewCard";

function About() {
  return (
    <div className="container text-center">
      <PageHeader
        title="About"
        description={
          <>
            <p>
              Our platform lets you easily explore, create, and manage digital
              business cards — all in one place. Whether you're a business owner
              looking to showcase your services or a user searching for reliable
              professionals, we’ve got you covered.
            </p>
            <p>
              <strong>Key features include:</strong>
            </p>
            <ul className="list-unstyled">
              <li>
                🔹 Explore business cards from various industries and connect
                instantly.
              </li>
              <li>
                🔹 Create your own card as a business user and boost your
                visibility.
              </li>
              <li>
                🔹 Like and save cards for quick access and future reference —
                no login required.
              </li>
            </ul>
            <p>
              Start building your professional network today, faster and easier
              than ever before!
            </p>
          </>
        }
      />
      {/* <CreateNewCard /> */}
    </div>
  );
}

export default About;

import React from "react";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalbalanceBox from "@/components/ui/TotalbalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Howard" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guset"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>

        <TotalbalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  );
};

export default Home;

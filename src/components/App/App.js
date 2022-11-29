import "./index.scss";
import Card from "../Card";

function App() {
  //const alertPortugal = () => {
  // console.log(`click happened`);
  // };
  let list = [
    {
      id: 1,
      imgSrc:
        "https://static.fnac-static.com/multimedia/Images/PT/NR/05/39/15/1390853/1540-1.jpg",
      title: "The Little Book of Common Sense Investing",
      description: "This is a book about investing by John C.Bogle",
      carstyle: "darkCard",
    },
    {
      id: 2,
      imgSrc:
        "https://imgs.search.brave.com/UXWA8cEkBvCVB2NyQnqQNh1_MuXqrWUwsGaRDXjekHM/rs:fit:930:1186:1/g:ce/aHR0cHM6Ly9kbW4t/ZGFsbGFzLW5ld3Mt/cHJvZC5jZG4uYXJj/cHVibGlzaGluZy5j/b20vcmVzaXplci8x/bHR5ZWF3ZlYtOTFs/T2xuZG1uN2hVRjY1/VTQ9LzkzMHgwL3Nt/YXJ0L2ZpbHRlcnM6/bm9fdXBzY2FsZSgp/L2Nsb3VkZnJvbnQt/dXMtZWFzdC0xLmlt/YWdlcy5hcmNwdWJs/aXNoaW5nLmNvbS9k/bW4vVDJCVEdCTzY2/TkQzVkJBRUs2TUNH/U1JSSTQuanBn",
      title: "Greenlights",
      description: "its a love letter to life",
      carstyle: "blueCard",
    },
    {
      id: 3,
      imgSrc:
        "https://imgs.search.brave.com/7t-EQoVmIhoAQCq600BfwJKOIpN1poWJyZtOq4_SngU/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9Y/cHJYS2M1LVphUS9t/YXhyZXNkZWZhdWx0/LmpwZw",
      title: "Extreme Ownership",
      description: "New York best seller about Leadership",
      carstyle: "orangeCard",
    },
  ];

  return (
    <div className="app">
      {list.length ? (
        list.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            carstyle={card.carstyle}
            imgSrc={card.imgSrc}
          ></Card>
        ))
      ) : (
        <p>im sorry, there`s some error</p>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState([
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?u=John+Doe",
      years: "20 years",
    },
    {
      name: "Mr Robot",
      image: "https://i.pravatar.cc/150?u=mrRobot",
      years: "21 years",
    },
    {
      name: "Elliot Alderson",
      image: "https://i.pravatar.cc/150?u=elliotAlderson",
      years: "23 years",
    },
    {
      name: "Luicifer Morningstar",
      image: "https://i.pravatar.cc/150?u=luicifermorningstar",
      years: "22 years",
    },
  ]);

  const getTile = (name, image, years) => {
    return (
      <div className="col-lg-12 tile ">
        <div class="d-flex flex-row mt-2">
          <div class="image mr-3">
            <img className="photoUser" src={image} alt="" />
          </div>
          <div class="">
            <div class="d-flex flex-row mb-1">
              <h5 className="text-start">{name}</h5>
            </div>
            <div>
              <h6 className="text-start">{years}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 card offset-lg-3">
            <div className="col-lg-12 heading ">
              <h2>{state.length == 0 ? 0 : state.length} Birthday's Today</h2>
            </div>
            {state &&
              state.map((item) => {
                return getTile(item.name, item.image, item.years);
              })}
            <div className="col-lg-12 heading ">
              <button
                onClick={() => {
                  setState([]);
                }}
                className="btn btn-block mt-4 mb-4 btn-warning"
              >
                <h2>Clear All</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

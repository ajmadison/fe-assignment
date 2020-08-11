import React, { useReducer, useEffect } from "react";
import "./App.css";
import { packageReducer } from "./reducers/packageReducer";

import { PageHeader } from "./components/PageHeader/PageHeader";
import { AppliancePackages } from "./components/AppliancePackages/AppliancesPackages";
import { FilterBar } from "./components/FilterBar/FilterBar";

function App() {
  const [state, dispatch] = useReducer(packageReducer, {
    response: undefined,
    packages: [],
  });

  useEffect(() => {
    async function loadPackages() {
      const readableStream = await fetch(
        "https://demo3211013.mockable.io/ajmad"
      );
      const response = await readableStream.json();
      dispatch({ type: "INITIALIZE_STATE", payload: response });
    }
    loadPackages();
  }, []);

  return (
    <div className="App">
      <PageHeader>
        <PageHeader.Title>Appliance Packages</PageHeader.Title>
        Looking for a great deal on home appliances? Packages are the best bet.
        Most appliance packages consist of a range, refirgerator, over-the-range
        microwave and diswasher. However, some upscale brands have packages that
        incorporate wall ovens, cooktops, and integrated refrigerators.
      </PageHeader>
      <FilterBar dispatch={dispatch} />
      <AppliancePackages data={state.packages} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import Reactpip from "react-picture-in-picture";
import Loading from "../../packages/Loading/Loading";
import BarChart from "../../components/Chart/BarChart";
export default function Card() {
  const [active, setActive] = useState(false);
  return (
    <NativeBaseProvider>
      <Loading />
      {/* Card */}
      {/* <Reactpip isActive={active}>
        <source
          src="https://cdn.arnellebalane.com/videos/original-video.mp4"
          style={{ width: "20px" }}
        />
      </Reactpip>
      <button onClick={() => setActive(!active)}>
        Toggle Picture in Picture
      </button> */}
      <BarChart />
    </NativeBaseProvider>
  );
}

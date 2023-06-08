import { dbService } from "fbase";
import React, { useState } from "react";

const Home = () => {
  const [nwit, setNwit] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("nwits").add({
      nwit,
      createdAt: Date.now(),
    });
    setNwit("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNwit(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nwit}
          onChange={onChange}
          type="text"
          placeholder="내용"
          maxLength={120}
        />
        <input type="submit" value="nwit" />
      </form>
    </div>
  );
};

export default Home;

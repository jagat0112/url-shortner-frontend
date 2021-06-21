import React, { useState } from "react";
import axios from "axios";

import Loading from "./loading";
import ResUrl from "./resUrl";

const Form = () => {
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { data } = await axios.post(
      "https://chotourl.herokuapp.com/api/url",
      { longUrl: link }
    );
    setTimeout(() => {
      setLoading(false);

      setUrl(data);
    }, 2000);
  };

  const onChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="container ">
      <div className="content">
        <h1>Choto URL</h1>

        <form onSubmit={onSubmit}>
          <input type="text" className="form__input" onChange={onChange} />
          <br />
          <button type="submit" className="form__btn">
            Shorten Link
          </button>
        </form>
        {loading && <Loading />}
        {url && <ResUrl url={url} />}
      </div>
    </div>
  );
};

export default Form;

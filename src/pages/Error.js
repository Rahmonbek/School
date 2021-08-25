import "../css/Error.css";
import { info } from "./../server";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";

function SelectMap() {
  const [cities, setCities] = useState([]);
  const [neighborhoods, setNeighborhood] = useState([]);
  const [bool, setBool] = useState([true, false, false]);
  const [data, setData] = useState(info);

  const AllProvinces = [...new Set(data.map((item) => item.adress))];

  useEffect(() => {
    axios.get("http://maktab2.herokuapp.com/region/").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
    setCities([...new Set(data.map((item) => item.region_name))]);
    setNeighborhood([...new Set(data.map((item) => item.nomi))]);
  }, []);

  const handleProvinceChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].address === value) {
        g.push(data[i]);
      }
    }
    setCities([...new Set(g.map((item) => item.region_name))]);
    setBool([true, true, false]);
  };
  const handleCityChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].region_name === value) {
        g.push(data[i]);
      }
    }
    setNeighborhood([...new Set(g.map((item) => item.nomi))]);
    setBool([true, true, true]);
  };
  const handleNeighborhoodsChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].nomi === value) {
        g.push(data[i]);
      }
    }
  };
  return (
    <div className="map_select">
      <div className="map_item">
        {bool[0] ? (
          <>
            <h4>adresslar</h4>
            <ul className="school_ul1">
              {AllProvinces.map((province) => (
                <li key={province}>
                  <Button
                    type="primary"
                    onClick={() => handleProvinceChange(province)}
                  >
                    {province}
                  </Button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}

        {bool[1] ? (
          <>
            <h4>region_namealar</h4>
            <ul className="school_ul2">
              {cities.map((item, index) => (
                <li key={index}>
                  <Button type="primary" onClick={() => handleCityChange(item)}>
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
        {bool[2] ? (
          <>
            <h4>Maktablar</h4>
            <ul className="school_ul3">
              {neighborhoods.map((item) => (
                <li key={item}>
                  <Button
                    type="primary"
                    onClick={() => handleNeighborhoodsChange(item)}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SelectMap;

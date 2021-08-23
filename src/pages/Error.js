import { Link } from "react-router-dom";
import "../css/Error.css";
import { data } from "./../server";
import React, { useState, useEffect } from "react";
import { Button } from "antd";

function SelectMap(props) {
  // const [data, setData] = useState(Informations);
  const [cities, setCities] = useState([]);
  const [neighborhoods, setNeighborhood] = useState([]);
  const [bool, setBool] = useState([true, false, false]);

  const AllProvinces = [...new Set(data.map((item) => item.viloyat))];

  useEffect(() => {
    setCities([...new Set(data.map((item) => item.tuman))]);
    setNeighborhood([...new Set(data.map((item) => item.nomi))]);
  }, []);

  const handleProvinceChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].viloyat === value) {
        g.push(data[i]);
      }
    }
    setCities([...new Set(g.map((item) => item.tuman))]);
    setBool([true, true, false]);
  };
  const handleCityChange = (value) => {
    var g = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].tuman === value) {
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
            <h4>Viloyatlar</h4>
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
            <h4>Tumanalar</h4>
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
            <ul className="school_ul2">
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

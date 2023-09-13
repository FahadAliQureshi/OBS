/** @format */

import React from "react";
import { useEffect, useState } from "react";
import TeamCard from "./teamCard";
import LoadingSpinner from "./spinner";
import styles from "../styles/Home.module.scss";

function Ourteam() {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://globaltechnologia.com/webAdmin/public/index.php/api/teamshow"
    )
      .then((res) => {
        setIsLoading(true);
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((res) => {
        console.log("&&&&&&&&&&&&&", res);
        if (res?.length > 0) {
          const team = res;
          setTeam(team);
          setIsLoading(false);
        } else {
          return;
        }
      });
    console.log("EEEEEE", team);
  }, []);
  const domain = "https://obstechnologia.com/webAdmin/";
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.ourteam}>
          <div className={styles.wrw}>
            {" "}
            <p className={styles.yhc}>MEET OUR TALENTED TEAM</p>
            {/* <p className={styles.bhc}>
              We are a group of talented individuals.
            </p> */}
          </div>
          <div className={styles.row_container}>
            {team?.map((mem, index) => {
              return isLoading ? (
                <LoadingSpinner key={index} />
              ) : (
                <TeamCard data={mem} key={index} num={index} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourteam;

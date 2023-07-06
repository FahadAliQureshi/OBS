import React from "react";
import Link from "next/link";
import { useState } from "react";

const JobsHeader = ({ selectedJob, setSelectedJob }) => {
  const handleJobClick = (jobRole) => {
    // alert(jobRole);
    setSelectedJob(jobRole);
  };
  return (
    <div>
      <div
        style={{
          background: "white",
          display: "flex",
          justifySelf: "flex-end",
          justifyContent: "flex-end",
          marginRight: "105px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "2%",
            width: "55%",
            marginTop: "15px",
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              background:
              selectedJob === "Job Role 1"
              ? "#FFD400"
              : "none",

              // background: "#FFD400",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              height: "30px",
              width: "25%",
            }}
            onClick={() => handleJobClick("Job Role 1")}
          >
            Job Role
          </div>

          <div
            style={{
              background:
              selectedJob === "Job Role 2"
              ? "#FFD400"
              : "none",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              height: "30px",
              width: "35%",
            }}
            onClick={() => handleJobClick("Job Role 2")}
          >
            Responsibilities
          </div>

          <div
            style={{
              background:
              selectedJob === "Job Role 3"
              ? "#FFD400"
              : "none",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              height: "30px",
              width: "25%",
            }}
            onClick={() => handleJobClick("Job Role 3")}
          >
            More
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsHeader;

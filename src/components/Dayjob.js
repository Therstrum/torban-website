import React from "react";
import { useGlobalContext } from "../context";
import { Singleptp } from "./Singleptp";

export const Dayjob = () => {
  const { setIsModalOpen, PtpList, isModalOpen, setCurrentPtp, currentPtp } =
    useGlobalContext();

  const expandBox = (e) => {
    setCurrentPtp(e.target.id);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main>
      <section className="section-small job-hero">
        <div className="section-center">
          <div className="text-box">
            <h2 className="job-heading">
              Making a difference in non-profit healthcare IT
            </h2>
          </div>
        </div>
      </section>
      <div className="section-break"></div>
      <section className="section-small section-whitespace">
        <div className="section-center">
          <div className="text-box">
            <p>
              I work for a non-profit healthcare IT company that provides the
              Epic EHR to clinics who care for underserved patient populations.
              I specialize in integrating third party tools into Epic.
            </p>
            <p>
              I enjoy automating workflows with cache programming. I've set up
              web services through interconnect, pre-packaged standard build
              into routines, and created build checker tools.
            </p>
          </div>
        </div>
      </section>

      <section className="section-trim-footer section-a">
        <div className="day-job-header">
          {" "}
          <h2>Third Party Integrations</h2>
          <p>(hover to explore)</p>
        </div>

        <div className="grid-container">
          {PtpList.map((ptp) => {
            const { id, name, img } = ptp;
            return (
              <div className="grid-item" key={id}>
                <article>
                  <img
                    src={img}
                    alt={name}
                    id={id}
                    onMouseOver={expandBox}
                    onMouseLeave={closeModal}
                  />
                </article>
              </div>
            );
          })}
        </div>
        <div className="modal-container">
          {isModalOpen ? <Singleptp ptp={currentPtp} /> : null}
        </div>
      </section>
    </main>
  );
};

import React, { useState } from "react";
import FundationsJsonData from "./fundation.json";
import OrganizationsJsonData from "./organizations.json";
import CollectionsJsonData from "./collections.json";
import ReactPaginate from "react-paginate";

function WhoWeHelp() {
  const [activeSection, setActiveSection] = useState("fundations");

  const [infos] = useState(FundationsJsonData.slice(0, 9));
  const [orgsInfos] = useState(OrganizationsJsonData.slice(0, 6));
  const [collInfos] = useState(CollectionsJsonData.slice(0, 3));

  const [pageNumber, setPageNumber] = useState(0);

  const infoPerPage = 3;
  const pagesVisited = pageNumber * infoPerPage;

  const displayInfos = infos
    .slice(pagesVisited, pagesVisited + infoPerPage)
    .map(info => {
      return (
        <>
          <div className='who-we-help-info'>
            <ul>
              <li className='who-we-help-name'>
                Fundacja: {info.fundationName}
              </li>
              <li className='who-we-help-mission'>Cel i misja: {info.goal}</li>
            </ul>
            <p className='who-we-help-needs'>{info.needs}</p>
          </div>
          <hr className='who-we-help-line' />
        </>
      );
    });
  const displayOrgsInfos = orgsInfos
    .slice(pagesVisited, pagesVisited + infoPerPage)
    .map(orgInfo => {
      return (
        <>
          <div className='who-we-help-info'>
            <ul>
              <li className='who-we-help-name'>
                Organizacja: {orgInfo.fundationName}
              </li>
              <li className='who-we-help-mission'>
                Cel i misja: {orgInfo.goal}
              </li>
            </ul>
            <p className='who-we-help-needs'>{orgInfo.needs}</p>
          </div>
          <hr className='who-we-help-line' />
        </>
      );
    });

  const displayCollInfo = collInfos
    .slice(pagesVisited, pagesVisited + infoPerPage)
    .map(collInfo => {
      return (
        <>
          <div className='who-we-help-info'>
            <ul>
              <li className='who-we-help-name'>
                Zbiórka: {collInfo.fundationName}
              </li>
              <li className='who-we-help-mission'>
                Cel i misja: {collInfo.goal}
              </li>
            </ul>
            <p className='who-we-help-needs'>{collInfo.needs}</p>
          </div>
          <hr className='who-we-help-line' />
        </>
      );
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className='who-we-help' id='whoWeHelpSection'>
      <p className='who-we-help-title'>Komu pomagamy?</p>
      <div className='decoration'></div>
      <div className='who-we-help-btns'>
        <button
          className={activeSection === "fundations" ? "active" : ""}
          onClick={() => setActiveSection("fundations")}>
          Fundacjom
        </button>
        <button
          className={activeSection === "organizations" ? "active" : ""}
          onClick={() => setActiveSection("organizations")}>
          Organizacjom pozarządowym
        </button>
        <button
          className={activeSection === "collections" ? "active" : ""}
          onClick={() => setActiveSection("collections")}>
          Lokalnym zbiórkom
        </button>
      </div>
      {activeSection === "fundations" && (
        <div>
          <p className='who-we-help-text'>
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
          {displayInfos}
          <ReactPaginate
            pageCount={3}
            onPageChange={changePage}
            containerClassName={"pagination-btns"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
          />
        </div>
      )}
      {activeSection === "organizations" && (
        <>
          <p className='who-we-help-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          {displayOrgsInfos}
          <ReactPaginate
            pageCount={2}
            onPageChange={changePage}
            containerClassName={"pagination-btns"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
          />
        </>
      )}
      {activeSection === "collections" && (
        <>
          <p className='who-we-help-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          {displayCollInfo}
          <ReactPaginate
            onPageChange={changePage}
            containerClassName={"pagination-btns"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
          />
        </>
      )}
    </section>
  );
}

export default WhoWeHelp;

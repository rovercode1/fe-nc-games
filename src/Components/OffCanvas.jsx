import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function OffCanvas({setReviews}) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [isLoadingFilters, setIsLoadingFilters] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <p onClick={handleShow}>Advance Filters</p>
      <Offcanvas show={show} onHide={handleClose} placement='top' scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Advance Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Filter
            searchParams={searchParams}
            setReviews={setReviews}
            setSearchParams={setSearchParams}
            setIsLoadingReviews={setIsLoadingReviews}
            isLoadingReviews={isLoadingReviews}
            isLoadingFilters={isLoadingFilters}
            setIsLoadingFilters={setIsLoadingFilters}
          />
      </Offcanvas>
    </>
  );
}

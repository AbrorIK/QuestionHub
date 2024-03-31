import { useState } from "react";

export function QuestionForum() {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="d-flex" id="wrapper">
      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary"
        style={{ width: "380px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom"
        >
          <img
            src="../../public/vite.svg" // Use the imported logo as the src
            alt="Vite Logo" // Provide alt text for accessibility
            className="bi me-2" // Apply any additional classes if needed
            width="30" // Set the width as needed
            height="24" // Set the height as needed
            role="img" // Set the role as needed
            aria-label="Vite" // Provide an aria-label if necessary
          />
          <span className="fs-5 fw-semibold">Questions</span>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <a
            href="#"
            className="list-group-item list-group-item-action active py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
        </div>
      </div>
      <div id="page-content-wrapper">Hello</div>
    </div>
  );
}

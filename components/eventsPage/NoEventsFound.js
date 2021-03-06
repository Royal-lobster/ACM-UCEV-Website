import React from "react";
import { Button } from "primereact/button";
import truncateString from "../../utils/truncateString";
function NoEventsFound({
  filterStatus,
  searchEntry,
  setSearchEntry,
  setFilterStatus,
}) {
  return (
    <>
      <div className="noEventsFound">
        <img
          className="noEventsFound__Illustration"
          src="/imgs/results-not-found.svg"
          alt="upcoming events"
        />
        <div className="noEventsFound__Message">
          <h2 className="noEventsFound__MainMessage">No results found</h2>
          {filterStatus.length != 0 ? (
            <>
              <p className="noEventsFound__DetailedMessage">
                No results found for &quot;
                <span
                  style={{ wordWrap: "break-word", wordBreak: "break-all" }}
                >
                  {truncateString(searchEntry, 100)}
                </span>
                &quot;. Try a different search or cancel the search below.
              </p>
              <Button
                label="Cancel Search"
                className="noEventsFound__SearchCancel"
                onClick={() => setSearchEntry("")}
              />
            </>
          ) : (
            <>
              <p className="noEventsFound__StatusFilterDetailedMessage">
                You need to select at least one event status to filter the
                results. Try selecting more statuses or click the button below
                to reset filters
              </p>
              <Button
                label="Reset Filters"
                className="noEventsFound__searchCancelBtn"
                onClick={() =>
                  setFilterStatus(["upcoming", "ongoing", "completed"])
                }
              />
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .noEventsFound {
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 6px;
          margin: 0 auto;
          max-width: min(90vw, 700px);
          background-color: #eeeeee;
        }
        .noEventsFound__MainMessage {
          font-size: min(30px, 8vw);
          color: #444444;
          margin-bottom: 20px;
          flex: 1;
        }
        .noEventsFound__DetailedMessage,
        .noEventsFound__StatusFilterDetailedMessage {
          max-width: 100%;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .noEventsFound__Illustration {
          max-width: min(300px, 70vw);
          width: 50%;
          display: block;
          margin: 0 auto;
        }
        @media only screen and (max-width: 800px) {
          .noEventsFound {
            flex-direction: column;
          }
          .noEventsFound__Message {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 400px;
            text-align: center;
          }
          .noEventsFound__Illustration {
            max-width: min(300px, 70vw);
            width: unset;
          }
        }
      `}</style>
    </>
  );
}

export default NoEventsFound;

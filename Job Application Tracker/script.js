//add-edit application

const applicationForm =
  document.getElementById("application-form");

if (applicationForm) {

  const editApplicationId =
    Number(localStorage.getItem("editApplicationId"));

  const isEditing =
    Boolean(editApplicationId);


//default-application date

  const applyDateInput =
    document.getElementById("apply-date");

  if (applyDateInput && !isEditing) {

    const today =
      new Date().toISOString().split("T")[0];

    applyDateInput.value = today;
  }


//fill form after editing

  if (isEditing) {

    const applications =
      JSON.parse(
        localStorage.getItem("applications")
      ) || [];

    const application =
      applications.find(
        (application) =>
          application.id === editApplicationId
      );

    if (application) {

      document.getElementById(
        "form-title"
      ).textContent = "Edit Application";

      document.getElementById(
        "submit-button"
      ).textContent = "Update Application";

      document.getElementById(
        "company-name"
      ).value = application.company;

      document.getElementById(
        "role"
      ).value = application.role;

      document.getElementById(
        "job-type"
      ).value = application.jobType;

      document.getElementById(
        "work-mode"
      ).value = application.workMode;

      document.getElementById(
        "location"
      ).value = application.location;

      document.getElementById(
        "job-link"
      ).value = application.jobLink;

      document.getElementById(
        "apply-date"
      ).value = application.applyDate;

      document.getElementById(
        "status"
      ).value = application.status;

      document.getElementById(
        "notes"
      ).value = application.notes;
    }
  }


//form-submission logic

  applicationForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const company =
        document.getElementById(
          "company-name"
        ).value.trim();

      const role =
        document.getElementById(
          "role"
        ).value.trim();

      const jobType =
        document.getElementById(
          "job-type"
        ).value;

      const workMode =
        document.getElementById(
          "work-mode"
        ).value;

      const location =
        document.getElementById(
          "location"
        ).value.trim();

      const jobLink =
        document.getElementById(
          "job-link"
        ).value.trim();

      const applyDate =
        document.getElementById(
          "apply-date"
        ).value;

      const status =
        document.getElementById(
          "status"
        ).value;

      const notes =
        document.getElementById(
          "notes"
        ).value.trim();


//form validation
      if (
        company === "" ||
        role === "" ||
        location === "" ||
        applyDate === ""
      ) {

        alert(
          "Please fill in all required fields."
        );

        return;
      }


      const applications =
        JSON.parse(
          localStorage.getItem(
            "applications"
          )
        ) || [];


// edit application

      if (isEditing) {

        const application =
          applications.find(
            (application) =>
              application.id ===
              editApplicationId
          );

        if (application) {

          application.company = company;
          application.role = role;
          application.jobType = jobType;
          application.workMode = workMode;
          application.location = location;
          application.jobLink = jobLink;
          application.applyDate = applyDate;
          application.status = status;
          application.notes = notes;
        }

      }


//add - application

      else {

        const application = {

          id: Date.now(),

          company,
          role,
          jobType,
          workMode,
          location,
          jobLink,
          applyDate,
          status,
          notes
        };

        applications.push(application);
      }


//save
      localStorage.setItem(
        "applications",
        JSON.stringify(
          applications
        )
      );


      localStorage.removeItem(
        "editApplicationId"
      );


//redirection
      window.location.href =
        "applications.html";

    }
  );
}


//list of applications

const applicationsList =
  document.getElementById(
    "applications-list"
  );

if (applicationsList) {

  let applications =
    JSON.parse(
      localStorage.getItem(
        "applications"
      )
    ) || [];


//final if empty state of applications

  if (applications.length === 0) {

    const headerAddButton =
      document.querySelector(
        ".applications-header .add-application"
      );

    if (headerAddButton) {

      headerAddButton.style.display =
        "none";
    }


    const emptyState =
      document.createElement(
        "div"
      );

    emptyState.classList.add(
      "empty-state"
    );


    emptyState.innerHTML = `

      <h2>
        No applications yet
      </h2>

      <p>
        Start tracking your job applications
        by adding your first one.
      </p>

      <a
        href="add-application.html"
        class="add-application">
        Add Application
      </a>

    `;


    applicationsList.appendChild(
      emptyState
    );
  }


//view applications

  applications.forEach(
    (application) => {

      const card =
        document.createElement(
          "div"
        );

      card.classList.add(
        "application-card"
      );

      card.dataset.id =
        application.id;


      card.innerHTML = `

        <div class="application-header">

          <h2>
            ${application.company}
          </h2>

          <p>
            ${application.role}
          </p>

        </div>


        <div class="application-details">

          <p>
            <strong>Location:</strong>
            ${application.location}
          </p>

          <p>
            <strong>Job Type:</strong>
            ${application.jobType}
          </p>

          <p>
            <strong>Work Mode:</strong>
            ${application.workMode}
          </p>

          <p>
            <strong>Applied:</strong>
            ${application.applyDate}
          </p>


          <p class="status-row">

            <strong>Status:</strong>

            <select
              class="status-select ${application.status}"
            >

              <option
                value="applied"
                ${application.status === "applied" ? "selected" : ""}>
                Applied
              </option>

              <option
                value="interview"
                ${application.status === "interview" ? "selected" : ""}>
                Interview
              </option>

              <option
                value="rejected"
                ${application.status === "rejected" ? "selected" : ""}>
                Rejected
              </option>

              <option
                value="offer"
                ${application.status === "offer" ? "selected" : ""}>
                Offer
              </option>

            </select>

          </p>

        </div>


        ${
          application.jobLink
            ? `
              <a
                href="${application.jobLink}"
                target="_blank"
                class="job-link">
                View Job
              </a>
            `
            : ""
        }


        ${
          application.notes
            ? `
              <p class="application-notes">

                <strong>Notes:</strong>
                ${application.notes}

              </p>
            `
            : ""
        }


        <div class="application-actions">

          <button
            type="button"
            class="edit-button">
            Edit
          </button>

          <button
            type="button"
            class="delete-button">
            Delete
          </button>

        </div>

      `;


      applicationsList.appendChild(
        card
      );

    }
  );


  applicationsList.addEventListener(
    "click",
    (event) => {


      //delete

      if (
        event.target.classList.contains(
          "delete-button"
        )
      ) {

        const card =
          event.target.closest(
            ".application-card"
          );

        const applicationId =
          Number(
            card.dataset.id
          );


        // Create modal
        const modal =
          document.createElement(
            "div"
          );

        modal.classList.add(
          "delete-modal"
        );


        modal.innerHTML = `

          <div class="delete-modal-content">

            <h2>
              Delete Application?
            </h2>

            <p>
              Are you sure you want to
              delete this application?
            </p>

            <div
              class="delete-modal-actions">

              <button
                type="button"
                class="cancel-delete">
                Cancel
              </button>

              <button
                type="button"
                class="confirm-delete">
                Delete
              </button>

            </div>

          </div>

        `;


        document.body.appendChild(
          modal
        );


        // Cancel
        modal
          .querySelector(
            ".cancel-delete"
          )
          .addEventListener(
            "click",
            () => {

              modal.remove();

            }
          );


        // Confirm
        modal
          .querySelector(
            ".confirm-delete"
          )
          .addEventListener(
            "click",
            () => {

              const updatedApplications =
                applications.filter(
                  (application) =>
                    application.id !==
                    applicationId
                );


              // Update the current applications array
              applications =
                updatedApplications;


              localStorage.setItem(
                "applications",
                JSON.stringify(
                  applications
                )
              );


              card.remove();

              modal.remove();


              // Show empty state
              if (
                applications.length === 0
              ) {

                const headerAddButton =
                  document.querySelector(
                    ".applications-header .add-application"
                  );

                if (headerAddButton) {

                  headerAddButton.style.display =
                    "none";
                }


                const emptyState =
                  document.createElement(
                    "div"
                  );

                emptyState.classList.add(
                  "empty-state"
                );


                emptyState.innerHTML = `

                  <h2>
                    No applications yet
                  </h2>

                  <p>
                    Start tracking your job
                    applications by adding
                    your first one.
                  </p>

                  <a
                    href="add-application.html"
                    class="add-application">
                    Add Application
                  </a>

                `;


                applicationsList.appendChild(
                  emptyState
                );
              }

            }
          );

      }


      // ================================
      // EDIT
      // ================================

      if (
        event.target.classList.contains(
          "edit-button"
        )
      ) {

        const card =
          event.target.closest(
            ".application-card"
          );

        const applicationId =
          Number(
            card.dataset.id
          );


        localStorage.setItem(
          "editApplicationId",
          applicationId
        );


        window.location.href =
          "add-application.html";
      }

    }
  );


//application-status change

  applicationsList.addEventListener(
    "change",
    (event) => {

      if (
        event.target.classList.contains(
          "status-select"
        )
      ) {

        const card =
          event.target.closest(
            ".application-card"
          );

        const applicationId =
          Number(
            card.dataset.id
          );

        const newStatus =
          event.target.value;


        // Find application
        const application =
          applications.find(
            (application) =>
              application.id ===
              applicationId
          );


        if (application) {

          application.status =
            newStatus;


          // Save immediately
          localStorage.setItem(
            "applications",
            JSON.stringify(
              applications
            )
          );


          // Update badge class
          event.target.className =
            `status-select ${newStatus}`;
        }

      }

    }
  );

}


//dashboard

const totalApplications =
  document.getElementById(
    "total-applications"
  );

if (totalApplications) {

  const applications =
    JSON.parse(
      localStorage.getItem(
        "applications"
      )
    ) || [];


  const appliedCount =
    applications.filter(
      (application) =>
        application.status === "applied"
    ).length;


  const interviewCount =
    applications.filter(
      (application) =>
        application.status === "interview"
    ).length;


  const offerCount =
    applications.filter(
      (application) =>
        application.status === "offer"
    ).length;


  const rejectedCount =
    applications.filter(
      (application) =>
        application.status === "rejected"
    ).length;


  //total
  document.getElementById(
    "total-applications"
  ).textContent =
    applications.length;


  //applied
  document.getElementById(
    "applied-applications"
  ).textContent =
    appliedCount;


  //interviews
  document.getElementById(
    "interview-applications"
  ).textContent =
    interviewCount;


  //offers
  document.getElementById(
    "offer-applications"
  ).textContent =
    offerCount;


  //rejected
  const rejectedApplications =
    document.getElementById(
      "rejected-applications"
    );

  if (rejectedApplications) {

    rejectedApplications.textContent =
      rejectedCount;
  }

}
(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery

// Add click event listeners to the navigation links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-container a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const screenId = event.target.getAttribute("href").substring(1);
      showScreen(screenId);
    });
  });

  // Show the initial screen (e.g., Home)
  showScreen("home");
});

// Function to show the selected screen
function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const selectedScreen = document.getElementById(screenId);

  if (selectedScreen) {
    selectedScreen.classList.add("active");
  }
}

// Function to fetch data from a CSV file and display it as clickable links with images
async function displayDataFromCSVInTable(columnName1, columnName2) {
  try {
    const response = await fetch("event.csv"); // Adjust the path to your CSV file
    const data = await response.text();

    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const members = results.data;

        // Create an empty HTML string to store the member table
        let memberHTML = "<table>";
        let rowCount = 0;

        // Iterate through the members and display data as table cells with four members in each row
        members.forEach((member) => {
          const columnData1 = member[columnName1];
          const columnData2 = member[columnName2];
          const imageFileName = member[columnName1] + ".jpg"; // Assuming image file names match names in the CSV
          if (columnData1 && columnData2) {
            // Start a new row for every four members
            if (rowCount % 4 === 0) {
              memberHTML += "<tr>";
            }

            memberHTML += `<td>
                      <a href="member_details.html?name=${columnData1}" target="_blank" >
                          <div class="member-image-container" >
                          <img src="images_E/${imageFileName}" alt="${imageFileName}" class="member-image">
                          </div>
                           <p class="member-name">${columnData1}</p>
                          <p class="member-data">${columnData2}</p>
                      </a>
                      </td>`;

            // End the row after four members
            if (rowCount % 4 === 3) {
              memberHTML += "</tr>";
            }

            rowCount++;
          }
        });

        // Close any remaining row
        if (rowCount % 4 !== 0) {
          memberHTML += "</tr>";
        }

        memberHTML += "</table>";

        // Update the member-table element with the generated HTML
        document.querySelector(".member-table").innerHTML = memberHTML;
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Specify the column names you want to display
const columnName1ToDisplay = "Names";
const columnName2ToDisplay = "Role";

const columnName1ToDisplayD = "Names";
const columnName2ToDisplayD = "Role";

const columnName1ToDisplayM = "Names";
const columnName2ToDisplayM = "Role";

// Call the function to display data from the specified columns as clickable links with images in a table format when the page loads
window.addEventListener("load", () =>
  displayDataFromCSVInTable(columnName1ToDisplay, columnName2ToDisplay)
);

window.addEventListener("load", () =>
  displayDataFromCSVInTableD(columnName1ToDisplayD, columnName2ToDisplayD)
);

window.addEventListener("load", () =>
  displayDataFromCSVInTableM(columnName1ToDisplayM, columnName2ToDisplayM)
);




// JavaScript to trigger the animation when scrolling down to the section
        window.addEventListener('scroll', function () {
            var slidingText = document.querySelector('.sliding-text');
            var boundingBox = slidingText.getBoundingClientRect();
            var windowHeight = window.innerHeight;

            if (boundingBox.top < windowHeight) {
                slidingText.style.animation = 'slide-in 1s forwards';
            }
        });
    

// Function to fetch data from a Design CSV file and display it as clickable links with images
async function displayDataFromCSVInTableD(columnName1, columnName2) {
  try {
    const response = await fetch("design.csv"); // Adjust the path to your CSV file
    const data = await response.text();

    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const members = results.data;

        // Create an empty HTML string to store the member table
        let memberdHTML = "<table>";
        let rowCount = 0;

        // Iterate through the members and display data as table cells with four members in each row
        members.forEach((member) => {
          const columnData1 = member[columnName1];
          const columnData2 = member[columnName2];
          const imageFileName = member[columnName1] + ".jpg"; // Assuming image file names match names in the CSV
          if (columnData1 && columnData2) {
            // Start a new row for every four members
            if (rowCount % 4 === 0) {
              memberdHTML += "<tr>";
            }

            memberdHTML += `<td>
                      <a href="Designmember_details.html?name=${columnData1}" target="_blank" >
                          <div class="member-image-container" >
                          <img src="images_D/${imageFileName}" alt="${imageFileName}" class="member-image">
                          </div>
                           <p class="member-name">${columnData1}</p>
                          <p class="member-data">${columnData2}</p>
                      </a>
                      </td>`;

            // End the row after four members
            if (rowCount % 4 === 3) {
              memberdHTML += "</tr>";
            }

            rowCount++;
          }
        });

        // Close any remaining row
        if (rowCount % 4 !== 0) {
          memberdHTML += "</tr>";
        }

        memberdHTML += "</table>";

        // Update the member-table element with the generated HTML
        document.querySelector(".memberd-table").innerHTML = memberdHTML;
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to fetch data from a Marketing CSV file and display it as clickable links with images
async function displayDataFromCSVInTableM(columnName1, columnName2) {
  try {
    const response = await fetch("marketing.csv"); // Adjust the path to your CSV file
    const data = await response.text();

    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const members = results.data;

        // Create an empty HTML string to store the member table
        let memberMHTML = "<table>";
        let rowCount = 0;

        // Iterate through the members and display data as table cells with four members in each row
        members.forEach((member) => {
          const columnData1 = member[columnName1];
          const columnData2 = member[columnName2];
          const imageFileName = member[columnName1] + ".jpg"; // Assuming image file names match names in the CSV
          if (columnData1 && columnData2) {
            // Start a new row for every four members
            if (rowCount % 4 === 0) {
              memberMHTML += "<tr>";
            }

            memberMHTML += `<td>
                      <a href="Marketingmember_details.html?name=${columnData1}" target="_blank" >
                          <div class="member-image-container" >
                          <img src="images_M/${imageFileName}" alt="${imageFileName}" class="member-image">
                          </div>
                           <p class="member-name">${columnData1}</p>
                          <p class="member-data">${columnData2}</p>
                      </a>
                      </td>`;

            // End the row after four members
            if (rowCount % 4 === 3) {
              memberMHTML += "</tr>";
            }

            rowCount++;
          }
        });

        // Close any remaining row
        if (rowCount % 4 !== 0) {
          memberMHTML += "</tr>";
        }

        memberMHTML += "</table>";

        // Update the member-table element with the generated HTML
        document.querySelector(".memberM-table").innerHTML = memberMHTML;
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
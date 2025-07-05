 let covidData = [];

    const allowedStates = [
      "Maharashtra", "Kerala", "Karnataka", "Tamil Nadu",
      "Delhi", "Uttar Pradesh", "West Bengal",
      "Gujarat", "Rajasthan", "Bihar"
    ];

    fetch("https://api.rootnet.in/covid19-in/stats/latest")
      .then(response => response.json())
      .then(data => {
        const allRegions = data.data.regional;
        covidData = allRegions.filter(region =>
          allowedStates.includes(region.loc));
        const select = document.getElementById("stateSelect");

        covidData.forEach(region => {
          const option = document.createElement("option");
          option.value = region.loc;
          option.textContent = region.loc;
          select.appendChild(option);
        });
      })
      .catch(error => {
        alert("Failed to load data. Please try again later.");
        console.error("Error fetching COVID-19 data:", error);
      });

    document.getElementById("stateSelect").addEventListener("change", function () {
      const selectedState = this.value;
      const region = covidData.find(r => r.loc === selectedState);
      const statsDiv = document.getElementById("stats");
      const statsCard = document.getElementById("statsCard");

      if (region) {
        statsCard.style.display = "block";
        statsDiv.innerHTML = `
          <p><strong>State: </strong> ${region.loc}</p>
          <p><strong>Total Confirmed Cases: </strong> ${region.totalConfirmed.toLocaleString()}</p>
          <p><strong>Recovered: </strong> ${region.discharged.toLocaleString()}</p>
          <p><strong>Deaths: </strong> ${region.deaths.toLocaleString()}</p>
        `;
      } else {
        statsCard.style.display = "none";
        statsDiv.innerHTML = "";
      }
    });
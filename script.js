document.addEventListener("DOMContentLoaded", () => {
    const companyList = [];
    const addCompanyForm = document.getElementById("add-company-form");
    const companyListContainer = document.getElementById("company-list");
    const companyDashboard = document.querySelector("#company-dashboard tbody");

    addCompanyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const companyName = document.getElementById("company-name").value;
        const location = document.getElementById("location").value;
        const linkedin = document.getElementById("linkedin-profile").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const comments = document.getElementById("comments").value;
        const periodicity = parseInt(document.getElementById("periodicity").value);

        const newCompany = {
            name: companyName,
            location,
            linkedin,
            email,
            phone,
            comments,
            periodicity,
            lastCommunications: [],
            nextCommunication: new Date(Date.now() + periodicity * 86400000),
        };

        companyList.push(newCompany);
        updateUI();
    });

    function updateUI() {
        companyListContainer.innerHTML = companyList
            .map(
                (company, index) =>
                    `<li>${company.name} - Next Communication: ${company.nextCommunication.toDateString()}</li>`
            )
            .join("");

        companyDashboard.innerHTML = companyList
            .map(
                (company, index) => `
            <tr>
                <td>${company.name}</td>
                <td>${company.lastCommunications.join(", ") || "No Communications"}</td>
                <td>${company.nextCommunication.toDateString()}</td>
                <td><button onclick="logCommunication(${index})">Log Communication</button></td>
            </tr>
        `
            )
            .join("");
    }

    window.logCommunication = (index) => {
        const date = prompt("Enter the date of communication (YYYY-MM-DD):");
        const method = prompt("Enter the method of communication:");
        if (date && method) {
            companyList[index].lastCommunications.push(`${method} on ${date}`);
            const periodicity = companyList[index].periodicity;
            companyList[index].nextCommunication = new Date(Date.now() + periodicity * 86400000);
            updateUI();
        }
    };
});

// ===== GLOBAL FUNCTIONS =====

// PROJECTS UPDATE (GLOBAL)
function updateProjects() {
    let inputs = document.getElementsByClassName("projectInput");
    let output = "";

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() !== "") {
            output += "<li>" + inputs[i].value + "</li>";
        }
    }

    let preview = document.getElementById("p_projects");
    if (preview) {
        preview.innerHTML = output;
    }
}

// ADD PROJECT INPUT (GLOBAL)
function addProject() {
    let container = document.getElementById("projectsContainer");

    let input = document.createElement("input");
    input.type = "text";
    input.className = "projectInput";
    input.placeholder = "New Project";

    // 🔥 Direct binding (NO inline issues)
    input.addEventListener("keyup", updateProjects);

    container.appendChild(input);
    container.appendChild(document.createElement("br"));
}



// ===== MAIN CODE =====
document.addEventListener("DOMContentLoaded", function () {

    // ===== BASIC INFO =====
    document.getElementById("name").addEventListener("input", function () {
        document.getElementById("p_name").innerText = this.value;
    });

    document.getElementById("email").addEventListener("input", function () {
        document.getElementById("p_email").innerText = this.value;
    });

    // ===== ADDRESS =====
    document.getElementById("address").addEventListener("input", function () {
        document.getElementById("p_address").innerText = this.value;
    });

    // ===== LINKS =====
    document.getElementById("links").addEventListener("input", function () {
        let link = this.value;
        document.getElementById("p_links").innerHTML =
            `<a href="${link}" target="_blank">${link}</a>`;
    });

    // ===== ABOUT =====
    let about = document.getElementById("about");
    document.getElementById("p_about").innerText = about.value;

    about.addEventListener("input", function () {
        document.getElementById("p_about").innerText = this.value;
    });

    // ===== EXPERIENCE =====
    document.getElementById("experience").addEventListener("input", function () {
        document.getElementById("p_experience").innerText = this.value;
    });

    // ===== EDUCATION =====
    document.getElementById("education").addEventListener("input", function () {
        document.getElementById("p_education").innerText = this.value;
    });

    // ===== SKILLS =====
    document.getElementById("skills").addEventListener("input", function () {
        let skills = this.value.split(",");
        let list = "";

        for (let i = 0; i < skills.length; i++) {
            if (skills[i].trim() !== "") {
                list += "<li>" + skills[i].trim() + "</li>";
            }
        }

        document.getElementById("p_skills").innerHTML = list;
    });

    // ===== FIRST PROJECT INPUT FIX (CRITICAL) =====
    let firstProject = document.querySelector(".projectInput");
    if (firstProject) {
        firstProject.addEventListener("keyup", updateProjects);
    }

    // ===== IMAGE =====
    document.getElementById("imageInput").addEventListener("change", function (e) {
        let file = e.target.files[0];

        if (file) {
            let reader = new FileReader();

            reader.onload = function (ev) {
                let img = document.getElementById("p_image");
                img.src = ev.target.result;
                img.style.display = "block";
            };

            reader.readAsDataURL(file);
        }
    });

    // ===== TEMPLATE =====
    window.setTemplate = function (template) {
        document.getElementById("preview").className = template;
    };

    // ===== PDF =====
    window.downloadPDF = function () {
        const element = document.getElementById("preview");

        html2pdf().from(element).set({
            margin: 10,
            filename: 'resume.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4' },
            pagebreak: { mode: ['css', 'legacy'] }
        }).save();
    };

});
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("leadForm");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const button = form.querySelector("button");

button.disabled = true;
button.innerText = "Submitting...";

        const data = {
            name: form.name.value,
            mobile: form.mobile.value,
            email: form.email.value,
            insurance: form.insurance.value
        };

        try {

            const response = await fetch("https://script.google.com/macros/s/AKfycbwA41av_pdH393bPw_Ffi9blDD43wJ-F0AtSBbimC2PW8ndKwrLPQeAHIhuddkn7rpt0A/exec", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            const result = await response.text();

            alert("✅ Thank you! Your request has been submitted successfully.\n\nOur Insurance Expert will contact you shortly.");

            form.reset();

            button.disabled = false;
button.innerText = "Request Callback";

        } catch (err) {

            console.error(err);

            alert("Error connecting to Google Sheet");

        }

    });

});
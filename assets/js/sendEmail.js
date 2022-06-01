// Below line was added to test out trying to use async instead of '.then'
// document.getElementById("test").addEventListener("click", e => sendMail());

//Below function is the one created by Code Institute
function sendMail(contactForm) {
    emailjs.send("service_umhphq5","template_rwrazjn", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        response => {
            console.log("SUCCESS", response);
    }, e => {
        console.log("FAILED", e);
    });

    return false;
}

//Below function is an attempt at converting the above function to async await, the default onsubmit behaviour seems to
//cause an issue with it. The below works, but the only thing I don't currently understand is 'event' being deprecated so how would default
//behaviour be overridden normally? Perhaps it would be a case of removing onsubmit from being in line and attaching a listener
//to the form in JS, then the event could be passed as a parameter into the function.

// async function sendMail(contactForm) {
//     event.preventDefault();

//     const response = await emailjs.send("service_umhphq5","template_rwrazjn", {
//         "from_name": contactForm.name.value,
//         "from_email": contactForm.emailaddress.value,
//         "project_request": contactForm.projectsummary.value
//     });

//     console.log(response);

//     if (response.status == 200) {
//         console.log("SUCCESS", response);
//     } else {
//         console.log("FAILED", response);
//     };

//     return false;
// }
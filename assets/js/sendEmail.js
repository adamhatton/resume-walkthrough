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
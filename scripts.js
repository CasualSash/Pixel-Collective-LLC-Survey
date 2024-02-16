function validateCheckboxes() {
    const checkbox1 = document.getElementById("quality1");
    const checkbox2 = document.getElementById("quality2");

    if (!checkbox1.checked && !checkbox2.checked) {
      alert("Please select at least one checkbox.");
    } else {
      // Proceed with form submission or other actions
      document.getElementById("survey-form").submit();
    }
  }
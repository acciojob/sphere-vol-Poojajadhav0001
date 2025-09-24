function volume_sphere() {
    
      event.preventDefault(); // form submit थांबवतो (page reload होऊ नये म्हणून)

      // Input values घेणे
      const firstName = document.querySelector('[name="fname"]').value.trim();
      const lastName = document.querySelector('[name="lname"]').value.trim();

      // Full name तयार करणे
      const fullName = `${firstName} ${lastName}`.trim();

      // Output alert
      if (fullName) {
        alert(fullName);
      } else {
        alert("Please enter both First Name and Last Name.");
      }
    }
// Get the navbar element
const navbar = document.querySelector('.navbar');

// Get all the links in the navbar
const links = navbar.getElementsByTagName('a');

// Loop through the links and add a click event listener
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    // Remove the 'active' class from all links
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }

    // Add the 'active' class to the clicked link
    this.classList.add('active');
  });
}


		function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
		}

		window.onclick = function(event) {
			if (!event.target.matches('.dropbtn')) {
				var dropdowns = document.getElementsByClassName("dropdown-content");
				for (var i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		}
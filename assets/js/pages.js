		//Navbar responsiveness
		const menuIcon = document.querySelector('.menu-icon');
		const navOverlay = document.querySelector('.nav-overlay');
		const navMenu = document.querySelector('.navmenu');
		const dropdowns = document.querySelectorAll('.navitem .dropdown');

		function toggleMenuIcon(){
		    navOverlay.classList.toggle('open');
		    navMenu.classList.toggle('open');
		}

		function toggleRemoved(){
		   	navOverlay.classList.remove('open');
		    navMenu.classList.remove('open');
		}

		menuIcon.addEventListener('click', toggleMenuIcon);
		navOverlay.addEventListener('click', toggleRemoved);

		dropdowns.forEach(dropdown => {
			const navitems = dropdown.closest('.navitem');
			navitems.addEventListener('click', function() {
				navitems.classList.toggle('active');
			});
		});


    //Toggle search input
    const mobileBreakpoint = 756;
    const searchIcon = document.querySelector('.search-icon');
    const headerSearchForm = document.querySelector('.header-search-form');
    const searchInput = document.querySelector('.search-input');
    const logoWrapper = document.querySelector('.logo-wrapper');

    function toggleSearchBar(){
      searchIcon.classList.toggle('hide');
      headerSearchForm.classList.toggle('hide');
      searchInput.focus();
  		if (window.innerWidth <= mobileBreakpoint){
			logoWrapper.classList.toggle('hide');
		}
    }
    searchIcon.addEventListener('click', toggleSearchBar);
    searchInput.addEventListener('blur', toggleSearchBar);

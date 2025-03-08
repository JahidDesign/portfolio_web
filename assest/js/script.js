const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.height = mobileMenu.scrollHeight + "px"; // Set height for transition
    } else {
        mobileMenu.style.height = "0";
    }
});


const servicesDropdownToggle = document.getElementById('services-dropdown-toggle');
const servicesDropdown = document.getElementById('services-dropdown');

servicesDropdownToggle.addEventListener('click', () => {
    servicesDropdown.classList.toggle('hidden');
});
function WebCrafted(){
   
    document.getElementById('WebCrafted').style.display = 'block';
      document.getElementById('MarketMinds').style.display = 'none';
      document.getElementById('CreativeCanvas').style.display = 'none';

}
function MarketMinds(){
   
    document.getElementById('WebCrafted').style.display = 'none';
      document.getElementById('MarketMinds').style.display = 'block';
      document.getElementById('CreativeCanvas').style.display = 'none';

}
function CreativeCanvas(){
    
      document.getElementById('WebCrafted').style.display = 'none';
      document.getElementById('MarketMinds').style.display = 'none';
      document.getElementById('CreativeCanvas').style.display = 'block';

}

function updateYear() {
    document.getElementById("dynamicYear").innerHTML = new Date().getFullYear();
}
setInterval(updateYear, 1000);
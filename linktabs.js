//run a function and set the attributes on the Oxygen element
//make another function which removes the active tab and hides its content, then add the active tab
//and reveal content for the desired tab:

function buttonA() {

  // remove "tabB" active tab class and add oxygen hidden class to that content
  var tabB = document.getElementById("_tab-647-534");
  tabB.classList.remove("tabs-1874-tab-active");

  var visiblecontent = document.getElementById("_tab_content-673-534");
  visiblecontent.classList.add("oxy-tabs-contents-content-hidden");
  
  // add oxygen active tab class and remove oxygen hidden class to that content
  var tabA = document.getElementById("_tab-641-534");
  tabA.classList.add("tabs-1874-tab-active");
  
  var hiddencontent = document.getElementById("_tab_content-651-534");
  hiddencontent.classList.remove("oxy-tabs-contents-content-hidden");
  
}

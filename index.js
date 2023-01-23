var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    // document.getElementById("sub-nav").style.width = "130px";
    document.getElementById("main").style.paddingLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    // document.getElementById("sub-nav").style.width = "0px";
    document.getElementById("main").style.paddingLeft = "0px";
    this.mini = true;
  }
}
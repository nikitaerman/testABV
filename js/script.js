function focusPink() {
    document.getElementById('pink-container').style.zIndex = 1;
    document.getElementById('yellow-container').style.zIndex = -1;
  }
  
  function focusYellow() {
    document.getElementById('pink-container').style.zIndex = -1;
    document.getElementById('yellow-container').style.zIndex = 1;
  }

  function focusMenu() {
    document.getElementById('menu1').style.fontWeight = 600;
    document.getElementById('para1').style.fontWeight = 400;
    document.getElementById('para2').style.fontWeight = 400;
  }

  function focusParagraph1() {
    document.getElementById('menu1').style.fontWeight = 400;
    document.getElementById('para1').style.fontWeight = 600;
    document.getElementById('para2').style.fontWeight = 400;
  }
 
  function focusParagraph2() {
    document.getElementById('menu1').style.fontWeight = 400;
    document.getElementById('para1').style.fontWeight = 400;
    document.getElementById('para2').style.fontWeight = 600;
  }


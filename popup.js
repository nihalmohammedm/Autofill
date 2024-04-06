document.getElementById('sendText').addEventListener('click', () => {
  const vusername = document.getElementById('username').value;
  const vpassword = document.getElementById('password').value;
  const vlan = document.getElementById('vlan').value;
 
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: insertTextIntoPage,
          args: [vlan, vusername, vpassword]
      });
  });
});

function insertTextIntoPage(vlan, vusername, vpassword) {
  // This function will be serialized and executed in the context of the webpage
  // Adjust the selector to target the specific input field on the webpage
  console.log(vusername,vpassword,vlan)
  const frame = window.frames[3].document;

  const targetInput4 = frame.querySelector('#lkmode'); // Adjust this selector
  if (targetInput4) {
      targetInput4.value = 1;
  }

  const targetInput5 = frame.querySelector('#IpProtocolType'); // Adjust this selector
  if (targetInput5) {
      targetInput5.value = 1;
  }

  const targetInput1 = frame.querySelector('input[name="pppUsername"]');
  if (targetInput1) {
      targetInput1.value = vusername;
  }

  const targetInput2 = frame.querySelector('input[name="pppPassword"]'); // Adjust this selector
  if (targetInput2) {
      targetInput2.value = vpassword;
  }

  const targetInput3 = frame.querySelector('input[name="vid"]'); // Adjust this selector
  if (targetInput3) {
      targetInput3.value = vlan;
  }

}

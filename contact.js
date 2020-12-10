const cScript = {
    loadTextBox: function() {
     
      document.getElementById('orderno').style.display = 'block';
    },
    unloadTextBox: function() {
      document.getElementById('orderno').style.display = 'none';
    }
  };
  
  window.onload = function() {
    document.getElementById('order').addEventListener('click', () => {
      cScript.loadTextBox();
    });
    document.getElementById('Comment').addEventListener('click', () => {
      cScript.unloadTextBox();
    });
    document.getElementById('question').addEventListener('click', () => {
      cScript.unloadTextBox();
    });
  };
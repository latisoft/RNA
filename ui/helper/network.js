
// =============================================================================
// url = "./image/file.png" or "https://s3.amazonaws.com/project/file.png";
export function netLoad(url, callback) {  
  let xhr = new XMLHttpRequest();  
  xhr.open('GET', url, true);  
  xhr.responseType  = 'blob';  
  xhr.onload  = function(e) {    
    if (this.status == 200) {
      let blob  = new Blob([this.response], { type: 'image/png' });
      let objurl= window.URL.createObjectURL(blob);
      callback(objurl);
    }
  };
  xhr.send();
}
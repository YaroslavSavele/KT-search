document.querySelector('#elastic-name').oninput = function () {
   let val = this.value.trim();
   let elasticItems = document.querySelectorAll('.user_id');



   if (val != '') {
      elasticItems.forEach(function (elem) {
         if (elem.innerText.search(val) == -1) {
            elem.parentElement.classList.add('hide');
            elem.innerHTML = elem.innerText;
         } else {
            elem.parentElement.classList.remove('hide');
            let str = elem.innerText;
            elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
         }
      });
   } else {
      elasticItems.forEach(function (elem) {
         elem.parentElement.classList.remove('hide');
         elem.innerHTML = elem.innerText;
      });
   }
}
document.querySelector('#elastic-emal').oninput = function () {
   let val = this.value.trim();
   let elasticItems = document.querySelectorAll('.user_id');
   

   if (val != '') {
      elasticItems.forEach(function (e) {
         let email = e.nextElementSibling;

         if (email.innerText.search(val) == -1) {
            e.parentElement.classList.add('hide');
            email.innerHTML = email.innerText;
         } else {
            e.parentElement.classList.remove('hide');
            let str = email.innerText;
            email.innerHTML = insertMark(str, email.innerText.search(val), val.length);
         }
      });
   } else {
      elasticItems.forEach(function (e) {
         let email = e.nextElementSibling;
         e.parentElement.classList.remove('hide');
         email.innerHTML = email.innerText;
      });
   }
}

function insertMark(string, pos, len) {


   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}
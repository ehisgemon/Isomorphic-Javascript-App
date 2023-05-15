// "use strict";

const form = document.querySelector('#form-div');
const inputString1 = document.querySelector('#input1');
const inputString2 = document.querySelector('#input2');
const button = document.getElementById('btn');
const clearError = document.querySelector('.false');
const displayTrue = document.querySelector('.true');
const displayReminder = document.querySelector('.remind');

// Add Event listener
form.addEventListener('submit', function(e){
    
    // Get input values
   const string1 = inputString1.value;
   const string2 = inputString2.value;

   // clear error display none   
   clearError.style.display = "none";

   // clear true display 
   displayTrue.style.display = 'none';

    // clear remind display 
   displayTrue.style.display = 'none';


    isIsomorphic(string1,string2);

    e.preventDefault(); 
   
});



// checking for Isomorphic characters
function isIsomorphic(str1,str2){

    //clear input field after execution
   inputString1.value = '';
   inputString2.value = '';

    // check for length of strings
    if(str1.length !== str2.length) {
       
        // clear message
        setTimeout(clearDiv, 3000);

        return clearError.style.display = "block";
       
    }else if(str1 === '' || str2 === ''){
        // clear message
        setTimeout(clearDiv, 3000);

        return displayReminder.style.display = 'block';
         
    }

    for(let i = 0; i < str1.length; i++){
        const a = str1.indexOf(str1[i]);
        const b = str2.indexOf(str2[i]);
        if(str2[a] !== str2[i] || str1[b] !== str1[i]){


            // clear message
          setTimeout(clearDiv, 3000);

          return clearError.style.display = "block";

        }
    }
     // clear message
     setTimeout(clearDiv2, 3000);

    //  clear true display 
    return displayTrue.style.display = 'block';

}

// clear error
function clearDiv(){
    clearError.remove();

    displayReminder.remove();

    window.location.reload();
  
}

// clear error
function clearDiv2(){
    displayTrue.remove();

}





// call all checkboxes in html file
var checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]'); 

// the last checked item (it change every click) 
// we make it refer to first checkbox to let when user press shift and click his first choise to make all checkboxes before this to be checked    
let lastchecked = checkboxes[0];  

function Hcheck(event) {
    
    // we use this boolean to let checkboxes(which are inbetween two checked checkboxes) to be checked also  
    let between = false;  
    
    // shift key is pressed 
    // AND
    // this checkbox is checked not only clicked (it can be clicked so it is checked now then one more clicked so it will be unchecked )   
    if (event.shiftKey && this.checked) {
        
        // we pass over all checkboxes
        checkboxes.forEach( checkbox => {
            
            // lastchecked now = last item checked before this one which we are in it now
            // this = item which we just in it now  
            // when meet the first checked checkbox between will be true and between will remain true until the second checked checkbox
            if(checkbox === lastchecked || checkbox === this){
                between = !between;
            }
            
            // all checkboxes between the fisrt and second checked checkbox will be checked now
            if (between) {
                checkbox.checked=true;
            }
            
        })
        
    }
    
    lastchecked=this;
}

// let every checkbox do Hcheck function when this checkbox is clicked 
checkboxes.forEach(checkbox => checkbox.addEventListener('click',Hcheck))



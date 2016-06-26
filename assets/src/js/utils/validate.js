



// var rules = {
//     required(message = 'this is required') {
//         return function(el) {
//             if(el.value.trim() === ""){
//                 return {
//                     message: message
//                 };
//             }
//         }
//     },
//     reg(regex, message = "Does not match regular expression") {
//         return function(el) {
//             if(!el.value.match(regex)) {
//                 return {
//                     message: message
//                 };
//             }
//         }
//     }
// }



// function validate(form) {
//     let elements = [].slice.call(form.querySelectorAll('[data-validate]'));
//     let partners = [];


//     for(var i = 0; i < elements.length; i++) {
//         // get element data-validate type
//         let validateTypes = elements[i].getAttribute('data-validate').split(',');
//         let validateCheckers = createCheckers(validateTypes);
  
//         partners.push({
//             element: elements[i],
//             validateRules: validateCheckers
//         });
//     }

//     var total = [];

//     partners.forEach(function(p) {
//         var el = p.element;
//         var rules = p.validateRules;

//         var result = rules.map((ruleFunc) => {
//             return ruleFunc(el);
//         });


//         if(result) {
//             total.push({
//                 el: el,
//                 messages: result
//             });
//         }
        
//     });





//     // let results = partners.reduce((current,prev) => {

//     // }, []);


// }




// function createCheckers(validateTypes) {
//     return validateTypes.map((t,i) => {
//         if(rules[t.trim()]){
//             return rules[t]();
//         }
//     });
// }


// export default validate;
const obj = document.querySelectorAll('input[id^="input-"]');
const textAreas = document.querySelectorAll('textarea[id^="input-"]');
const bareas = document.querySelectorAll('button[id^="input-"]');
//Reads and filters for only input fields


/* for (let name of obj) {
  console.log(name.outerHTML);
}
for (let name of bareas) {
  console.log(name.outerHTML);
} */
let str = null;
let numJobs = 0;
let numJobTitle = 0;
let numJobCompa = 0;
let numJobLocat = 0;
let numJobDesc = 0;

// let exampleUserData = { 
//   XXX: 'this should not work',
// };

// var storageItem = browser.storage.managed.get('exampleUserData');
//   storageItem.then((res) => {
//     exampleUserData = res.exampleUserData;
//   });

//   var gettingItem = browser.storage.sync.get('exampleUserData');
//   gettingItem.then((res) => {
//     exampleUserData = res.exampleUserData;
//   });


const exampleUserData = {
  firstname: 'Bill',
  middlename: 'Kantor',
  lastname: 'Pringle',
  address: '200 XXX st',
  city: 'Gwelf',
  postalCode: 'XXXXXX',
  phoneNumber: '3331114444',
  phoneExtension: '',
  jobTitle: [
    'Software Developer',
    'Data Analyst',
  ],
  jobCompany: [
    'Google',
    'Amazon',
  ],
  jobLocation: [
    'San Fran',
    'Toronto',
  ],
  jobDescription: [
    'Job Description 1',
    'Toy Story 2 XXX',
  ],
  school: 'University of Guelph',
  gpa: '3.68',
  socialWebsite: '',
  socialLinkedIn: 'https://www.linkedin.com/in/will-pringle/',
}

console.log('======================================');
console.log(exampleUserData.jobTitle.length);
console.log(document.title);
console.log("test1");

numJobs = exampleUserData.jobTitle.length;
//Slices inputs to filter for the correct matching field, then calls a value = _ to replace
for (let j = 0; j < textAreas.length; j++) {
  str = textAreas[j].outerHTML;
  str = str.slice(str.indexOf('data-automation-id'), str.length);
  str = str.slice(str.indexOf('\"') + 1, str.length);
  str = str.slice(0, str.indexOf('\"'));
  console.log(str);

  enterUserExperienceData(str, exampleUserData, textAreas[j]);
}

for (let i = 0; i < obj.length; i++) {
  str = obj[i].outerHTML;
  //console.log(str);
  str = str.slice(str.indexOf('data-automation-id'), str.length);
  str = str.slice(str.indexOf('\"') + 1, str.length);
  str = str.slice(0, str.indexOf('\"'));
  console.log(str);

  enterUserData(str, exampleUserData, obj[i]);
}

for (let i = 0; i < bareas.length; i++) {
  str = bareas[i].outerHTML;
  //console.log(str);
  str = str.slice(str.indexOf('data-automation-id'), str.length);
  str = str.slice(str.indexOf('\"') + 1, str.length);
  str = str.slice(0, str.indexOf('\"'));
  console.log(str);

  enterUserData(str, exampleUserData, bareas[i]);
}


console.log(obj.length);

function enterUserData(type, userData, element) {
  if (type === 'legalNameSection_firstName') {
    element.value = exampleUserData.firstname;
  }
  else if (type === 'legalNameSection_middleName') {
    element.value = exampleUserData.middlename;
  }
  
  else if (type === 'addressSection_countryRegion') {
    element.value = "218a720b28a74c67b5c6d42c00bdadfa";
    element.innerHTML = "Ontario";
  }
  else if (type === 'legalNameSection_lastName') {
    //element.value = exampleUserData.lastname;
    document.getElementById("input-6").value = "pringle";
    document.getElementById("input-6").click();
  }
  else if (type === 'addressSection_addressLine1') {
    element.value = exampleUserData.address;
  }
  else if (type === 'addressSection_city') {
    element.value = exampleUserData.city;
  }
  else if (type === 'phone-number') {
    element.value = exampleUserData.address;
  }
  else if (type === 'phone-extension') {
    element.value = exampleUserData.address;
  }
  else if (
    type === 'jobTitle' || type === 'company' || type === 'location' 
    ) {
    enterUserExperienceData(type, userData, element);
  }
  else if (type === 'school') {
    element.value = exampleUserData.school;
  }
  else if (type === 'gpa') {
    element.value = exampleUserData.gpa;
  }
  else if (type === 'website') {
    element.value = exampleUserData.socialWebsite;
  }
  else if (type === 'linkedinQuestion') {
    element.value = exampleUserData.socialLinkedIn;
  }
}

function enterUserExperienceData(type, userData, element) {
  if (type === 'jobTitle') {
    element.value = exampleUserData.jobTitle[numJobTitle];
    numJobTitle++;
  } else if (type === 'company') {
    element.value = exampleUserData.jobCompany[numJobCompa];
    numJobCompa++;
  } else if (type === 'location') {
    element.value = exampleUserData.jobLocation[numJobLocat];
    numJobLocat++;
  } else if (type === 'description') {
    element.value = exampleUserData.jobDescription[numJobDesc];
    numJobDesc++;
  }
}

// send the page title as a  message
chrome.runtime.sendMessage(document.title);

/*
// Here is a list of attributes that are checked for in workday

legalNameSection_firstName
legalNameSection_middleName
legalNameSection_lastName
addressSection_addressLine1
addressSection_city
addressSection_postalCode
phone-number
phone-extension
school
gpa
website
linkedinQuestion
*/
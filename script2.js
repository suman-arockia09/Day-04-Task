let resume = [
    {
        "basics": {
            "name": "Suman G",
            "email": "suman.arockia@gmail.com",
            "phone": 8870411696,
            "degree": "BE-ECE"
        }
    },
    {
        "location":
        {
            "address": "Annai Nagar street, Thiruvetriyur",
            "postalCode": 623407,
            "city": "Thiruvadanai",
            "district": "Ramnad",
            "state": "Tamil Nadu",
            "Country": "India"
        }
    },
    {
        "work":
        {
            "company": "Sutherland Global Service",
            "position": "Subject Matter Expert",
            "website": "https://www.sutherlandglobal.com/",
            "startDate": "01/01/2020",
            "endDate": "01/06/2024"
        }
    },
    {
                "education":[
                {
                    "institution": "Mohammed Sathak Engineering College",
                    "Location": "Keelakkarai,Ramanathapuram",
                    "startDate": "April-2007",
                    "endDate": "April-2011",
                    "gpa": "73%",
                    "courses": "Electronic and Communication Engineering"
                }
            ]
    }
]


console.log(resume)
console.log(resume.length)

//ForLoop
for (let i = 0; i < resume.length; i++) {
    console.log(resume[i]);
}

//For in loop

for (var i in resume) {
    console.log(resume[i]);
}

//For of Loop

for (let i of resume) {
    console.log(i);
}

//forEach Loop

resume.forEach(section => {
    console.log(section);
});
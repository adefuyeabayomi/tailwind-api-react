const hireTalentMenu = [
  {
    key: "post-job",
    label: "Post a Job",
    href: "/post-job",
  },
  {
    key: "browse-categories",
    label: "Browse Categories",
    href: "/browse",
  },
  {
    key: "how-it-works",
    label: "How it Works",
    href: "/how-it-works",
  },
];

//
let baseUrl = `https://roomkraft-api-emcx.onrender.com`;

let fullUrl = `${baseUrl}/auth/emailandpassword/signup`;

const userAccount = {
  email: "user@example.com",
  password: "stringst",
  recoveryEmail: "user@example.com",
  role: "user",
  verificationType: "otp",
};

let result = fetch(fullUrl, {
  method: "POST",
  body: userAccount,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log({ result });

//LIFE CYCLE OF DATA IN AN APP

// CREATION
// RETRIEVAL
// UPDATE
// DELETE

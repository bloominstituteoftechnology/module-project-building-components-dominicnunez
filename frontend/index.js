function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const nav = document.createElement('nav');
    links.forEach((link) => {
      let a = document.createElement('a');
      a.href = link['href'];
      a.title = link['title'];
      a.textContent = link['textContent'];
      nav.appendChild(a);
    });
    return nav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here  
    const div = document.createElement('div');
    div.classList.add('learner-card');
    
    let name = document.createElement('p');
    name.textContent = learner.fullName;

    let id = document.createElement('p');
    id.textContent = "Learner ID: " + learner.id;

    let dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = "Date of Birth: " + learner['dateOfBirth'];

    let favLanguage = document.createElement('p');
    const langName = languages.find(language => language.id === learner.favLanguage).name;
    favLanguage.textContent = "Favorite Language: " + langName;

    [name, id, dateOfBirth, favLanguage].forEach((p) => div.appendChild(p))

    function handleClick() {
      // change clicked div card and previous div card
      let activeCard = document.getElementsByClassName('learner-card active');

      if (activeCard.length) {
        activeCard[0].classList.remove('active');
      }
      div.classList.add('active');
    }

    div.addEventListener('click', handleClick);

    return div;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach((learner) => document.querySelector('section').appendChild(buildLearnerCard(learner, languages)));
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer
  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer');
    const companyInfo = document.createElement('div');
    companyInfo.className = "company-info";

    const companyName = document.createElement('p');
    companyName.className = "company-name";
    const companyAddress = document.createElement('p');
    companyAddress.className = "address";
    const companyEmail = document.createElement('p');
    companyEmail.className = "contact-email";
    const emailAddress = document.createElement('a');
    emailAddress.href = "mailto:" + footerData.contactEmail;
    emailAddress.textContent = footerData.contactEmail;

    companyName.textContent = footerData.companyName;
    companyAddress.textContent = footerData.address;
    companyEmail.textContent = "Email: ";
    companyEmail.appendChild(emailAddress);

    companyInfo.appendChild(companyName);
    companyInfo.appendChild(companyAddress);
    companyInfo.appendChild(companyEmail);
    footer.appendChild(companyInfo);

    const socialMedia = document.createElement('div');
    socialMedia.className = "social-media";

    const twitter = document.createElement('a');
    const facebook = document.createElement('a');
    const instagram = document.createElement('a');

    twitter.href = footerData.socialMedia.twitter;
    twitter.textContent = "Twitter";
    facebook.href = footerData.socialMedia.facebook;
    facebook.textContent = "Facebook";
    instagram.href = footerData.socialMedia.instagram;
    instagram.textContent = "Instagram";
    socialMedia.appendChild(twitter);
    socialMedia.appendChild(facebook);
    socialMedia.appendChild(instagram);
    footer.appendChild(socialMedia);

    const div = document.createElement('div');
    div.innerHTML = "&copy; " + footerData.companyName.toUpperCase() + " " + new Date().getFullYear();
    footer.appendChild(div);

    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  //  ✨ do your magic here
  document.addEventListener('click', (e) => {
    let clickedElement = e.target;
    let parentElement = clickedElement.parentNode;
    // console.log(clickedElement.classList, parentElement.classList);
    const checkOne = (!clickedElement.classList.contains('learner-card') || !clickedElement.classList.contains('active'))
    const checkTwo = (!parentElement.classList.contains('learner-card') || !parentElement.classList.contains('active'))
  
    if (checkOne && checkTwo) {
      let activeCard = document.querySelector('.learner-card.active');
      console.log(activeCard);
      if (activeCard != null) {
        activeCard.classList.remove('active');
      }
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()

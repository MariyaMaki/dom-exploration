const ol = document.querySelector("ol");
const firstchild = ol.children[0];
const lastchild = ol.children[4];

firstchild.before(lastchild);

const sectionTwo = document.querySelector("section:nth-of-type(2)");
const sectionThree = document.querySelector("section:nth-of-type(3)");

const hsectionTwo = sectionTwo.querySelector("h2");
const hsectionThree = sectionThree.querySelector("h2");

sectionThree.insertBefore(hsectionTwo, sectionThree.children[0]);

sectionTwo.insertBefore(hsectionThree, sectionTwo.children[0]);

const lastSection = document.querySelector("section:last-child");

lastSection.parentElement.removeChild(lastSection);

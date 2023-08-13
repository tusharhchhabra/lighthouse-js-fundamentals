const instructorWithLongestName = function (instructors) {
  if (instructors.length === 0) {
    return {};
  }

  let instructorToReturn = instructors[0];

  for (const instructor of instructors) {
    const previousLongestLength = instructorToReturn.name.length;
    
    if (instructor.name.length > previousLongestLength) {
      instructorToReturn = instructor;
    }
  }

  return instructorToReturn;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
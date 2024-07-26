export default function LanguageSkills() {
  const LanguageSkills = [
    {
      language: "Python",
      level: 25,
    },
    {
      language: "TypeScript",
      level: 67,
    },
    {
      language: "Java",
      level: 92,
    },
    {
      language: "Kotlin",
      level: 84,
    },
  ];
  return (
    <div className="text-base">
      <h3>Language Skills</h3>

      <div className="space-y-2">
        {LanguageSkills.map((skill, index) => (
          <div
            key={index}
            className="cv-language-skills-outer-bar"
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="cv-language-skills-inner-bar transition duration-500"
              style={{ width: `${skill.level}%` }}
            >
              {skill.language}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

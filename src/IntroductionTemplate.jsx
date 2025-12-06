export default function IntroductionTemplate({
  data,
  name,
  mascot,
  image,
  personal_statement,
  backgrounds,
  classes,
  extra_info,
  fun_facts,
  quote,
  links,
}) {
  return (
    <article>

      {/* --- NAME + MASCOT --- */}
      {(name || mascot) && (
        <h3>
          {name && (
            <>
              {data.name.first}{" "}
              {data.name.middleInitial ? data.name.middleInitial + ". " : ""}
              {data.name.preferred ? `"${data.name.preferred}" ` : ""}
              {data.name.last}
            </>
          )}

          {name && mascot && ` ${data.divider} `}
          {mascot && data.mascot}
        </h3>
      )}

      {/* --- IMAGE --- */}
      {image && (
        <figure>
          <img src={`https://dvonb.xyz${data.media.src}`} width={300} />
          <figcaption>{data.media.caption}</figcaption>
        </figure>
      )}

      {/* --- PERSONAL STATEMENT --- */}
      {personal_statement && <p>{data.personalStatement}</p>}

      {/* --- BACKGROUNDS + CLASSES + EXTRA INFO + FUN FACTS --- */}
      {(backgrounds || classes || extra_info || fun_facts) && (
        <ul>
          {/* BACKGROUNDS */}
          {backgrounds && (
            <>
              <li><strong>Personal Background:</strong> {data.backgrounds.personal}</li>
              <li><strong>Professional Background:</strong> {data.backgrounds.professional}</li>
              <li><strong>Academic Background:</strong> {data.backgrounds.academic}</li>
              <li><strong>Subject Background:</strong> {data.backgrounds.subject}</li>
            </>
          )}

          {/* CLASSES */}
          {classes && (
            <li>
              <strong>Courses:</strong>
              <ol>
                {data.courses.map((course, index) => (
                  <li key={index}>
                    <strong>
                      {course.dept} {course.num} - {course.name}
                    </strong>{" "}
                    : {course.reason}
                  </li>
                ))}
              </ol>
            </li>
          )}

          {/* FUN FACTS */}
          {fun_facts && (
            <li>
              <strong>Fun Fact:</strong> {data.funFact}
            </li>
          )}

          {/* ADDITIONAL INFO */}
          {extra_info && (
            <li>
              <strong>Additional Information:</strong> {data.additional}
            </li>
          )}
        </ul>
      )}

      {/* --- QUOTE --- */}
      {quote && (
        <p>
          <em>{data.quote.text}</em>
          <br />- {data.quote.author}
        </p>
      )}

      {/* --- LINKS --- */}
      {links && (
        <p>
          <a href={data.links.charlotte}>CLT Web</a>{" "}
          <a href={data.links.github}>GitHub Profile</a>{" "}
          <a href="">GitHub Pages</a>
        </p>
      )}

      {/* divider always shown? if not, wrap this too */}
      <hr />
    </article>
  );
}

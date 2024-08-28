export default function Card({ title, imgUrl }) {
  return (
    <section
      className="panel"
      style={{
        backgroundImage: `url('${imgUrl}')`,
      }}
    >
      <h3>{title}</h3>
    </section>
  );
}

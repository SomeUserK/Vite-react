export default function Panel({ title, imgUrl, onClick }) {
  return (
    <section
      onClick={onClick}
      className="panel"
      style={{
        backgroundImage: `url('${imgUrl}')`,
      }}
    >
      <h3 className="title">{title}</h3>
    </section>
  );
}

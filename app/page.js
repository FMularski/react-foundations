import LikeButton from "./like-button";
import Header from "./header";

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <p>Home Page</p>
      <Header title="React" />
      <Header title="Next.js" />
      <Header />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}

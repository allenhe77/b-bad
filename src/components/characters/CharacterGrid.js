import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

function CharacterGrid({ items, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
          ))}
        </section>
      )}
    </div>
  );
}

export default CharacterGrid;

interface PageItem {
  title: string;
  description: string;
  url: string;
}

interface CardProps {
  title: string;
  description: string;
  link: string;
  position: number;
}

function Card(
  { title, description, link, position }: CardProps,
) {
  const shadowColors = [
    "hover:bg-light-magenta/20",
    "hover:bg-light-red/20",
    "hover:bg-light-orange/20",
    "hover:bg-light-yellow/20",
    "hover:bg-light-green/20",
    "hover:bg-light-cyan/20",
    "hover:bg-light-blue/20",
    "hover:bg-light-purple/20",
  ];

  const shadowColor = shadowColors[position % shadowColors.length];

  return (
    <a
      href={link}
      className={`card ${shadowColor}`}
    >
      <h3 className="h3 mono">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}

export default function CardList({ items }: { items: PageItem[] }) {
  const mappedItems = items.map((item, index) => ({
    title: item.title,
    description: item.description,
    link: item.url,
    position: index,
  }));

  return (
    <div className="my-8 space-y-8">
      {mappedItems.map((item) => <Card key={item.title} {...item} />)}
    </div>
  );
}

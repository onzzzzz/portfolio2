interface TechProps {
  // Define props here
}

const Tech: React.FC<TechProps> = ({ }) => {
  return (
    <div className="bg-green-300 h-96">
      <ul>
        <li>React</li>
        <li>Tailwind</li>
        <li>Next js</li>
      </ul>
    </div>
  );
};

export default Tech;

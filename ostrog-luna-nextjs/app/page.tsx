import Container from "./components/Container";

export default function Home() {
  return (
    <div className="pt-20 min-h-screen">
      <Container className="py-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to Ostrog Luna
        </h1>
        <p className="text-lg text-gray-600">
          Premium sunflower oil producer - Homepage coming soon.
        </p>
      </Container>
    </div>
  );
}

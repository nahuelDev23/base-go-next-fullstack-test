const greetings = async (): Promise<any> => {
  const response = await fetch("http://backend:4000/hello");
  return response.text();
};

export default async function hola() {
  const x = await greetings();
  return (
    <>
      <p>{x}</p>
    </>
  );
}

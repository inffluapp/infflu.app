
export default function Header({
  title,
  hideDate
}: Readonly<{
  title: string;
  hideDate?: boolean;
}>) {
  return (
    <div className="w-full px-8 py-4 border-b">
      <h1 className="font-bold" style={{color: '#FF2222', fontSize: 40}}>
        Inffluapp
      </h1>
      <h2 className="font-bold">{title}</h2>
      {!hideDate && (
        <h3>Effective Date: November 26, 2024</h3> 
      )}
    </div>
  );
}

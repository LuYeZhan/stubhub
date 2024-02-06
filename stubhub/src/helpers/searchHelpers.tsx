export function highlightSearchInput(searchInput: string, itemName: string): JSX.Element[] {
  const regex = new RegExp(`(${searchInput})`, 'gi');
  const parts = itemName.split(regex);

  return parts.map((part:string, index) => {
    const isMatch:boolean = part.toLowerCase() === searchInput.toLowerCase();
    return <span key={index} style={{ color: isMatch ? '' : 'black' }}>{part}</span>;
  });
}

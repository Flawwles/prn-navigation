export const SidebarContent = () => {
  return (
    <ul>
      {Array.from({ length: 100 }, (_, index) => (
        <li key={index + 1}>{index + 1}</li>
      ))}
    </ul>
  );
}; 
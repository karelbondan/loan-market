export function capitalize(inp: string) {
  return inp
    ?.split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatPathname(inp: string) {
  const last = inp.split("/").pop()?.replace("_", " ");
  return capitalize(last!);
}

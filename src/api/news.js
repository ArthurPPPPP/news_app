export async function loadNews(type = "trending") {
  const response = await fetch(
    `https://content.guardianapis.com/search?q=${type}&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`
  );

  const data = await response.json();
  return data.response.results;
}

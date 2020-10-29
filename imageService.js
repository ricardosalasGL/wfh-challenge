var imageService = (function () {
  const figmaURL = "https://api.figma.com/v1/images/";
  const authToken = "137654-ed8ee072-bae8-4d5d-991d-6abe160b4296";
  const imagesCode = 'zY7VsMb3kZwf0I1z2oqtoa';

  return {
    getSvgUrl: async () => {
      const response = await fetch(
        `${figmaURL}${imagesCode}?${new URLSearchParams({
          format: "svg",
          ids: "4:2,15:2"
        })}`,
        {
          method: "GET",
          headers: {
            "x-figma-token": authToken
          }
        }
      );
      const data = await response.json();
      return data;
    }
  };
})();

export { imageService };

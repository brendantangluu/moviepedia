function Reviews({ reviewData }) {
  const maxCharacters = 300;

  const truncateContent = (content, maxChars) => {
      if (content.length <= maxChars) {
          return content;
      } else {
          const truncatedContent = content.slice(0, maxChars);
          // Check if the last character is not a space, meaning the last word is incomplete
          if (content[maxChars - 1] !== ' ') {
              // Find the index of the last space and truncate at that point
              const lastSpaceIndex = truncatedContent.lastIndexOf(' ');
              return truncatedContent.slice(0, lastSpaceIndex) + '...';
          } else {
              return truncatedContent + '...';
          }
      }
  };

  return (
      <div>
          <div className="p-2">
              {reviewData.author_details.rating > 1 && (
                  <>
                      <h3>{reviewData.author}</h3>
                      <p className="mb-2">{reviewData.author_details.rating}</p>
                      <p>{truncateContent(reviewData.content, maxCharacters)}</p>
                  </>
              )}
          </div>
      </div>
  );
}

export default Reviews;
